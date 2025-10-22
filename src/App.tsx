import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Budget from "./pages/Budget";
import Payments from "./pages/Payments";
import FraudDetection from "./pages/FraudDetection";
import CitizenPortal from "./pages/CitizenPortal";
import Reports from "./pages/Reports";
import Audit from "./pages/Audit";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/fraud-detection" element={<FraudDetection />} />
          <Route path="/citizen-portal" element={<CitizenPortal />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/audit" element={<Audit />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
