import { ThemeColors } from "../../theme/theme";
import { TouchableOpacityBoxProps } from "../Box/Box";
import { ButtonPreset } from "./Button";

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const ButtonPresets: Record<ButtonPreset, {
  default:ButtonUI,
  disabled:ButtonUI
}> = {
  primary: {
   default:{
    container: {
      backgroundColor: 'primary',
    },
    content: 'primaryContrast',
   },
   disabled:{
    container: {
      backgroundColor: 'gray4',
    },
    content: 'gray2',
   }
  },
  outline: {
    default:{
      container: {
        borderRadius: 's16',
        borderWidth: 1,
        borderColor: 'primary',
      },
      content: 'primary',
    },
    disabled:{
      container:{
        borderRadius: 's16',
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content:"gray2"
    }
  }
};

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset: ButtonPreset;
}
