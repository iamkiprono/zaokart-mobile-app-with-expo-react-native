import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const PayScreen = () => {

    const navigation = useNavigation<any>();
  return (
    <View>
      <Text>PayScreen</Text>
      <Button onPress={() => navigation.navigate("OrderPlaced")} title='Next'/>
    </View>
  )
}

export default PayScreen