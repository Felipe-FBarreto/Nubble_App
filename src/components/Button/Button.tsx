import {ActivityIndicator, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '../Text/Text';
import {BaseTheme, useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {Box} from '../Box/Box';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export default function Button({loading, title}: ButtonProps) {
  const {colors} = useTheme<Theme>();
  return (
    <Box
      backgroundColor="primary"
      paddingHorizontal="s20"
      borderRadius="s16"
      height={50}
      // width="90%"
      alignItems="center"
      justifyContent="center">
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text style={{color: '#fff'}}>{title}</Text>
      )}
    </Box>
  );
}
