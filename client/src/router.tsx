import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  import { Dashboard } from "./pages";
  import { Login } from "./Auth";
  import { PageNotFound, ProtectedAuthLayout } from "./components";
  import App from "./App";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route
          path="/login"
          element={
            <ProtectedAuthLayout authentication={true}>
              <Login />
            </ProtectedAuthLayout> 
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedAuthLayout authentication={true}>
              <Dashboard />
            </ProtectedAuthLayout>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  
  export {
      router,
      RouterProvider
  }
  