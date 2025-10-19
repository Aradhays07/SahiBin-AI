import { Camera, Upload, Eye, Zap, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onTakePhoto: () => void;
  onUploadImage: () => void;
}

export function HeroSection({ onTakePhoto, onUploadImage }: HeroSectionProps) {
  return (
    <section className="relative pt-[110px] pb-24 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 rounded-full border border-blue-200/50 dark:border-blue-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-[14px] bg-gradient-to-r from-blue-700 to-blue-800 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
              Powered by AI • 10,000+ Items Detected
            </span>
          </motion.div>

          <h1 className="text-[56px] md:text-[64px] mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-400 dark:via-blue-500 dark:to-cyan-400 bg-clip-text text-transparent leading-tight">
            Smart Waste Detection
          </h1>
          
          <p className="text-[20px] text-gray-600 dark:text-slate-300 max-w-[700px] mx-auto leading-relaxed">
            Use your camera or upload an image to identify waste items and get{' '}
            <span className="text-blue-600 dark:text-blue-400">instant disposal instructions</span>
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 max-w-[1200px] mx-auto items-start">
          {/* Left Column - Action Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            {/* Main Card with Glassmorphism */}
            <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-[24px] shadow-2xl border border-white/20 dark:border-slate-700/50 p-10 md:p-12 overflow-hidden group">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 dark:from-blue-500/10 dark:to-blue-600/10" />
              
              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative space-y-6">
                {/* Illustration/Icon */}
                <motion.div 
                  className="flex justify-center mb-8"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl blur-xl opacity-50" />
                    <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-xl">
                      <Camera className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Primary Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={onTakePhoto}
                    className="w-full h-[64px] bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-[16px] shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <Camera className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                    <span className="text-[18px]">Take Photo</span>
                  </Button>
                </motion.div>

                {/* Secondary Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={onUploadImage}
                    className="w-full h-[64px] bg-white dark:from-blue-950/50 dark:to-blue-900/50 border-2 border-blue-500 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 hover:border-blue-600 dark:hover:border-blue-500/50 hover:bg-blue-50 rounded-[16px] shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <Upload className="w-6 h-6 mr-3 group-hover:-translate-y-1 transition-transform" />
                    <span className="text-[18px]">Upload Image</span>
                  </Button>
                </motion.div>

                <p className="text-center text-[13px] text-slate-500 dark:text-slate-400 pt-2">
                  <span className="inline-flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    AI-powered instant detection
                  </span>
                  {' • '}
                  <span>No signup required</span>
                </p>
              </div>
            </div>

            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center gap-4 mt-6"
            >
              <div className="px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-blue-200/50 dark:border-blue-500/20 shadow-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-[13px] text-slate-700 dark:text-slate-300">98% Accuracy</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Detection Tips */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="lg:sticky lg:top-[100px]"
          >
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-800/50 dark:to-blue-900/20 backdrop-blur-sm rounded-[24px] shadow-xl border border-white/50 dark:border-slate-700/50 p-8 overflow-hidden relative">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-blue-500/20 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-slate-900 dark:text-white">Detection Tips</h3>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      icon: Zap,
                      title: 'Bright, Even Lighting',
                      description: 'Natural light works best for accurate detection',
                      color: 'from-amber-500 to-orange-500'
                    },
                    {
                      icon: Eye,
                      title: 'Clear Visibility',
                      description: 'Keep the item centered and in focus',
                      color: 'from-sky-500 to-cyan-500'
                    },
                    {
                      icon: Sparkles,
                      title: 'Clean Background',
                      description: 'Use a plain surface for best results',
                      color: 'from-purple-500 to-pink-500'
                    }
                  ].map((tip, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-[16px] backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 cursor-pointer group"
                      whileHover={{ x: 4 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tip.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                        <tip.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-900 dark:text-white mb-1">
                          {tip.title}
                        </p>
                        <p className="text-[14px] text-slate-600 dark:text-slate-400">
                          {tip.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Badge */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 dark:from-blue-500/20 dark:to-blue-600/20 rounded-[12px] border border-blue-500/20 dark:border-blue-500/30">
                  <p className="text-[14px] text-center text-slate-700 dark:text-slate-300">
                    💡 <span className="font-medium">Pro Tip:</span> Hold your device steady for 2 seconds for optimal results
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
