import React, { useState, useEffect } from "react";
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
  const [pets, setPets] = useState<Pet[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all pets from API
  const fetchPets = async () => {
    try {
      setLoading(true);
      console.log("Fetching pets from API...");
      const response = await fetch("/api/pets/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("API Response status:", response.status);
      console.log("API Response headers:", {
        contentType: response.headers.get("content-type"),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const data = await response.json();
      console.log("API Data received:", data);
      
      // Convert API response to Pet type
      const transformedPets: Pet[] = data.map((pet: any) => ({
        id: String(pet.id),
        name: pet.name,
        species: pet.species as 'dog' | 'cat' | 'other',
        age: pet.age,
        description: pet.description,
        images: pet.images && pet.images.length > 0 ? pet.images : undefined,
        avatar: pet.avatar || (pet.images && pet.images.length > 0 ? pet.images[0] : undefined),
      }));
      console.log("Transformed pets:", transformedPets);
      setPets(transformedPets);
      // Set the first pet as selected
      if (transformedPets.length > 0) {
        setSelectedId(String(transformedPets[0].id));
      }
      setError(null);
    } catch (err) {
      console.error("Error fetching pets from API:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
      console.log("Falling back to mock data...");
      // Fallback to mock data on error
      setPets(mockPets);
      if (mockPets.length > 0) {
        setSelectedId(String(mockPets[0].id));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleSelect = (p: Pet) => setSelectedId(String(p.id));

  // Delete pet by id (calls backend and updates state)
  const deletePet = async (id: string) => {
    const confirmed = window.confirm('Delete this pet? This action cannot be undone.');
    if (!confirmed) return;
    try {
      console.log('Deleting pet', id);
      const resp = await fetch(`/api/pets/${id}`, { method: 'DELETE' });
      console.log('Delete response status:', resp.status);
      if (!resp.ok) throw new Error(`Failed to delete pet: ${resp.status}`);
      setPets((prev) => prev.filter((p) => String(p.id) !== String(id)));
      // if deleted pet was selected, select first available
      if (selectedId === String(id)) {
        setSelectedId((prev) => {
          const remaining = pets.filter((p) => String(p.id) !== String(id));
          return remaining.length > 0 ? String(remaining[0].id) : null;
        });
      }
    } catch (err) {
      console.error('Error deleting pet:', err);
      alert(err instanceof Error ? err.message : 'Delete failed');
    }
  };

  // Add new pet via API and refetch pets list
  const addPet = async (payload: {
    name: string
    species: string
    age?: number
    description?: string
    images?: string[]
  }) => {
    try {
      console.log('Adding pet', payload);
      const resp = await fetch(`/api/pets/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      console.log('Add response status:', resp.status);
      if (!resp.ok) throw new Error(`Failed to add pet: ${resp.status}`);
      const data = await resp.json();
      console.log('Pet added successfully:', data);
      // Refetch all pets to get the updated list
      await fetchPets();
      return data;
    } catch (err) {
      console.error('Error adding pet:', err);
      throw err;
    }
  };

  // Get the selected pet or first pet
  const selectedPet = pets.find(p => p.id === selectedId) || pets[0];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error && pets.length === 0) {
    return <div>Error: {error}</div>;
  }

  return (
    <Routes>
      {/* Redirect root (/) to /login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      {/* Other pages */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tools-dashboard" element={<ToolsDashboard />} />
        <Route path="/pet-profile" element={selectedPet ? <PetProfile pet={selectedPet} /> : <div>No pet selected</div>} />
        <Route path="/life-management" element={selectedPet ? <LifeManagement pet={selectedPet} /> : <div>No pet selected</div>} />
        <Route path="/media-memory" element={selectedPet ? <MediaMemory pet={selectedPet} /> : <div>No pet selected</div>} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/vaccinations" element={<Vaccinations />} />
        <Route path="/billing-details" element={<BillingDetails />} />
        <Route path="/reports" element={<Reports />} />
        <Route
          path="/pet-list"
          element={<PetList pets={pets} onSelect={handleSelect} selectedId={selectedId} onDelete={deletePet} onAdd={addPet} />}
        />
      </Route>
    </Routes>
  );
};

export default RouterSwitcher;
