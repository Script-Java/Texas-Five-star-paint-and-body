import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'preline';
import Homepage from './pages/home'
import ServicesPage from './pages/services';
import GalleryPage from './pages/gallery';
import AboutUsPage from './pages/about';
import NotFoundPage from './pages/error';
import Befaf from './pages/befaf';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
  },
  {
    path: '/beforenafter',
    element: <Befaf/>
  },
  {
    path: '/about',
    element: <AboutUsPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
