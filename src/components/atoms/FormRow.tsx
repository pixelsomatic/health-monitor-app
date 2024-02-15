import React from "react"
import { View } from "react-native"
import Text from "./Text"

type FormRowProps = {
  title: string,
  value?: string
}

const FormRow = ({title, value}: FormRowProps) => {
  return (
    <View>
      <Text type="text" variant="titleMedium">{title}</Text>
      {value ? (
        <View style={{alignItems: 'flex-start'}}>
          <Text type="text" variant="bodyMedium">{value}</Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

export default FormRow;