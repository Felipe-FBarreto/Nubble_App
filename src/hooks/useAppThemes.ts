import { Theme } from "../theme/theme";
import { useTheme } from "@shopify/restyle";


export const useAppTheme = () =>{
  return useTheme<Theme>()
}