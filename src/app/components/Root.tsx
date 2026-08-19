import { useEffect } from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";
import { initializeDemoData } from "../utils/demoData";

export function Root() {
  useEffect(() => {
    // Initialize demo data on first load
    initializeDemoData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
      <Toaster position="top-right" />
    </div>
  );
}