import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound";
import Dashboard from "../components/admin/Dashboard";
import Movies from "../components/admin/Movies";
import Actors from "../components/admin/Actors";
import Navbar from "../components/admin/Navbar";
import Header from "../components/admin/Header";

export default function AdminNavigator() {
  return (
    <div className="flex dark:bg-primary bg-white">

      <Navbar />
      <div className="flex-1 p-2 max-w-screen-xl">
        <Header onAddMovieClick={()=> {}}/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
