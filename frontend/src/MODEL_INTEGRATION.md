# AI Model Integration Guide

## Overview
This document explains how to integrate your trained ML model with the SahiBin waste detection application.

## Current Implementation
The app currently uses a **simulated detection system** located in `/utils/wasteDetection.ts` that randomly selects waste types for demonstration purposes. All waste information is dynamically retrieved from `/utils/wasteCategories.ts`.

## Integration Steps

### 1. Prepare Your Model API
Your ML model should expose an API endpoint that:
- Accepts an image (base64, multipart/form-data, or URL)
- Returns detection results in JSON format
- Includes: waste type, confidence score, and item name

### 2. Update Detection Function
Edit `/utils/wasteDetection.ts` and replace the `detectWasteType` function:

```typescript
export async function detectWasteType(imageData: string): Promise<{
  wasteType: string;
  confidence: number;
  itemName: string;
}> {
  try {
    // Convert base64 to blob
    const blob = await fetch(imageData).then(r => r.blob());
    
    // Create form data
    const formData = new FormData();
    formData.append('image', blob, 'waste-image.jpg');
    
    // Call your model API
    const response = await fetch('YOUR_MODEL_API_ENDPOINT', {
      method: 'POST',
      body: formData,
      headers: {
        // Add any required authentication headers
        // 'Authorization': 'Bearer YOUR_API_KEY'
      }
    });
    
    if (!response.ok) {
      throw new Error('Model API request failed');
    }
    
    const result = await response.json();
    
    // Map your model's output to the expected format
    return {
      wasteType: mapToWasteCategory(result.predicted_class),
      confidence: Math.round(result.confidence * 100),
      itemName: result.item_name || formatItemName(result.predicted_class)
    };
  } catch (error) {
    console.error('Detection error:', error);
    throw new Error('Failed to detect waste type');
  }
}

// Helper function to map model predictions to app categories
function mapToWasteCategory(modelClass: string): string {
  // Map your model's class names to our categories
  const mapping: Record<string, string> = {
    'cardboard': 'CARDBOARD',
    'glass': 'GLASS',
    'metal': 'METAL',
    'paper': 'PAPER',
    'plastic': 'PLASTIC',
    'battery': 'BATTERY',
    'clothes': 'CLOTHES',
    'organic': 'ORGANIC',
    'shoes': 'SHOES'
    // Add more mappings as needed
  };
  
  return mapping[modelClass.toLowerCase()] || 'PLASTIC';
}
```

### 3. Supported Waste Categories
Your model must classify items into one of these categories:

| Category | ID | Example Items |
|----------|-----|---------------|
| Cardboard | `CARDBOARD` | Boxes, packaging |
| Glass | `GLASS` | Bottles, jars |
| Metal | `METAL` | Cans, foil |
| Paper | `PAPER` | Documents, newspapers |
| Plastic | `PLASTIC` | Bottles, containers |
| Battery | `BATTERY` | AA, AAA, lithium |
| Clothes | `CLOTHES` | Fabric, textiles |
| Organic | `ORGANIC` | Food waste, compost |
| Shoes | `SHOES` | Footwear |

### 4. Data Flow
```
User uploads/captures image
    ↓
detectWasteType(imageData)
    ↓
Your ML Model API
    ↓
Returns: { wasteType, confidence, itemName }
    ↓
getCompleteDetectionResult()
    ↓
Retrieves all data from wasteCategories
    ↓
Displays: Detection Details, Disposal Guide, Environmental Impact
```

### 5. Category Data Structure
All category information is stored in `/utils/wasteCategories.ts`:
- Disposal instructions (step-by-step)
- Environmental tips
- Warnings
- Disposal bin type
- Environmental impact (CO2, energy, water)
- Collection schedule
- Preparation time

**You only need to detect the waste type** - all other information is automatically populated!

### 6. Testing
1. Update the `detectWasteType` function with your API
2. Test with sample images
3. Verify the returned `wasteType` matches one of the supported categories
4. Check that confidence scores are between 0-100
5. Ensure item names are user-friendly

### 7. Error Handling
The app includes error handling for:
- Network failures
- Invalid model responses
- Unknown waste categories
- Camera/upload errors

Make sure your API returns appropriate error messages.

### 8. Example Model APIs

#### TensorFlow Serving
```typescript
const response = await fetch('http://localhost:8501/v1/models/waste_model:predict', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    instances: [{ image: imageBase64 }]
  })
});
```

#### Custom Flask/FastAPI
```typescript
const formData = new FormData();
formData.append('file', blob);

const response = await fetch('http://localhost:5000/predict', {
  method: 'POST',
  body: formData
});
```

#### Cloud Services (AWS, Google Cloud, Azure)
```typescript
const response = await fetch('https://your-endpoint.aws.com/predict', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ image: imageBase64 })
});
```

## Performance Tips
- Compress images before sending (reduce base64 size)
- Implement caching for repeated detections
- Add loading states for user feedback
- Consider edge deployment for faster inference

## Support
For questions or issues with integration, check:
- `/utils/wasteDetection.ts` - Detection logic
- `/utils/wasteCategories.ts` - Category data
- `/components/UploadInterface.tsx` - Upload handling
- `/components/CameraModal.tsx` - Camera handling
