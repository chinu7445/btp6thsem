import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContainer from './components/signin/loginContainer';
import Homepage from './components/homepage/homepage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appData } from './store/context';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage></Homepage>,
    },
    {
      path: "/login",
      element: <LoginContainer></LoginContainer>,
    },
  ]);

  return (
    <>
      <appData.Provider>
        <RouterProvider router={router}></RouterProvider>
      </appData.Provider>
    </>
  );
}

export default App
