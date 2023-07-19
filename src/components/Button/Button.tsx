import {ActivityIndicator, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export default function Button({
  loading,
  title,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const {colors} = useTheme<Theme>();
  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      borderRadius="s16"
      height={50}
      {...touchableOpacityBoxProps}
      alignItems="center"
      justifyContent="center">
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text color="primaryContrast">{title}</Text>
      )}
    </TouchableOpacityBox>
  );
}
