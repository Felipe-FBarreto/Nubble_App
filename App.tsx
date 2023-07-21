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
        <Icon color="carrotSecondary" size={50} name="eyeOff" />
        <Icon color="carrotSecondary" size={50} name="bookmark" />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
