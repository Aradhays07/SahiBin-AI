import { TrendingUp, Target, Zap, CheckCircle, ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function AnalyticsPage() {
  // Mock data
  const categoryData = [
    { name: 'Organic', value: 45, color: '#22C55E' },
    { name: 'Plastic', value: 30, color: '#8B5CF6' },
    { name: 'Paper', value: 15, color: '#3B82F6' },
    { name: 'Metal', value: 10, color: '#64748B' }
  ];

  const confidenceData = [
    { range: '90-100%', count: 45 },
    { range: '80-89%', count: 30 },
    { range: '70-79%', count: 15 },
    { range: '60-69%', count: 10 }
  ];

  const weeklyTrendData = [
    { day: 'Mon', total: 12, recyclable: 10 },
    { day: 'Tue', total: 19, recyclable: 16 },
    { day: 'Wed', total: 15, recyclable: 12 },
    { day: 'Thu', total: 22, recyclable: 18 },
    { day: 'Fri', total: 28, recyclable: 24 },
    { day: 'Sat', total: 18, recyclable: 15 },
    { day: 'Sun', total: 14, recyclable: 11 }
  ];

  return (
    <div className="py-8 px-6">
      <div className="max-w-[1400px] mx-auto space-y-6">
        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Detection Accuracy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-[20px] shadow-lg p-8 border border-emerald-200/50 dark:border-emerald-500/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-[14px] text-emerald-700 dark:text-emerald-400 mb-2">
              📈 Detection Accuracy
            </p>
            <p className="text-[48px] text-emerald-900 dark:text-emerald-300 mb-2">
              94.2%
            </p>
            <div className="flex items-center gap-1 text-[14px] text-emerald-600 dark:text-emerald-400">
              <ArrowUp className="w-4 h-4" />
              <span>+2.1% from last week</span>
            </div>
          </motion.div>

          {/* Card 2 - Weekly Goal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-sky-950/30 dark:to-cyan-950/30 rounded-[20px] shadow-lg p-8 border border-sky-200/50 dark:border-sky-500/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-[14px] text-sky-700 dark:text-sky-400 mb-2">
              🎯 Weekly Goal
            </p>
            <p className="text-[48px] text-sky-900 dark:text-sky-300 mb-2">
              85%
            </p>
            <p className="text-[14px] text-sky-600 dark:text-sky-400">
              120/140 items detected
            </p>
          </motion.div>

          {/* Card 3 - Processing Speed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-[20px] shadow-lg p-8 border border-amber-200/50 dark:border-amber-500/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-[14px] text-amber-700 dark:text-amber-400 mb-2">
              ⚡ Processing Speed
            </p>
            <p className="text-[48px] text-amber-900 dark:text-amber-300 mb-2">
              1.2s
            </p>
            <p className="text-[14px] text-amber-600 dark:text-amber-400">
              Average detection time
            </p>
          </motion.div>

          {/* Card 4 - False Positives */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-[20px] shadow-lg p-8 border border-purple-200/50 dark:border-purple-500/20"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-[14px] text-purple-700 dark:text-purple-400 mb-2">
              ✓ False Positives
            </p>
            <p className="text-[48px] text-purple-900 dark:text-purple-300 mb-2">
              5.8%
            </p>
            <div className="flex items-center gap-1 text-[14px] text-purple-600 dark:text-purple-400">
              <ArrowDown className="w-4 h-4" />
              <span>-1.2% improvement</span>
            </div>
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Category Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-slate-800 rounded-[20px] shadow-lg p-8"
          >
            <h3 className="text-[20px] text-slate-900 dark:text-white mb-6">
              Category Distribution
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-[14px] text-slate-600 dark:text-slate-400">
                    {item.name}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Confidence Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-[20px] shadow-lg p-8"
          >
            <h3 className="text-[20px] text-slate-900 dark:text-white mb-6">
              Confidence Statistics
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={confidenceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="range" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="count" fill="#22C55E" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Weekly Detection Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-[20px] shadow-lg p-8"
        >
          <h3 className="text-[20px] text-slate-900 dark:text-white mb-6">
            Weekly Detection Trend
          </h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#0EA5E9"
                  strokeWidth={3}
                  dot={{ fill: '#0EA5E9', r: 5 }}
                  name="Total Detections"
                />
                <Line
                  type="monotone"
                  dataKey="recyclable"
                  stroke="#22C55E"
                  strokeWidth={3}
                  dot={{ fill: '#22C55E', r: 5 }}
                  name="Recyclable"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Bottom Navigation Buttons */}
        <div className="grid md:grid-cols-3 gap-4">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="h-[60px] bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-[12px] shadow-lg transition-all"
          >
            Recyclability Rate
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="h-[60px] bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white rounded-[12px] shadow-lg transition-all"
          >
            Confidence Statistics
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="h-[60px] bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-[12px] shadow-lg transition-all"
          >
            Categories Detected
          </motion.button>
        </div>
      </div>
    </div>
  );
}
