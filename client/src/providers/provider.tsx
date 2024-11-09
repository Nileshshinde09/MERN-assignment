import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { ThemeProvider } from "./theme-provider";
const _Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    </StrictMode>
  );
};

export default _Provider;
