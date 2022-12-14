import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Loading } from '@components/Loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
// import { Groups } from '@screens/Groups';
// import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Players /> : <Loading />}

      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
    </ThemeProvider>
  );
}
