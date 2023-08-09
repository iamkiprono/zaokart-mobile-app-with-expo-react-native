import "react-native-gesture-handler";

import HomeScreen from "../Components/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "../Screens/AccountScreen";

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: true }}
        name="Account"
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
