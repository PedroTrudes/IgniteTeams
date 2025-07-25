
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from '@theme/index';

import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] =  useFonts({Roboto_400Regular, Roboto_700Bold});

  if(fontsLoaded == true)

  return (
      <ThemeProvider theme={theme} >
        <StatusBar 
          barStyle="light-content"
          translucent
        />
        {fontsLoaded ? <Players /> : <Loading/> }
      </ThemeProvider>
  );
}