import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
export default function RootLayout() {


  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />

        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      </Stack>
  );
}
