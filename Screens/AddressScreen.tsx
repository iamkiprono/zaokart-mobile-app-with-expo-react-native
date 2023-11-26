import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const AddressScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Button onPress={() => navigation.navigate("Pay")} title="Next" />
    </View>
  );
};

export default AddressScreen;
