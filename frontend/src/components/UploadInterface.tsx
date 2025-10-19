import { useState, useRef } from 'react';
import { Upload, X, Cloud, CheckCircle, FileImage, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { Progress } from './ui/progress';
import { detectWasteType, getCompleteDetectionResult } from '../utils/wasteDetection';

interface UploadInterfaceProps {
  onClose: () => void;
  onUpload: (result: any) => void;
}

export function UploadInterface({ onClose, onUpload }: UploadInterfaceProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = async (file: File) => {
    if (!file.type.match(/image\/(jpeg|jpg|png)/)) {
      setError('Please upload a JPG, JPEG, or PNG image');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB');
      return;
    }

    setError('');
    setIsUploading(true);

    // Simulate upload progress
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(progressInterval);
      }
    }, 100);

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const imageUrl = e.target?.result as string;
        
        // Use AI detection to identify waste type
        const detection = await detectWasteType(imageUrl);
        
        // Get complete result with all category information
        const completeResult = getCompleteDetectionResult(
          detection.wasteType,
          detection.confidence,
          detection.itemName,
          imageUrl
        );
        
        onUpload(completeResult);
      } catch (error) {
        setError('Failed to detect waste type. Please try again.');
        setIsUploading(false);
      }
    };
    
    reader.readAsDataURL(file);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-[700px] bg-white dark:bg-slate-800 rounded-[24px] shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Upload className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white">📤 Upload Waste Image</h3>
                <p className="text-[13px] text-blue-100">Drag & drop or browse</p>
              </div>
            </div>
            
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="p-8">
            {/* Upload Zone */}
            <motion.div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => !isUploading && fileInputRef.current?.click()}
              animate={{
                scale: isDragging ? 1.02 : 1,
                borderColor: isDragging ? 'rgb(59, 130, 246)' : undefined
              }}
              className={`
                relative border-3 border-dashed rounded-[20px] p-12 text-center cursor-pointer
                transition-all duration-300 overflow-hidden
                ${isDragging 
                  ? 'border-blue-500 bg-blue-50 dark:from-blue-950/30 dark:to-blue-950/30' 
                  : 'border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900/50 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20'
                }
              `}
            >
              {/* Animated Background */}
              {isDragging && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10"
                />
              )}

              <div className="relative">
                {isUploading ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-4"
                  >
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <Sparkles className="w-10 h-10 text-white animate-pulse" />
                    </div>
                    <p className="text-[18px] text-gray-700 dark:text-slate-300">
                      🔍 Detecting Waste...
                    </p>
                    <div className="max-w-xs mx-auto">
                      <Progress value={uploadProgress} className="h-2" />
                    </div>
                    <p className="text-[14px] text-slate-500 dark:text-slate-400">
                      {uploadProgress}%
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <motion.div
                      animate={{
                        y: isDragging ? -10 : [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: isDragging ? 0 : Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative inline-block mb-6"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl blur-xl opacity-50" />
                      <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                        <Cloud className="w-12 h-12 text-white" />
                      </div>
                    </motion.div>

                    <p className="text-[24px] text-gray-800 dark:text-white mb-2">
                      {isDragging ? 'Drop your image here' : 'Drop your image here'}
                    </p>
                    <p className="text-gray-500 dark:text-slate-400 mb-2">
                      or click to browse
                    </p>
                    <p className="text-[14px] text-gray-400 dark:text-slate-500">
                      JPG, PNG (max 10MB)
                    </p>
                  </>
                )}
              </div>
            </motion.div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/jpg,image/png"
              onChange={handleFileSelect}
              className="hidden"
            />

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 rounded-xl text-center"
                >
                  <p className="text-[14px] text-red-600 dark:text-red-400">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {!isUploading && (
              <div className="mt-8 flex justify-center">
                <Button
                  disabled
                  className="w-full h-[56px] bg-gray-300 dark:bg-slate-700 text-gray-500 dark:text-slate-500 rounded-[12px] cursor-not-allowed"
                >
                  🔍 Detect Waste Type
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
