import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { MD3DarkTheme, PaperProvider } from 'react-native-paper';
import { PlaylistProvider } from '../context/PlaylistContext';

export default function RootLayout() {
  return (
    <PaperProvider
      theme={MD3DarkTheme}
      settings={{
        icon: (props) => <MaterialCommunityIcons {...props} />,
      }}
    >
      <PlaylistProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="reproductor" options={{ presentation: 'card' }} />
        </Stack>
      </PlaylistProvider>
    </PaperProvider>
  );
}