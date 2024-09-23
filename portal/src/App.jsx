import './App.css'
import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Home from './components/Home.jsx';
import Applications from './components/Applications.jsx';
import Contact from './components/Contact.jsx';
import RootLayout from './components/RootLayout.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/services', element: <Services /> },
            { path: '/applications', element: <Applications /> },
            { path: '/contact', element: <Contact /> }
        ]
    }
]);

function App() {

    return <RouterProvider router={router} />
}

export default App;
