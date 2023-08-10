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
        </Stack.Navigator>
      </NavigationContainer>
    </CartContextProvider>
  );
};

export default App;
