import {} from 'react-native';
import React from 'react';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme, ThemeColors} from '../../theme/theme';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {ButtonPresets} from './ButtonPresets';
export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset: ButtonPreset;
  disabled?: boolean;
}

export default function Button({
  loading,
  title,
  disabled,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const ButtonPreset = ButtonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      {...ButtonPreset.container}
      paddingHorizontal="s20"
      borderRadius="s16"
      height={50}
      disabled={disabled || loading}
      {...touchableOpacityBoxProps}
      alignItems="center"
      justifyContent="center">
      {loading ? (
        <ActivityIndicator color={ButtonPreset.content} />
      ) : (
        <Text color={ButtonPreset.content}>{title}</Text>
      )}
    </TouchableOpacityBox>
  );
}
