// main.tsx (of index.tsx in mijn voorbeeld)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import "./index.css";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import ParkingsPage from "./pages/ParkingsPage.tsx";
import FavoritesContextProvider from "./contexts/FavoritesContext.tsx";
import CartContextProvider from "./contexts/CartContext.tsx"; // Nieuwe import
import FavoritesPage from "./pages/FavoritesPage.tsx";
import DetailsPage from "./pages/DetailsPage.tsx";
import CartPage from "./pages/CartPage.tsx"; // Nieuwe import
import ProductsPage from "./pages/ProductsPage.tsx";
import OffertePage from "./pages/OffertePage.tsx";
import PersonalizePage from "./pages/PersonalizePage.tsx";

const browserRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/products", element: <ProductsPage /> },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/cart", // Nieuwe route voor winkelmandje
        element: <CartPage />,
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
      },
      {
        path: "/parkings",
        element: <ParkingsPage />,
      },
      {
        path: "/offerte",
        element: <OffertePage />,
      },
      {
        path:"/personalize",
        element:<PersonalizePage />,
      }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FavoritesContextProvider>
      <CartContextProvider> {/* Voeg CartContextProvider toe */}
        <RouterProvider router={browserRouter} />
      </CartContextProvider>
    </FavoritesContextProvider>
  </StrictMode>
);
