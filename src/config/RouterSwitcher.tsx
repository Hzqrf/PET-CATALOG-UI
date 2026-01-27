import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import PetList from "../pages/PetList";
import Dashboard from "../pages/Dashboard";
import ToolsDashboard from "../pages/ToolsDashboard";
import PetProfile from "../pages/PetProfile";
import LifeManagement from "../pages/LifeManagement";
import MediaMemory from "../pages/MediaMemory";
import Appointments from "../pages/Appointments";
import Vaccinations from "../pages/Vaccinations";
import BillingDetails from "../pages/BillingDetails";
import Reports from "../pages/Reports";
import Layout from "../components/Layout";
import { Pet } from "../types";
import { mockPets } from "../data/mockPets";

const RouterSwitcher = () => {
  const [pets] = useState<Pet[]>(mockPets);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (p: Pet) => setSelectedId(p.id);

  return (
    <Routes>
      {/* Redirect root (/) to /login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      {/* Other pages */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tools-dashboard" element={<ToolsDashboard />} />
        <Route path="/pet-profile" element={<PetProfile pet={pets[0]} />} />
        <Route path="/life-management" element={<LifeManagement pet={pets[0]} />} />
        <Route path="/media-memory" element={<MediaMemory pet={pets[0]} />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/vaccinations" element={<Vaccinations />} />
        <Route path="/billing-details" element={<BillingDetails />} />
        <Route path="/reports" element={<Reports />} />
        <Route
          path="/pet-list"
          element={<PetList pets={pets} onSelect={handleSelect} selectedId={selectedId} />}
        />
      </Route>
    </Routes>
  );
};

export default RouterSwitcher;
