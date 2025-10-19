export interface WasteCategory {
  id: string;
  name: string;
  color: string;
  lightBg: string;
  icon: string;
  isRecyclable: boolean;
  disposalBin: string;
  disposalInstructions: string[];
  environmentalTip: string;
  warnings?: string[];
  co2Impact: number;
  energyImpact: number;
  waterImpact: number;
  preparationTime: string;
  collectionSchedule: string;
}

export const wasteCategories: Record<string, WasteCategory> = {
  CARDBOARD: {
    id: 'CARDBOARD',
    name: 'Cardboard',
    color: '#D97706',
    lightBg: '#FEF3C7',
    icon: '📦',
    isRecyclable: true,
    disposalBin: 'Recycling Bin (Blue)',
    disposalInstructions: [
      'Flatten all boxes to save space',
      'Remove any tape, labels, and staples',
      'Keep cardboard dry and clean',
      'Place in blue recycling bin'
    ],
    environmentalTip: 'Recycling one ton of cardboard saves 17 trees and 7,000 gallons of water',
    warnings: ['⚠️ Do not recycle wet or greasy cardboard', '⚠️ Remove all non-cardboard materials'],
    co2Impact: 1.2,
    energyImpact: 3.5,
    waterImpact: 25,
    preparationTime: '2-3 minutes',
    collectionSchedule: 'Weekly pickup - Tuesdays and Fridays'
  },
  GLASS: {
    id: 'GLASS',
    name: 'Glass',
    color: '#06B6D4',
    lightBg: '#CFFAFE',
    icon: '🥃',
    isRecyclable: true,
    disposalBin: 'Recycling Bin (Blue)',
    disposalInstructions: [
      'Rinse containers thoroughly',
      'Remove caps and lids',
      'Separate by color if required locally',
      'Place in recycling bin carefully'
    ],
    environmentalTip: 'Glass can be recycled endlessly without loss of quality',
    warnings: ['⚠️ Broken glass should be wrapped in newspaper', '⚠️ Do not mix with ceramics or light bulbs'],
    co2Impact: 0.8,
    energyImpact: 2.8,
    waterImpact: 15,
    preparationTime: '1-2 minutes',
    collectionSchedule: 'Weekly pickup - Wednesdays'
  },
  METAL: {
    id: 'METAL',
    name: 'Metal',
    color: '#64748B',
    lightBg: '#F1F5F9',
    icon: '⚙️',
    isRecyclable: true,
    disposalBin: 'Recycling Bin (Blue)',
    disposalInstructions: [
      'Rinse cans and containers',
      'Remove labels if possible',
      'Crush cans to save space',
      'Place in recycling bin'
    ],
    environmentalTip: 'Recycling aluminum saves 95% of the energy needed to make new cans',
    warnings: ['⚠️ Check if your facility accepts all metal types'],
    co2Impact: 1.5,
    energyImpact: 4.2,
    waterImpact: 20,
    preparationTime: '1-2 minutes',
    collectionSchedule: 'Weekly pickup - Tuesdays and Fridays'
  },
  PAPER: {
    id: 'PAPER',
    name: 'Paper',
    color: '#3B82F6',
    lightBg: '#DBEAFE',
    icon: '📄',
    isRecyclable: true,
    disposalBin: 'Recycling Bin (Blue)',
    disposalInstructions: [
      'Remove any plastic windows from envelopes',
      'Flatten and stack paper',
      'Keep paper dry and clean',
      'Place in recycling bin'
    ],
    environmentalTip: 'Recycling paper reduces greenhouse gas emissions and saves landfill space',
    warnings: ['⚠️ Do not recycle waxed or heavily laminated paper', '⚠️ Shred sensitive documents'],
    co2Impact: 0.9,
    energyImpact: 2.5,
    waterImpact: 18,
    preparationTime: '1 minute',
    collectionSchedule: 'Weekly pickup - Tuesdays and Fridays'
  },
  PLASTIC: {
    id: 'PLASTIC',
    name: 'Plastic',
    color: '#8B5CF6',
    lightBg: '#EDE9FE',
    icon: '♻️',
    isRecyclable: true,
    disposalBin: 'Recycling Bin (Blue)',
    disposalInstructions: [
      'Check recycling number (1-7)',
      'Rinse containers thoroughly',
      'Remove caps and labels',
      'Place in recycling bin'
    ],
    environmentalTip: 'Recycling plastic saves twice as much energy as burning it',
    warnings: ['⚠️ Not all plastics are recyclable - check local guidelines', '⚠️ Remove food residue completely'],
    co2Impact: 1.0,
    energyImpact: 3.0,
    waterImpact: 22,
    preparationTime: '2 minutes',
    collectionSchedule: 'Weekly pickup - Tuesdays and Fridays'
  },
  BATTERY: {
    id: 'BATTERY',
    name: 'Battery',
    color: '#EAB308',
    lightBg: '#FEF9C3',
    icon: '🔋',
    isRecyclable: true,
    disposalBin: 'Special Hazardous Waste Collection',
    disposalInstructions: [
      'Do not throw in regular trash',
      'Tape terminals of lithium batteries',
      'Store in cool, dry place until disposal',
      'Take to designated collection center'
    ],
    environmentalTip: 'Batteries contain toxic materials that must be handled properly',
    warnings: ['⚠️ Never incinerate batteries', '⚠️ Keep batteries away from water', '⚠️ Do not mix different battery types'],
    co2Impact: 0.3,
    energyImpact: 1.5,
    waterImpact: 8,
    preparationTime: 'Immediate - store safely',
    collectionSchedule: 'Monthly at collection centers'
  },
  CLOTHES: {
    id: 'CLOTHES',
    name: 'Clothes',
    color: '#EC4899',
    lightBg: '#FCE7F3',
    icon: '👕',
    isRecyclable: true,
    disposalBin: 'Textile Recycling / Donation',
    disposalInstructions: [
      'Clean and dry clothes before disposal',
      'Separate usable from damaged items',
      'Donate wearable clothes to charities',
      'Place damaged textiles in textile recycling bin'
    ],
    environmentalTip: 'Donating clothes extends their life and reduces textile waste',
    warnings: ['⚠️ Do not dispose of wet or moldy textiles'],
    co2Impact: 2.5,
    energyImpact: 5.0,
    waterImpact: 35,
    preparationTime: '5 minutes',
    collectionSchedule: 'Donation centers open daily'
  },
  ORGANIC: {
    id: 'ORGANIC',
    name: 'Organic',
    color: '#22C55E',
    lightBg: '#D1FAE5',
    icon: '🌱',
    isRecyclable: true,
    disposalBin: 'Compost Bin (Green)',
    disposalInstructions: [
      'Separate from any packaging',
      'Chop large pieces into smaller chunks',
      'Place in green compost bin',
      'Cover with brown materials if home composting'
    ],
    environmentalTip: 'Perfect for home composting - creates nutrient-rich soil',
    warnings: ['⚠️ Avoid meat, dairy, and oily foods in home compost'],
    co2Impact: 0.5,
    energyImpact: 1.0,
    waterImpact: 12,
    preparationTime: 'Immediate disposal recommended',
    collectionSchedule: 'Daily pickup available'
  },
  SHOES: {
    id: 'SHOES',
    name: 'Shoes',
    color: '#7C3AED',
    lightBg: '#EDE9FE',
    icon: '👟',
    isRecyclable: true,
    disposalBin: 'Textile Recycling / Donation',
    disposalInstructions: [
      'Clean shoes before disposal',
      'Tie shoes together in pairs',
      'Donate wearable shoes to charities',
      'Take damaged shoes to textile recycling'
    ],
    environmentalTip: 'Many shoe brands offer recycling programs for old footwear',
    warnings: ['⚠️ Remove non-shoe materials before recycling'],
    co2Impact: 1.8,
    energyImpact: 3.8,
    waterImpact: 28,
    preparationTime: '3 minutes',
    collectionSchedule: 'Donation centers and retail drop-offs'
  }
};

export const getCategoryColor = (category: string): string => {
  return wasteCategories[category]?.color || '#64748B';
};

export const getCategoryLightBg = (category: string): string => {
  return wasteCategories[category]?.lightBg || '#F1F5F9';
};

export const getCategoryIcon = (category: string): string => {
  return wasteCategories[category]?.icon || '📦';
};
