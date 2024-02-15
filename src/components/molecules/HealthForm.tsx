import React, { useState } from "react"
import FormButton from "../atoms/FormButton";
import { StyleSheet, View } from "react-native";
import FormRow from "../atoms/FormRow";
import { Modal } from "react-native-paper";
import TextInput from "../atoms/TextInput";
import { HealthFields } from "../../enums/HealthData.enum";
import Button from "../atoms/Button";

const HealthForm = () => {
  const [visible, setVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState<[string, HealthFields]>();
  const [healthData, setHealthData] = useState({});

  const showModal = (field: [string, HealthFields]) => {
    setSelectedRow(field);
    setVisible(true);
  };
  const hideModal = () => setVisible(false);

  const handleLogData = (field: string, value: string) => {
    setHealthData({
      ...healthData,
      [field]: value,
    });
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
    <View style={styles.submitButton}>
    <Button onSubmit={() => console.log('first')}>
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