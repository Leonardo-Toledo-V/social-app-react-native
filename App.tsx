import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/Login/LoginScreen';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from './utils/FirebaseConfig';
import HomeScreen from './app/screens/Home/HomeScreen';
import RegisterScreen from './app/screens/Register/RegisterScreen';
import OnBoardingScreen from './app/screens/OnBoarding/OnBoardingScreen';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='home' component={HomeScreen} />
    </InsideStack.Navigator>
  )

}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user' + user);
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        {user ? (
          <Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name='onBoarding' component={OnBoardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name='login' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name='register' component={RegisterScreen} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}