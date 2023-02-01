import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Link, NavigationContainer } from "@react-navigation/native";
const Login = require("./src/screens/Login").default;
const PasswordRecovery = require("./src/screens/PasswordRecovery").default;
const CreateAccount = require("./src/screens/CreateAccount").default;
import Main from './src/screens/Main';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Login">
            {() => (
              <View style={styles.container}>
                <Login />
                <StatusBar style="auto" />
              </View>
            )}
          </Tab.Screen>
          <Tab.Screen name="PasswordRecovery" component={PasswordRecovery}/>
          <Tab.Screen name="CreateAccount" component={CreateAccount}/>
          <Tab.Screen name="Main" component={Main}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
