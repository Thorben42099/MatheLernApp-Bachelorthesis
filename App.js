import React, { useState, useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import { QuizProvider } from './components/QuizContext';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

/**
 * App Komponente
 * 
 * Die Hauptkomponente der Anwendung, die das Quiz-Layout und die Navigation zwischen verschiedenen Bildschirmen darstellt.
 * Diese Komponente lädt benutzerdefinierte Schriftarten und verwaltet den Splash-Screen.
 */

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const fetchFonts = async () => {
  await Font.loadAsync({
    'AvantGarde': require('./fonts/AVGARDD_2.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        await fetchFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoaded(true);
        await SplashScreen.hideAsync();
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  if (!fontLoaded) {
    return null; // Verhindert das Rendern der App, bevor die Schriftarten geladen sind
  }

  return (
    <QuizProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Quiz" component={QuizScreen} />
          <Stack.Screen name="Result" component={ResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QuizProvider>
  );
}
