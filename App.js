import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import SignInScreen from './screens/SignInScreen/SignInScreen';
//import CustomInput from './components/custominput/CustomInput';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import page1 from './screens/HomePages/page1';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavPage from './screens/NavPage/NavPage';



const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.root}>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="NavPage" component={NavPage} />
          {/* Add other screens here */}
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#f9fbfc',
  },
});
