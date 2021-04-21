import React from 'react';
import { 
  useFonts, 
  Jost_400Regular,
  Jost_600SemiBold 
} from '@expo-google-fonts/jost';
import appLoading from 'expo-app-loading'
import { Welcome } from './src/pages/Welcome'
import AppLoading from 'expo-app-loading';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if(!fontsLoaded)
    return <AppLoading />

  return (
    <Welcome />
  );
}
