//import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen";

const StackNavigator = () => {
  const MainStack = createStackNavigator();

  return (
    <>
      <MainStack.Navigator>
        <MainStack.Screen
          //options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <MainStack.Screen
          //  options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        {/* <MainStack.Screen
              // options={{ headerShown: false }}
              name="Posts"
              component={PostsScreen}
            /> */}
      </MainStack.Navigator>
    </>
  );
};
export default StackNavigator;
