import "@/styles/globals.css";
import theme from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
