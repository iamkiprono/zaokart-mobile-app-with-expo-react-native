import { View, Text, TextInput } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchInput = () => {
  const navigation = useNavigation<any>();
  return (
    <View className="flex-row justify-between items-center p-4 bg-slate-100">
      <TextInput
        placeholder="Search fresh produce"
        className="bg-slate-200 p-2 rounded-xl flex-1"
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        className="flex-row"
      >
        <FontAwesome className="ml-4" name="shopping-basket" size={24} />
        <Text className="text-[24px] font-bold">0</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
