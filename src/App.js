import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExerciseDetail from "./components/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WorkoutDetails from "./pages/WorkoutDetails";

const App = () => {
  return (
    <div className="text-gray-800 w-full m-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<WorkoutDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
