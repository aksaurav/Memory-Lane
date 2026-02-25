import React, { useState } from "react"; // Added useState import
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CameraView from "./components/CameraView";
import AddPerson from "./pages/AddPerson";
import Auth from "./pages/Auth"; // Added Auth import
import { useFaceDetection } from "./hooks/useFaceDetection";

const App = () => {
  const [authenticated, setAuthenticated] = useState(
    !!localStorage.getItem("token"),
  );

  const { isModelsLoaded } = useFaceDetection();

  // If not logged in, show the Auth page
  if (!authenticated) return <Auth setAuthenticated={setAuthenticated} />;

  // Once authenticated, show the app
  return (
    <Router>
      <nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/" className="font-bold underline">
          Identify
        </Link>
        <Link to="/add" className="font-bold underline">
          Add Person
        </Link>
      </nav>

      <main className="p-4">
        <Routes>
          <Route
            path="/"
            element={<CameraView isModelsLoaded={isModelsLoaded} />}
          />
          <Route path="/add" element={<AddPerson />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
