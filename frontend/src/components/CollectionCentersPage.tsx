import { ChevronLeft, MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { motion } from 'motion/react';
import { useState } from 'react';

interface CollectionCentersPageProps {
  onBack: () => void;
}

export function CollectionCentersPage({ onBack }: CollectionCentersPageProps) {
  const [selectedRadius, setSelectedRadius] = useState('10km');
  const [selectedWasteType, setSelectedWasteType] = useState('all');

  const centers = [
    {
      name: 'Green Recycling Center',
      distance: '2.3 km',
      address: '123 Eco Street, Green District',
      phone: '+1 234-567-8900',
      hours: 'Mon-Sat: 8:00 AM - 6:00 PM',
      acceptedTypes: ['Plastic', 'Glass', 'Paper', 'Metal'],
      isOpen: true
    },
    {
      name: 'EcoHub Collection Point',
      distance: '4.7 km',
      address: '456 Sustainability Ave, Eco City',
      phone: '+1 234-567-8901',
      hours: 'Daily: 7:00 AM - 8:00 PM',
      acceptedTypes: ['Plastic', 'Electronics', 'Batteries'],
      isOpen: true
    },
    {
      name: 'City Waste Management',
      distance: '6.1 km',
      address: '789 Municipal Road, Downtown',
      phone: '+1 234-567-8902',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
      acceptedTypes: ['All Types'],
      isOpen: false
    },
    {
      name: 'Community Recycling Hub',
      distance: '8.5 km',
      address: '321 Community Lane, Suburb',
      phone: '+1 234-567-8903',
      hours: 'Tue-Sun: 10:00 AM - 7:00 PM',
      acceptedTypes: ['Paper', 'Cardboard', 'Metal'],
      isOpen: true
    }
  ];

  return (
    <div className="pt-[90px] pb-20 px-6 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-[14px] text-[#6b7280] dark:text-gray-400">
          <button onClick={onBack} className="hover:text-[#22c55e] transition-colors">
            Results
          </button>
          <span>/</span>
          <span className="text-[#1f2937] dark:text-white">Collection Centers</span>
        </div>

        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6 -ml-2 text-[#6b7280] hover:text-[#22c55e]"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Results
        </Button>

        <div className="grid lg:grid-cols-[400px_1fr] gap-6">
          {/* Side Panel */}
          <div className="space-y-6">
            {/* Filters */}
            <div className="bg-white dark:bg-[#374151] rounded-[20px] shadow-xl p-6">
              <h3 className="text-[#1f2937] dark:text-white mb-4">
                Filter Centers
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-[14px] text-[#6b7280] dark:text-gray-400 mb-2 block">
                    Search Location
                  </label>
                  <Input 
                    placeholder="Enter address or zip code"
                    className="rounded-[8px]"
                  />
                </div>

                <div>
                  <label className="text-[14px] text-[#6b7280] dark:text-gray-400 mb-2 block">
                    Radius
                  </label>
                  <Select value={selectedRadius} onValueChange={setSelectedRadius}>
                    <SelectTrigger className="rounded-[8px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5km">5 km</SelectItem>
                      <SelectItem value="10km">10 km</SelectItem>
                      <SelectItem value="20km">20 km</SelectItem>
                      <SelectItem value="50km">50 km</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-[14px] text-[#6b7280] dark:text-gray-400 mb-2 block">
                    Waste Type
                  </label>
                  <Select value={selectedWasteType} onValueChange={setSelectedWasteType}>
                    <SelectTrigger className="rounded-[8px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="plastic">Plastic</SelectItem>
                      <SelectItem value="glass">Glass</SelectItem>
                      <SelectItem value="paper">Paper</SelectItem>
                      <SelectItem value="metal">Metal</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Centers List */}
            <div className="space-y-4">
              {centers.map((center, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-[#374151] rounded-[16px] shadow-md hover:shadow-lg p-6 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-[#1f2937] dark:text-white mb-1">
                        {center.name}
                      </h4>
                      <Badge 
                        variant="secondary"
                        className={center.isOpen 
                          ? 'bg-[#dcfce7] dark:bg-[#22c55e]/20 text-[#16a34a] dark:text-[#22c55e]'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                        }
                      >
                        {center.isOpen ? 'Open Now' : 'Closed'}
                      </Badge>
                    </div>
                    <span className="text-[#22c55e]">{center.distance}</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-[14px] text-[#6b7280] dark:text-gray-400">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{center.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[14px] text-[#6b7280] dark:text-gray-400">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span>{center.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[14px] text-[#6b7280] dark:text-gray-400">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{center.hours}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {center.acceptedTypes.map((type, i) => (
                      <Badge 
                        key={i}
                        variant="outline"
                        className="text-[12px] border-[#22c55e] text-[#22c55e]"
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className="w-full h-[44px] bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-[8px]"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Area */}
          <div className="bg-white dark:bg-[#374151] rounded-[20px] shadow-xl overflow-hidden h-[800px] lg:sticky lg:top-[90px]">
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative">
              {/* Mock Map */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20" />
              
              {/* Map Markers */}
              <div className="absolute top-1/4 left-1/3 w-10 h-10 bg-[#22c55e] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-1/2 right-1/3 w-10 h-10 bg-[#22c55e] rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-1/3 left-1/2 w-10 h-10 bg-[#22c55e] rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              
              {/* Current Location */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg" />
              
              <div className="relative z-10 text-center p-8 bg-white/90 dark:bg-gray-800/90 rounded-[12px]">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-[#22c55e]" />
                <p className="text-[#6b7280] dark:text-gray-300 mb-2">Interactive Map View</p>
                <p className="text-[14px] text-[#9ca3af]">
                  Map integration would display actual locations here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
