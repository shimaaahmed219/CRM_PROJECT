import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layouts";
import Home from "./pages/Home";
import PageThree from "./pages/PageThree";




function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}



function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route element={<ScrollToTop/>} />
      <Route path="/" element={<Home/>}/>
      <Route path="/three" element={<PageThree/>}/>
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
