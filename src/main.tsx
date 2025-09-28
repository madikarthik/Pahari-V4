import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage'
import BlogsPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import ProductDetailPage from './pages/ProductDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'product/:id', element: <ProductDetailPage /> },
      { path: 'about', element: <AboutPage /> },    
      { path: 'blogs', element: <BlogsPage /> },    
      { path: 'contact', element: <ContactPage /> } 
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
