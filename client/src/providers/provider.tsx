import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { ThemeProvider } from "./theme-provider";
import { router, RouterProvider } from "../router";
const _Provider = (): React.ReactNode => {
  return (
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </StrictMode>
  );
};

export default _Provider;
