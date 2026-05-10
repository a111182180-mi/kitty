import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'motion/react';

export default function VideoModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex justify-center items-center p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col font-sans bg-black relative"
      >
        <div className="flex justify-between items-center p-4 px-6 border-b border-gray-800 bg-gray-900 sticky top-0 z-20">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">🎬 AI 影片作品</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors"><X size={20} /></button>
        </div>
        
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
            <iframe 
                className="w-full h-full relative z-10"
                src="https://www.youtube.com/embed/-GPRtTtDpdk?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
      </motion.div>
    </div>
  )
}
