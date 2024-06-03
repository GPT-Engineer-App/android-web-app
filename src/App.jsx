import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Listings from "./pages/Listings.jsx";
import Navigation from "./components/Navigation.jsx";

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
      </Routes>
    </Router>
  );
}

export default App;
