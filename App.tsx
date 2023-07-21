import {SafeAreaView} from 'react-native';
import React from 'react';
import {Text} from './src/components/Text/Text';
import Button from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';
import {EyeOnIcon} from './src/assets/icons/EyeOnIcon';
import {Icon} from './src/components/Icon/Icon';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView
        style={{
          paddingHorizontal: 20,
        }}>
        <Text preset="headingLarge" italic>
          Nubble
        </Text>
        <EyeOffIcon size={100} color="pink" />
        <EyeOnIcon size={100} color="black" />
        <Icon name="eyeOf" />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
