import React, { useState } from "react"
import FormButton from "../atoms/FormButton";
import { Keyboard, StyleSheet, View } from "react-native";
import FormRow from "../atoms/FormRow";
import { Modal } from "react-native-paper";
import TextInput from "../atoms/TextInput";
import { HealthFields } from "../../enums/HealthData.enum";
import Button from "../atoms/Button";
import { HealthData } from "../../types/data.type";
import Text from "../atoms/Text";
import Toast from 'react-native-toast-message';

type HealthFormProps = {
  sendHealthData: (data: HealthData) => Promise<string>;
}

const HealthForm = ({sendHealthData}: HealthFormProps) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedRow, setSelectedRow] = useState<[string, HealthFields]>();
  const [healthData, setHealthData] = useState<HealthData>();
  const [openAIResponse, setOpenAIResponse] = useState('');

  const showModal = (field: [string, HealthFields]) => {
    setSelectedRow(field);
    setVisible(true);
  };
  const hideModal = () => {
    Keyboard.dismiss()
    setVisible(false);
  };

  const handleLogData = (field: string, value: string) => {
    setHealthData({
      ...healthData,
      [field]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (!healthData || !Object.values(healthData).some((value) => value)) {
        Toast.show({
          type: 'info',
          text1: 'Please fill in at least one health data field.',
        });
        return;
      }
      setLoading(true);
      const response = await sendHealthData(healthData);
      setOpenAIResponse(response);
      setLoading(false);  
    } catch (error) {
      console.log('Submit health data error: ', error);
      Toast.show({
        type: 'error',
        text1: 'Incorrect health data.',
      });
    }
  };

  return (
    <>
    <View style={styles.container}>
      {Object.entries(HealthFields).map(field => (
        <View style={styles.row} key={field[1]}>
          <FormRow 
            title={field[1]} 
            value={healthData ? healthData[field[0]] : ''}
          />
          <FormButton label="Log" onPress={() => showModal(field)}/>
        </View>
      ))}
    </View>
    {openAIResponse ? (
      <View>
        <Text type='headerBold' variant="headlineSmall">
          Health Data Insights
        </Text>
        <Text type="text" variant="bodyLarge">
          {openAIResponse}
        </Text>
      </View>
    ) : <></>}
    <View style={styles.submitButton}>
    <Button loading={loading} onSubmit={() => handleSubmit()}>
      Submit
    </Button>
    </View>
    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
      <TextInput 
        placeholder="Log your health data"
        label={selectedRow ? `${selectedRow[1]} Data` : ''}
        type="default"
        onChange={(value) => handleLogData(selectedRow[0], value)}
      />
      <Button onSubmit={hideModal}>
        Log data
      </Button>
    </Modal>
    </>
  )
}

export default HealthForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15
  },
  modal: {
    backgroundColor: 'white', 
    padding: 20, 
    marginHorizontal: 20
  },
  submitButton: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: 30,
    justifyContent: 'flex-end'
  }
})