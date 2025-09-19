
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";


import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// --- Splash Screen Component ---

const SplashScreen = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

        .splash-screen {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #FFFFFF;
          z-index: 9999;
          overflow: hidden;
        }

        .logo-container {
          text-align: center;
          margin-bottom: 2rem;
        }

        .logo-text {
          font-family: 'Poppins', sans-serif;
          font-size: 4rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #7C3AED;
          animation: fade-in 1.5s ease-in;
        }
        
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .graph-container {
          width: 80%;
          max-width: 600px;
        }

        .line-graph-path {
          stroke: #7C3AED;
          stroke-width: 4;
          fill: none;
          stroke-dasharray: 1500;
          stroke-dashoffset: 1500;
          animation: draw-line 2.5s ease-out forwards 0.5s;
        }

        .graph-glow {
           filter: drop-shadow(0 0 8px rgba(124, 58, 237, 0.4));
        }

        @keyframes draw-line {
          to {
            stroke-dashoffset: 0;
          }
        }

        .graph-point {
            fill: #7C3AED;
            stroke: white;
            stroke-width: 3;
            opacity: 0;
            animation: appear 0.2s forwards;
            filter: drop-shadow(0 0 10px rgba(124, 58, 237, 0.6));
        }
        
        .graph-point:nth-of-type(1) { animation-delay: 0.8s; }
        .graph-point:nth-of-type(2) { animation-delay: 1.3s; }
        .graph-point:nth-of-type(3) { animation-delay: 1.8s; }
        .graph-point:nth-of-type(4) { animation-delay: 2.3s; }
        .graph-point:nth-of-type(5) { animation-delay: 2.8s; }

        @keyframes appear {
            to {
                opacity: 1;
            }
        }

        .grid-line {
          stroke: #E5E7EB;
          stroke-width: 1;
        }
      `}</style>
      <div className="splash-screen">
        <div className="logo-container">
          <h1 className="logo-text">VIZIONARY</h1>
        </div>
        <div className="graph-container">
          <svg viewBox="0 0 500 200" preserveAspectRatio="xMidYMid meet">
            <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" className="grid-line" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <g className="graph-glow">
                <path className="line-graph-path" d="M20,150 C100,50 150,180 250,100 S350,20 480,120" />
                <circle className="graph-point" cx="20" cy="150" r="5" />
                <circle className="graph-point" cx="165" cy="120" r="5" />
                <circle className="graph-point" cx="250" cy="100" r="5" />
                <circle className="graph-point" cx="385" cy="55" r="5" />
                <circle className="graph-point" cx="480" cy="120" r="5" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};


// --- Main App Component ---

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the splash screen animation to complete
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Duration of the splash screen in milliseconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

