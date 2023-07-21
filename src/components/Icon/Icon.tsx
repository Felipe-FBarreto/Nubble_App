import React from 'react';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';

interface Props {
  name: IconName;
}

export function Icon({name}: Props) {
  const SVIcon = iconRegistry[name];

  return <SVIcon />;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOf: EyeOffIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
