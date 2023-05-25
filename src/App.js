import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
// import { Home } from './coponents/pages/home/Home';
import { Favorites, Home } from "./coponents/pages";



import './App.css';

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,     
     },
     {
      path: "/favorites",
      element: <Favorites/>     
     },
  ]);
  return <RouterProvider router={router} fallbackElement={<h3>loding</h3>}/>;
}

export default App;
