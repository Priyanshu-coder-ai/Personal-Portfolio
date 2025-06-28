# Profile Photo Setup Guide

## Step 1: Add Your Profile Photo
Place your profile photo in: `client/src/assets/profile.jpg` (or .png)

## Step 2: Update Hero Section
In `client/src/components/hero-section.tsx`:

### Option A: Use Your Photo
1. Uncomment the import:
   ```javascript
   import profilePhoto from "@/assets/profile.jpg";
   ```

2. Uncomment the image tag and comment out the gradient circle:
   ```javascript
   // Use this:
   <img 
     src={profilePhoto} 
     alt="Priyanshu Mishra" 
     className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-xl animate-float"
   />
   
   // Comment out this:
   {/* <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white text-6xl font-bold animate-float">
     P
   </div> */}
   ```

### Option B: Change the Letter
Simply replace "P" with your preferred initial:
```javascript
<div className="...">
  Your Initial
</div>
```

### Option C: Change Colors
Modify the gradient colors:
```javascript
bg-gradient-to-br from-purple-500 to-pink-500  // Purple to pink
bg-gradient-to-br from-red-500 to-orange-500   // Red to orange
```

## Photo Requirements:
- **Format**: JPG or PNG
- **Size**: 400x400px minimum (square aspect ratio)
- **Quality**: High resolution, professional headshot
- **Background**: Any (will be cropped to circle)

## Current Location:
The profile photo appears in the Hero section at the top of the page.