import { View, Text, Button } from "react-native";
import CartItem from "./CartItem";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { Cart as cartType } from "../types/types";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const { cart } = useContext<any>(CartContext);

  const navigation = useNavigation<any>();

  const totalCost = cart.reduce((previousVal: number, currentVal: cartType) => {
    return previousVal + currentVal.price * currentVal.quantity;
  }, 0);
  return (
    <View className="p-4 flex-1 ">
      {!cart.length ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-center">No items</Text>
          <Button
            onPress={() => navigation.navigate("Main")}
            title="Go to products"
          />
        </View>
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            {cart?.map((singleCartItem: cartType) => {
              return (
                <CartItem
                  singleCartItem={singleCartItem}
                  key={singleCartItem.id}
                />
              );
            })}
          </ScrollView>

          <View className="p-6 flex-row items-center justify-between">
            <Text className="font-bold text-lg">
              Total:{totalCost.toFixed(2)}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Checkout")}
              className="bg-[#be4949] p-6"
            >
              <Text className="text-white">Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default Cart;
