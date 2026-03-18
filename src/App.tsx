import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import OKDOM from "./pages/OKDOM";
import TravauxPratiques from "./pages/TravauxPratiques";
import Ateliers from "./pages/Ateliers";
import Competences from "./pages/Competences";
import Veille from "./pages/Veille";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// TP Detail Pages
import SweetMemory from "./pages/tp/SweetMemory";
import MachineASous from "./pages/tp/MachineASous";
import CataloguePaniers from "./pages/tp/CataloguePaniers";
import MiniBlog from "./pages/tp/MiniBlog";
import Galerie from "./pages/tp/Galerie";
import Cyber from "./pages/tp/Cyber";
import PPEMain from "./pages/tp/PPEMain";
import PPEAndroidJava from "./pages/tp/PPEAndroidJava";
import TodoListCpp from "./pages/tp/TodoListCpp";
import EuroformaShop from "./pages/tp/EuroformaShop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/okdom" element={<OKDOM />} />
            <Route path="/tp" element={<TravauxPratiques />} />
            <Route path="/tp/sweet-memory" element={<SweetMemory />} />
            <Route path="/tp/machine-a-sous" element={<MachineASous />} />
            <Route path="/tp/catalogue-paniers" element={<CataloguePaniers />} />
            <Route path="/tp/mini-blog" element={<MiniBlog />} />
            <Route path="/tp/galerie" element={<Galerie />} />
            <Route path="/tp/cyber" element={<Cyber />} />
            <Route path="/tp/ppe-main" element={<PPEMain />} />
            <Route path="/tp/ppe-android-java" element={<PPEAndroidJava />} />
            <Route path="/tp/todolist-cpp" element={<TodoListCpp />} />
            <Route path="/tp/euroforma-shop" element={<EuroformaShop />} />
            <Route path="/ateliers" element={<Ateliers />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/veille" element={<Veille />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
