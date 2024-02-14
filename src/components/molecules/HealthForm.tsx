import React, { useState } from "react"
import FormButton from "../atoms/FormButton";
import { StyleSheet, View } from "react-native";
import FormRow from "../atoms/FormRow";
import { Modal } from "react-native-paper";
import TextInput from "../atoms/TextInput";
import { HealthFields } from "../../enums/HealthData.enum";

const HealthForm = () => {
  const [visible, setVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState('');

  const showModal = (field: string) => {
    setSelectedRow(field);
    setVisible(true);
  };
  const hideModal = () => setVisible(false);

  return (
    <>
    <View style={styles.container}>
      {Object.values(HealthFields).map(field => (
        <View style={styles.row} key={field}>
          <FormRow title={field} />
          <FormButton label="Log" onPress={() => showModal(field)}/>
        </View>
      ))}
    </View>
    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
      <TextInput 
        placeholder="Log your health data"
        label={`${selectedRow} Data`}
        type="default"
        onChange={() => console.log('first')}
      />
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
  }
})