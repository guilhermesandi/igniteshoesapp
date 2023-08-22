import { StatusBar } from 'react-native';
import OneSignal from 'react-native-onesignal';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

const { ONESIGNAL_KEY } = process.env;

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';
import { tagUserEmailCreate } from './src/notifications/notificationsTags';

import { CartContextProvider } from './src/contexts/CartContext';

OneSignal.setAppId(ONESIGNAL_KEY);

OneSignal.setEmail('guilherme_sandi@hotmail.com');

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserEmailCreate('guilherme_sandi@hotmail.com');

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}