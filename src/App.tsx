import "./App.css";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const routerConfig = createBrowserRouter([
  {
    path:"/",
    element:<Welcome/>
  }, {
    path:"/step-one",
    element:<StepOne/>
  },
  {
    path:"/step-two",
    element:<StepTwo/>
  },
  {
    path:"/step-three",
    element:<StepThree/>
  },
  {
    path:"/step-four",
    element:<StepFour/>
  },
  {
    path:"/thanks",
    element:<Thanks/>
  },
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={routerConfig}/>
    </div>
  );
}

export default App;
