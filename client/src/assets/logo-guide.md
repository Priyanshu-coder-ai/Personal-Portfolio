# Logo Replacement Guide

## Step 1: Add Your Logo Files
Place your logo files in this folder (`client/src/assets/`):
- `logo.png` - Your main logo (PNG/JPG/SVG)
- `logo-light.png` - Optional: Light version for dark mode
- `logo-dark.png` - Optional: Dark version for light mode

## Step 2: Update Navigation Component
In `client/src/components/navigation.tsx`:

### Option A: Image Logo
1. Uncomment the import line:
   ```javascript
   import logoImage from "@/assets/logo.png";
   ```

2. Uncomment and use the image tag:
   ```javascript
   <img src={logoImage} alt="Logo" className="h-8 w-auto" />
   ```

3. Comment out or remove the text logo:
   ```javascript
   {/* <div className="font-poppins font-bold text-xl gradient-text">PM</div> */}
   ```

### Option B: Text Logo
Simply change "PM" to your preferred text:
```javascript
<div className="font-poppins font-bold text-xl gradient-text">
  Your Logo Text
</div>
```

### Option C: Responsive Logo (Light/Dark Mode)
```javascript
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

// In the component:
<img 
  src={theme === 'dark' ? logoDark : logoLight} 
  alt="Logo" 
  className="h-8 w-auto" 
/>
```

## Recommended Logo Specifications:
- **Format**: PNG with transparency or SVG
- **Size**: 200x50px or similar (will be scaled to h-8 = 32px height)
- **Background**: Transparent
- **Quality**: High resolution for crisp display

## Current Logo Location:
The "PM" logo appears in the top-left corner of the navigation bar.