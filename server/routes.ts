import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertContactMessageSchema } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Save contact message to database
      const savedMessage = await storage.createContactMessage(contactData);
      console.log("Contact form submission saved:", savedMessage);
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: savedMessage.id
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to save contact message" 
      });
    }
  });

  // Get contact messages endpoint (for admin use)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ 
        success: true, 
        messages 
      });
    } catch (error) {
      console.error("Get contact messages error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve contact messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
