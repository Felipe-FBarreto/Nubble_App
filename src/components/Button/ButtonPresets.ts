import { ThemeColors } from "../../theme/theme";
import { TouchableOpacityBoxProps } from "../Box/Box";
import { ButtonPreset } from "./Button";

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const ButtonPresets: Record<ButtonPreset, ButtonUI> = {
  primary: {
    container: {
      backgroundColor: 'primary',
    },
    content: 'primaryContrast',
  },
  outline: {
    container: {
      borderRadius: 's16',
      borderWidth: 1,
      borderColor: 'primary',
    },
    content: 'primary',
  },
};

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset: ButtonPreset;
}
