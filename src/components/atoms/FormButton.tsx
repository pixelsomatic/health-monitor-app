import React from "react"
import { Button } from "react-native-paper";
import { colors } from "../../designSystem/color";

type FormButtonProps = {
  label: string,
  onPress: () => void
}

const FormButton = ({label, onPress}: FormButtonProps) => {
  return (
    <Button
      buttonColor={colors.lightBlue}
      mode="contained"
      labelStyle={{fontWeight: 'bold'}}
      textColor={colors.text}
      onPress={onPress}
    >{label}</Button>
  )
}

export default FormButton;