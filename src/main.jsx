import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GalleryPage from './pages/gallery';
import Homepage from './pages/home';
import ServicesPage from './pages/services';
import NotFoundPage from './pages/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/services',
    element: <ServicesPage/>
  },
  {
    path: '/gallery',
    element: <GalleryPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
