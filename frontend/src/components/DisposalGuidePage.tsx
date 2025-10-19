import { ChevronLeft, CheckCircle, XCircle, Play, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { useState } from 'react';

interface DisposalGuidePageProps {
  wasteType: string;
  onBack: () => void;
}

export function DisposalGuidePage({ wasteType, onBack }: DisposalGuidePageProps) {
  const [showLocalGuidelines, setShowLocalGuidelines] = useState(false);

  const steps = [
    'Check if the item is clean and free of food residue',
    'Remove any non-recyclable parts (caps, labels, etc.)',
    'Rinse with water if necessary and let it dry',
    'Place in the appropriate recycling bin',
    'Ensure proper sorting according to local regulations'
  ];

  const dos = [
    'Clean items before recycling',
    'Remove caps and labels',
    'Flatten bottles to save space',
    'Check recycling symbols'
  ];

  const donts = [
    'Mix different waste types',
    'Include contaminated items',
    'Crush items excessively',
    'Ignore local guidelines'
  ];

  const relatedTypes = [
    { name: 'Glass Bottles', color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' },
    { name: 'Aluminum Cans', color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400' },
    { name: 'Paper Packaging', color: 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400' },
    { name: 'Cardboard', color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400' }
  ];

  return (
    <div className="pt-[90px] pb-20 px-6 min-h-screen">
      <div className="max-w-[900px] mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-[14px] text-[#6b7280] dark:text-gray-400">
          <button onClick={onBack} className="hover:text-[#22c55e] transition-colors">
            Results
          </button>
          <span>/</span>
          <span className="text-[#1f2937] dark:text-white">Disposal Guide</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="bg-white dark:bg-[#374151] rounded-[20px] shadow-xl p-8 mb-8">
            <Button
              onClick={onBack}
              variant="ghost"
              className="mb-6 -ml-2 text-[#6b7280] hover:text-[#22c55e]"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Results
            </Button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-[#dcfce7] dark:bg-[#22c55e]/20 flex items-center justify-center text-[32px]">
                ♻️
              </div>
              <div>
                <h1 className="text-[#1f2937] dark:text-white">
                  {wasteType} Disposal Guide
                </h1>
                <Badge className="mt-2 bg-[#dcfce7] dark:bg-[#22c55e]/20 text-[#16a34a] dark:text-[#22c55e]">
                  Recyclable Material
                </Badge>
              </div>
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div className="bg-white dark:bg-[#374151] rounded-[20px] shadow-xl p-8 mb-8">
            <h2 className="text-[#1f2937] dark:text-white mb-6">
              Step-by-Step Instructions
            </h2>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-[#f9fafb] dark:bg-[#1f2937] rounded-[12px]"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#22c55e] text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className="text-[#6b7280] dark:text-gray-300 pt-2">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Do's and Don'ts */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Do's */}
            <div className="bg-white dark:bg-[#374151] rounded-[20px] shadow-xl p-8">
              <h3 className="text-[#1f2937] dark:text-white mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-[#22c55e]" />
                Do's
              </h3>
              <ul className="space-y-3">
                {dos.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#6b7280] dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don'ts */}
            <div className="bg-white dark:bg-[#374151] rounded-[20px] shadow-xl p-8">
              <h3 className="text-[#1f2937] dark:text-white mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-500" />
                Don'ts
              </h3>
              <ul className="space-y-3">
                {donts.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[#6b7280] dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Local Guidelines */}
          <div className="bg-white dark:bg-[#374151] rounded-[20px] shadow-xl p-8 mb-8">
            <button
              onClick={() => setShowLocalGuidelines(!showLocalGuidelines)}
              className="w-full flex items-center justify-between text-left"
            >
              <h3 className="text-[#1f2937] dark:text-white">
                Local Guidelines
              </h3>
              <ChevronDown 
                className={`w-6 h-6 text-[#6b7280] transition-transform ${
                  showLocalGuidelines ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {showLocalGuidelines && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600"
              >
                <p className="text-[#6b7280] dark:text-gray-300 mb-4">
                  Recycling guidelines may vary by location. Please check with your local waste management authority for specific requirements in your area.
                </p>
                <ul className="space-y-2 text-[#6b7280] dark:text-gray-300">
                  <li>• Collection schedules may differ by neighborhood</li>
                  <li>• Some areas require separate bins for different materials</li>
                  <li>• Check for special drop-off locations for certain items</li>
                  <li>• Follow color-coding systems if applicable</li>
                </ul>
              </motion.div>
            )}
          </div>

          {/* Video Tutorial Area */}
          <div className="bg-white dark:bg-[#374151] rounded-[20px] shadow-xl p-8 mb-8">
            <h3 className="text-[#1f2937] dark:text-white mb-4">
              Video Tutorial
            </h3>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-[12px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#22c55e] flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-[#6b7280] dark:text-gray-400">
                  Tutorial video coming soon
                </p>
              </div>
            </div>
          </div>

          {/* Related Waste Types */}
          <div className="bg-white dark:bg-[#374151] rounded-[20px] shadow-xl p-8">
            <h3 className="text-[#1f2937] dark:text-white mb-6">
              Related Waste Types
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedTypes.map((type, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-[12px] text-center transition-colors ${type.color}`}
                >
                  <p>{type.name}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
