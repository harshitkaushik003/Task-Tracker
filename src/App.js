import "./App.css"
import Home from "./Pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TaskForm from "./Pages/TaskForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[
        {path: '/add', element: <TaskForm/>}
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
