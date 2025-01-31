import Navigation from '@/navigation';
import theme from '@/utils/theme';
import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {


  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar
          translucent
        />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

