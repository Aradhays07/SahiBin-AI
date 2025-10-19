import { CheckCircle, XCircle, MapPin, RotateCcw, Leaf, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

interface ResultsPageProps {
  result: {
    itemName: string;
    confidence: number;
    isRecyclable: boolean;
    wasteType: string;
    category: string;
    image: string;
    co2Impact: number;
    energyImpact: number;
    disposalInstructions: string[];
  };
  onScanAnother: () => void;
  onViewDisposal: () => void;
}

export function ResultsPage({ result, onScanAnother, onViewDisposal }: ResultsPageProps) {
  return (
    <div className="pt-[90px] pb-20 px-6 min-h-screen">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Image Preview */}
          <div className="bg-white dark:bg-[#374151] rounded-[20px] shadow-xl overflow-hidden mb-8">
            <div className="relative">
              <img 
                src={result.image} 
                alt={result.itemName}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-white/95 dark:bg-[#1f2937]/95 text-[#1f2937] dark:text-white px-4 py-2 text-[16px]">
                  {result.confidence}% Confidence
                </Badge>
              </div>
            </div>

            <div className="p-8">
              {/* Item Name and Recyclable Status */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-[#1f2937] dark:text-white mb-2">
                    {result.itemName}
                  </h1>
                  <Badge 
                    variant="secondary"
                    className="bg-[#dcfce7] dark:bg-[#22c55e]/20 text-[#16a34a] dark:text-[#22c55e] px-3 py-1"
                  >
                    {result.category}
                  </Badge>
                </div>
                
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  result.isRecyclable 
                    ? 'bg-[#dcfce7] dark:bg-[#22c55e]/20' 
                    : 'bg-red-50 dark:bg-red-900/20'
                }`}>
                  {result.isRecyclable ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-[#22c55e]" />
                      <span className="text-[#16a34a] dark:text-[#22c55e]">Recyclable</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-red-500" />
                      <span className="text-red-600 dark:text-red-400">Non-Recyclable</span>
                    </>
                  )}
                </div>
              </div>

              {/* Impact Summary */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#f0fdf4] dark:bg-[#22c55e]/10 rounded-[12px] p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#dcfce7] dark:bg-[#22c55e]/20 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-[#22c55e]" />
                  </div>
                  <div>
                    <p className="text-[#22c55e]">+{result.co2Impact} kg</p>
                    <p className="text-[#6b7280] dark:text-gray-400 text-[14px]">CO₂ Saved</p>
                  </div>
                </div>

                <div className="bg-[#f0fdf4] dark:bg-[#22c55e]/10 rounded-[12px] p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#dcfce7] dark:bg-[#22c55e]/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#22c55e]" />
                  </div>
                  <div>
                    <p className="text-[#22c55e]">+{result.energyImpact} kWh</p>
                    <p className="text-[#6b7280] dark:text-gray-400 text-[14px]">Energy Saved</p>
                  </div>
                </div>
              </div>

              {/* Disposal Instructions */}
              <div className="bg-[#f9fafb] dark:bg-[#1f2937] rounded-[16px] p-6 mb-6">
                <h3 className="text-[#1f2937] dark:text-white mb-4">
                  Disposal Instructions
                </h3>
                <ol className="space-y-3">
                  {result.disposalInstructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#22c55e] text-white flex items-center justify-center text-[14px]">
                        {index + 1}
                      </span>
                      <span className="text-[#6b7280] dark:text-gray-300 pt-0.5">
                        {instruction}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={onViewDisposal}
                  className="flex-1 h-[56px] bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-[12px]"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Find Collection Centers
                </Button>
                <Button
                  onClick={onScanAnother}
                  variant="outline"
                  className="flex-1 h-[56px] border-2 border-[#22c55e] text-[#22c55e] hover:bg-[#f0fdf4] dark:hover:bg-[#22c55e]/10 rounded-[12px]"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Scan Another Item
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
