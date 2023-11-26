import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "./Components/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AccountScreen from "./Screens/AccountScreen";
import SearchInput from "./Components/SearchInput";
import Cart from "./Components/Cart";
import HomeNavigator from "./Navigators/HomeNavigator";

import CartContextProvider from "./Context/CartContext";
import CheckoutScreen from "./Screens/CheckoutScreen";
import AddressScreen from "./Screens/AddressScreen";
import PayScreen from "./Screens/PayScreen";
import OrderPlaced from "./Screens/OrderPlaced";

const Stack = createStackNavigator();

const App = () => {
  return (
    <CartContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Main"
            component={HomeNavigator}
          />
          <Stack.Screen
            options={{ animationEnabled: false }}
            name="Cart"
            component={Cart}
          />
          <Stack.Screen
            options={{ animationEnabled: false }}
            name="Checkout"
            component={CheckoutScreen}
          />
          <Stack.Screen
            options={{ animationEnabled: false }}
            name="Address"
            component={AddressScreen}
          />
          <Stack.Screen
            options={{ animationEnabled: false }}
            name="Pay"
            component={PayScreen}
          />
          <Stack.Screen
            options={{ animationEnabled: false }}
            name="OrderPlaced"
            component={OrderPlaced}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartContextProvider>
  );
};

export default App;
