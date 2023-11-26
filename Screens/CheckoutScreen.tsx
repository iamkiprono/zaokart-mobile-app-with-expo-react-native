import { View, Text, Button } from "react-native";
import React from "react";
import { Switch } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const CheckoutScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("Address")}
        title="Next"
      />
    </View>
  );
};

export default CheckoutScreen;
