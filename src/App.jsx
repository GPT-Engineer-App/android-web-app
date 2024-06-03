import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Listings from "./pages/Listings.jsx";
import Navigation from "./components/Navigation.jsx";
import Abason from "./pages/Abason.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navigation />
              <Index />
            </>
          }
        />
        <Route
          path="/listings"
          element={
            <>
              <Navigation />
              <Listings />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <Navigation />
              <AdminPanel />
            </>
          }
        />
        <Route
          path="/abason"
          element={
            <>
              <Navigation />
              <Abason />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
