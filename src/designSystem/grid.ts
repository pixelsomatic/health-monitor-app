import { Dimensions } from "react-native";

export const sizes = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  eighty: Dimensions.get('screen').width * .8,
  full: Dimensions.get('screen').width
};
