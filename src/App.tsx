import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Digital506 from "./pages/systems/Digital506";
import DigitalExportSystem from "./pages/systems/DigitalExportSystem";
import SyndromicSurveillance from "./pages/systems/SyndromicSurveillance";
import NoCaseNotification from "./pages/systems/NoCaseNotification";
import AEFI from "./pages/systems/AEFI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/systems/digital-506" element={<Digital506 />} />
          <Route path="/systems/digital-export-system" element={<DigitalExportSystem />} />
          <Route path="/systems/syndromic-surveillance" element={<SyndromicSurveillance />} />
          <Route path="/systems/no-case-notification" element={<NoCaseNotification />} />
          <Route path="/systems/aefi" element={<AEFI />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
