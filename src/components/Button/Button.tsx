import {ActivityIndicator, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme, ThemeColors} from '../../theme/theme';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {ButtonPresets} from './ButtonPresets';
export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset: ButtonPreset;
}

export default function Button({
  loading,
  title,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const {colors} = useTheme<Theme>();

  const ButtonPreset = ButtonPresets[preset];

  return (
    <TouchableOpacityBox
      {...ButtonPreset.container}
      paddingHorizontal="s20"
      borderRadius="s16"
      height={50}
      {...touchableOpacityBoxProps}
      alignItems="center"
      justifyContent="center">
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text color={ButtonPreset.content}>{title}</Text>
      )}
    </TouchableOpacityBox>
  );
}
