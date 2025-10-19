import { wasteCategories, WasteCategory } from './wasteCategories';

/**
 * Simulates AI-powered waste detection by analyzing image characteristics
 * 
 * TO INTEGRATE YOUR REAL ML MODEL:
 * ================================
 * Replace this function with an API call to your trained model.
 * 
 * Example using a REST API:
 * ```
 * const formData = new FormData();
 * const blob = await fetch(imageData).then(r => r.blob());
 * formData.append('image', blob);
 * 
 * const response = await fetch('YOUR_MODEL_API_ENDPOINT', {
 *   method: 'POST',
 *   body: formData
 * });
 * 
 * const result = await response.json();
 * return {
 *   wasteType: result.predicted_class,  // Map this to our waste categories
 *   confidence: result.confidence * 100,
 *   itemName: result.item_name
 * };
 * ```
 * 
 * Supported waste types (must match one of these):
 * - CARDBOARD, GLASS, METAL, PAPER, PLASTIC, BATTERY, CLOTHES, ORGANIC, SHOES
 */
export async function detectWasteType(imageData: string): Promise<{
  wasteType: string;
  confidence: number;
  itemName: string;
}> {
  // Simulate processing time (remove this in production)
  await new Promise(resolve => setTimeout(resolve, 1500));

  // TEMPORARY: Simulated detection for demonstration
  // TODO: Replace with actual ML model API call
  const wasteTypes = [
    { type: 'PLASTIC', weight: 30, items: ['Plastic Bottle', 'Plastic Container', 'Plastic Bag', 'Plastic Packaging'] },
    { type: 'CARDBOARD', weight: 20, items: ['Cardboard Box', 'Pizza Box', 'Shipping Box', 'Cardboard Packaging'] },
    { type: 'PAPER', weight: 15, items: ['Paper Document', 'Newspaper', 'Magazine', 'Paper Bag'] },
    { type: 'GLASS', weight: 10, items: ['Glass Bottle', 'Glass Jar', 'Glass Container'] },
    { type: 'METAL', weight: 10, items: ['Aluminum Can', 'Tin Can', 'Metal Container', 'Foil'] },
    { type: 'ORGANIC', weight: 8, items: ['Food Waste', 'Fruit Peels', 'Vegetable Scraps', 'Compostable Material'] },
    { type: 'BATTERY', weight: 3, items: ['AA Battery', 'AAA Battery', 'Lithium Battery', 'Phone Battery'] },
    { type: 'CLOTHES', weight: 2, items: ['T-Shirt', 'Jeans', 'Fabric', 'Textile'] },
    { type: 'SHOES', weight: 2, items: ['Sneakers', 'Boots', 'Sandals', 'Footwear'] }
  ];

  // Calculate total weight
  const totalWeight = wasteTypes.reduce((sum, item) => sum + item.weight, 0);
  
  // Select random waste type based on weight
  let random = Math.random() * totalWeight;
  let selectedType = wasteTypes[0];
  
  for (const wasteType of wasteTypes) {
    random -= wasteType.weight;
    if (random <= 0) {
      selectedType = wasteType;
      break;
    }
  }

  // Select random item from the type
  const randomItem = selectedType.items[Math.floor(Math.random() * selectedType.items.length)];
  
  // Generate confidence (85-98%)
  const confidence = Math.floor(85 + Math.random() * 13);

  return {
    wasteType: selectedType.type,
    confidence,
    itemName: randomItem
  };
}

/**
 * Get complete detection result with all category information
 */
export function getCompleteDetectionResult(
  wasteType: string,
  confidence: number,
  itemName: string,
  imageUrl: string
) {
  const categoryData = wasteCategories[wasteType];
  
  if (!categoryData) {
    throw new Error(`Unknown waste type: ${wasteType}`);
  }

  return {
    itemName,
    confidence,
    isRecyclable: categoryData.isRecyclable,
    wasteType,
    category: categoryData.name,
    image: imageUrl,
    co2Impact: categoryData.co2Impact,
    energyImpact: categoryData.energyImpact,
    waterImpact: categoryData.waterImpact,
    disposalInstructions: categoryData.disposalInstructions,
    disposalBin: categoryData.disposalBin,
    environmentalTip: categoryData.environmentalTip,
    warnings: categoryData.warnings,
    preparationTime: categoryData.preparationTime,
    collectionSchedule: categoryData.collectionSchedule
  };
}
