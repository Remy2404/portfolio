import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CpuIcon, BarChart2, Activity, Zap } from 'lucide-react';

const SystemStats = () => {
  const [cpuUsage, setCpuUsage] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [networkSpeed, setNetworkSpeed] = useState(0);
  const [performanceScore, setPerformanceScore] = useState(0);
  
  // Update stats
  useEffect(() => {
    // Initial values
    setCpuUsage(Math.floor(Math.random() * 30) + 20);
    setMemoryUsage(Math.floor(Math.random() * 40) + 30);
    setNetworkSpeed(Math.floor(Math.random() * 100) + 50);
    setPerformanceScore(Math.floor(Math.random() * 20) + 80);
    
    // Update periodically
    const interval = setInterval(() => {
      // Random fluctuations
      setCpuUsage(prev => {
        const delta = Math.floor(Math.random() * 10) - 5;
        return Math.min(Math.max(prev + delta, 10), 95);
      });
      
      setMemoryUsage(prev => {
        const delta = Math.floor(Math.random() * 8) - 4;
        return Math.min(Math.max(prev + delta, 20), 90);
      });
      
      setNetworkSpeed(prev => {
        const delta = Math.floor(Math.random() * 20) - 10;
        return Math.min(Math.max(prev + delta, 10), 200);
      });
      
      setPerformanceScore(prev => {
        const delta = Math.floor(Math.random() * 6) - 3;
        return Math.min(Math.max(prev + delta, 70), 100);
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Determine health status based on metrics
  const getHealthStatus = () => {
    const avgScore = (cpuUsage + memoryUsage + performanceScore) / 3;
    
    if (avgScore > 75) return { status: 'OPTIMAL', color: 'green' };
    if (avgScore > 50) return { status: 'NOMINAL', color: 'blue' };
    if (avgScore > 30) return { status: 'DEGRADED', color: 'yellow' };
    return { status: 'CRITICAL', color: 'pink' };
  };
  
  const healthStatus = getHealthStatus();
  
  return (
    <div className="fixed top-24 right-4 z-30 font-mono text-xs bg-black/70 border border-cyberpunk-blue/40 rounded-lg shadow-lg p-3 backdrop-blur-md w-56">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Zap className="w-4 h-4 text-cyberpunk-green mr-1" />
          <span className="text-cyberpunk-green font-bold">SYSTEM_STATUS</span>
        </div>
        <motion.div 
          className={`bg-cyberpunk-${healthStatus.color}/20 px-1 py-0.5 rounded text-cyberpunk-${healthStatus.color} text-xs`}
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {healthStatus.status}
        </motion.div>
      </div>
      
      {/* CPU Usage */}
      <div className="mb-2">
        <div className="flex items-center justify-between text-gray-400">
          <div className="flex items-center">
            <CpuIcon className="w-3 h-3 mr-1" />
            <span>CPU</span>
          </div>
          <span className={cpuUsage > 80 ? 'text-cyberpunk-pink' : cpuUsage > 60 ? 'text-cyberpunk-yellow' : 'text-cyberpunk-green'}>
            {cpuUsage}%
          </span>
        </div>
        <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden mt-1">
          <motion.div 
            className={`h-full ${
              cpuUsage > 80 
                ? 'bg-cyberpunk-pink' 
                : cpuUsage > 60 
                ? 'bg-cyberpunk-yellow' 
                : 'bg-cyberpunk-green'
            }`}
            initial={{ width: '0%' }}
            animate={{ width: `${cpuUsage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      
      {/* Memory Usage */}
      <div className="mb-2">
        <div className="flex items-center justify-between text-gray-400">
          <div className="flex items-center">
            <BarChart2 className="w-3 h-3 mr-1" />
            <span>MEMORY</span>
          </div>
          <span className={memoryUsage > 80 ? 'text-cyberpunk-pink' : memoryUsage > 60 ? 'text-cyberpunk-yellow' : 'text-cyberpunk-green'}>
            {memoryUsage}%
          </span>
        </div>
        <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden mt-1">
          <motion.div 
            className={`h-full ${
              memoryUsage > 80 
                ? 'bg-cyberpunk-pink' 
                : memoryUsage > 60 
                ? 'bg-cyberpunk-yellow' 
                : 'bg-cyberpunk-green'
            }`}
            initial={{ width: '0%' }}
            animate={{ width: `${memoryUsage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      
      {/* Network Speed */}
      <div className="mb-2">
        <div className="flex items-center justify-between text-gray-400">
          <div className="flex items-center">
            <Activity className="w-3 h-3 mr-1" />
            <span>NETWORK</span>
          </div>
          <span className="text-cyberpunk-blue">{networkSpeed} MB/s</span>
        </div>
        <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden mt-1">
          <motion.div 
            className="h-full bg-cyberpunk-blue"
            initial={{ width: '0%' }}
            animate={{ width: `${Math.min(networkSpeed / 2, 100)}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      
      {/* Performance Score */}
      <div className="pt-2 border-t border-gray-800 mt-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">PERFORMANCE SCORE</span>
          <motion.span 
            className="text-cyberpunk-green font-bold"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {performanceScore}/100
          </motion.span>
        </div>
      </div>
      
      {/* "Last updated" info */}
      <div className="mt-2 text-right text-gray-500 text-[10px]">
        last_update: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};

export default SystemStats;
