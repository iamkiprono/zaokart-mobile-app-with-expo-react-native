import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Fa from "react-native-vector-icons/FontAwesome";
import { Cart } from "../types/types";
import { CartContext } from "../Context/CartContext";

const CartItem = ({ singleCartItem }: { singleCartItem: Cart }) => {
  const { increaseQuantity, decreaseQuantity, deleteItem } =
    useContext<any>(CartContext);

  return (
    <View className="bg-white py-6 px-4 flex-row items-center my-2 justify-between">
      <View>
        <Image
          className="h-20 w-32  "
          source={{
            uri: singleCartItem.image,
          }}
        />
      </View>
      <View className="">
        <Text className="font-bold">{singleCartItem.name}</Text>
        <Text>{singleCartItem.price * singleCartItem.quantity}</Text>
        <View className="flex-row mt-2">
          <TouchableOpacity
            onPress={() => {
              if (singleCartItem.quantity === 1) {
                return deleteItem(singleCartItem);
              }
              decreaseQuantity(singleCartItem);
            }}
            className="px-3 py-2 border border-.1 rounded"
          >
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity className="ml-2 px-3 py-2 border border-.1 rounded">
            <Text className="font-bold">{singleCartItem.quantity}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => increaseQuantity(singleCartItem)}
            className="ml-2 px-3 py-2 border border-.1 rounded"
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => deleteItem(singleCartItem)}>
        <Fa name="trash" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
