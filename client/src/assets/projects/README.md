# Project Screenshots

Add your project screenshots to this folder and update the imports in `projects-section.tsx`.

## How to Add Screenshots:

1. **Add your images to this folder:**
   - `meme-studio.png` - Screenshot of Meme Studio app
   - `weather-app.png` - Screenshot of Weather App Kaii
   - `ai-chatbot.png` - Screenshot of AI Chatbox
   - `chrome-extension.png` - Screenshot of Meme Organizer Extension
   - `java-app.png` - Screenshot of Car Rental + Hotel App

2. **Update the imports in `projects-section.tsx`:**
   ```javascript
   import memeStudioImage from "@/assets/projects/meme-studio.png";
   import weatherAppImage from "@/assets/projects/weather-app.png";
   import aiChatbotImage from "@/assets/projects/ai-chatbot.png";
   import chromeExtensionImage from "@/assets/projects/chrome-extension.png";
   import javaAppImage from "@/assets/projects/java-app.png";
   ```

3. **Replace the placeholder images:**
   ```javascript
   {
     title: "Meme Studio",
     image: memeStudioImage, // Update this line
     // ... rest of the project data
   }
   ```

## Image Requirements:
- **Format:** PNG, JPG, or WebP
- **Size:** Recommended 800x400px (2:1 aspect ratio)
- **Quality:** High resolution for crisp display
- **Content:** Show the main interface/features of your project

## Example File Structure:
```
client/src/assets/projects/
├── meme-studio.png
├── weather-app.png
├── ai-chatbot.png
├── chrome-extension.png
├── java-app.png
└── placeholder.svg (fallback)
```

The images will display with a subtle gradient overlay and your project icon for a professional look.