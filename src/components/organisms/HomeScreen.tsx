import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Text from '../atoms/Text';
import HealthForm from '../molecules/HealthForm';
import { HealthData } from '../../types/data.type';
import OpenAI from 'openai';
import Toast from 'react-native-toast-message';


const HomeScreen = () => {  
  const sendHealthDataToOpenAI = async (healthData: HealthData):
   Promise<string> => {
    try {
      const openai = new OpenAI({
        apiKey: process.env.EXPO_PUBLIC_OPENAI_API,
      });

      const healthDataMessage = generateHealthDataMessage(healthData);
      const completion = await openai.chat.completions.create({
        messages: [
          {
            "role": "user",
            "content": healthDataMessage
          }
        ],
        model: "gpt-3.5-turbo",
        max_tokens: 300,
        temperature: 0.3
      });
    
      return completion.choices[0].message.content;  
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'OpenAI is unavailable at the moment, try again later.',
      });
      console.log('openai error: ', error);
    }
  }

  const generateHealthDataMessage = (healthData: HealthData): string => {
    const { bloodPressure, heartRate, bloodGlucose, weight } = healthData;
    let message = "I'm experiencing some health symptoms. My vital signs are as follows: ";
  
    if (bloodPressure) {
      message += `my blood pressure is ${bloodPressure}, `;
    }
    if (heartRate) {
      message += `my heart rate is ${heartRate}, `;
    }
    if (bloodGlucose) {
      message += `my blood glucose level is ${bloodGlucose}, `;
    }
    if (weight) {
      message += `my weight is ${weight}, `;
    }
  
    message += "Can you check for any anomalies in my health data and provide healthy value ranges? ";
    message += "You can be very concise and answer only if the value is abnormal or not and what is the healthy value or range. "
  
    return message;
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text type='headerBold' variant="headlineSmall">
        Daily Health Summary
      </Text>
      <HealthForm 
        sendHealthData={(data: HealthData) => sendHealthDataToOpenAI(data)}
      />
    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 100
  },
});