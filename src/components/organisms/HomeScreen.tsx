import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../atoms/Text';
import { colors } from '../../designSystem/color';
import HealthForm from '../molecules/HealthForm';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  return (
    <View style={styles.container}>
      <Text type='headerBold' variant="headlineSmall">
        Daily Health Summary
      </Text>
      {data.length == 0 ? (
        <HealthForm/>
      ): (
        <Text type='text'>testa</Text>
      )}
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 100
  },
});