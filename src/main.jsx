import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


import Root from "./routes/root";

import ErrorPage from "./error-page";
import Creativity from "./routes/creativityPage";
import StartLearning from "./routes/StartLearningPage";
import About from "./routes/AboutUsPage.jsx";
import Inprogress from "./routes/inProgressPage";
import EmotionalIntelligence from "./routes/EmotionalIntelligence";
import CriticalThinking from "./routes/CriticialThinking";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
      element: <About />,
  },
    {
      path: "home/startlearning",
      element: <StartLearning />,
    },
    {
      path: "/creativity",
        element: <Creativity />,
    },
    {
      path: "/inprogress",
        element: <Inprogress />,
    },
    {
      path: "/emotional-intelligence",
        element: <EmotionalIntelligence />,
    },

    {
      path: "/critical-thinking",
        element: <CriticalThinking />,
    },



    
    {
      path: "/creativity/home/startlearning",
      element: <StartLearning />,
    },
  ]); 
    


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);