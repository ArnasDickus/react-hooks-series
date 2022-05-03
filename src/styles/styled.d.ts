import 'styled-components';
import { themeColors } from './colors';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof themeColors;
  }
}
