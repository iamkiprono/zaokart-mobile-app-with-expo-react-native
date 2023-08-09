import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Fa from "react-native-vector-icons/FontAwesome";

const CartItem = () => {
  return (
    <View className="bg-white py-6 px-4 flex-row items-center my-2 justify-between">
      <View>
        <Image
          className="h-20 w-32  "
          source={{
            uri: "https://imexagro.com/wp-content/uploads/2022/03/Red-Plum.jpg",
          }}
        />
      </View>
      <View className="">
        <Text className="font-bold">Plum</Text>
        <Text>$20</Text>
        <View className="flex-row mt-2">
          <TouchableOpacity className="px-3 py-2 border border-.1 rounded">
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity className="ml-2 px-3 py-2 border border-.1 rounded">
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity className="ml-2 px-3 py-2 border border-.1 rounded">
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <Fa name="trash" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
