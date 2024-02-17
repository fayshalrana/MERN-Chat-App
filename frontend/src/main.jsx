import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx'
import ChatPage from './Pages/ChatPage.jsx'
import ChatProvider from './Context/ChatProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/chats",
        element: <ChatPage />,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChatProvider>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </ChatProvider>,
)
