import './App.css'
import { RouterProvider, createRoute, createRouter } from "@tanstack/react-router";
import {routeTree} from "./routeTree.gen";

const router = createRouter({ routeTree});

function App() {

    return (
      <RouterProvider router = {router} />
    );
    //<h1 className='text-5xl p-4 text-blue-700'>We are learning Full-stack</h1>
}

export default App
