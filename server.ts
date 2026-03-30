import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Lead Generation Endpoint
  app.post("/api/leads", (req, res) => {
    const { name, email, service, message, location } = req.body;
    console.log("New Lead Received:", { name, email, service, location });
    // In production, this would sync to Supabase and trigger n8n
    res.status(201).json({ success: true, message: "Lead captured successfully" });
  });

  // Payment Abstraction Endpoint
  app.post("/api/payments/create-session", async (req, res) => {
    const { amount, currency, countryCode } = req.body;
    
    // Logic to route between Stripe and RazorPay
    if (countryCode === 'IN') {
      res.json({ provider: 'razorpay', message: 'RazorPay session would be created here' });
    } else {
      res.json({ provider: 'stripe', message: 'Stripe session would be created here' });
    }
  });

  // Geo-page data endpoint
  app.get("/api/geo-data/:service/:city", (req, res) => {
    const { service, city } = req.params;
    res.json({
      city,
      service,
      content: `Expert ${service} solutions in ${city}. Optimized for local business needs.`,
      coordinates: { lat: 37.3382, lng: -121.8863 } // Sample for San Jose
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
