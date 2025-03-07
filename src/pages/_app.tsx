import type { AppProps } from "next/app";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import "@fontsource/inter";
import { theme } from "@/styles/muiStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles
        styles={{
          ".css-qxwwfq": {
            width: "auto !important",
          },
          ".css-7ubdaa": {
            width: "auto !important",
          },
        }}
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
