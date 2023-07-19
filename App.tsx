import {SafeAreaView} from 'react-native';
import React from 'react';
import {Text} from './src/components/Text/Text';
import Button from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView
        style={{
          paddingHorizontal: 20,
          // justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <Text preset="headingLarge" italic>
          Nubble
        </Text>
        <Button title="Entrar" backgroundColor="primary" mt="s40" />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
