import { View, Text } from "react-native";
import React from "react";
import CartItem from "./CartItem";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Cart = () => {
  return (
    <View className="p-4 flex-1 ">
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItem />
      </ScrollView>

      <View className="p-6 flex-row items-center justify-between">
        <Text className="font-bold text-lg">Total:</Text>
        <TouchableOpacity className="bg-[#be4949] p-6">
          <Text className="text-white">Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
