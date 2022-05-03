import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { themeColors } from '@styles/colors'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={{ colors: themeColors}}>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
