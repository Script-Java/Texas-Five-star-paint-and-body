// FILE: src/main.jsx
// This is your main entry point. It sets up the router.

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'preline';

// Import your layout and page components
import RootLayout from './components/RootLayout';
import Homepage from './pages/home';
import ServicesPage from './pages/services';
import GalleryPage from './pages/gallery';
import AboutUsPage from './pages/about';
import Befaf from './pages/befaf';
import NotFoundPage from './pages/error';

const router = createBrowserRouter([
  {
    element: <RootLayout />, // Use RootLayout as the main wrapper for all pages
    errorElement: <NotFoundPage />,
    children: [ // All your pages are now children of the layout
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/services',
        element: <ServicesPage />
      },
      {
        path: '/gallery',
        element: <GalleryPage />
      },
      {
        path: '/beforenafter',
        element: <Befaf />
      },
      {
        path: '/about',
        element: <AboutUsPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);





