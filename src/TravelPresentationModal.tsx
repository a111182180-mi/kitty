import React from 'react';
import { X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function TravelPresentationModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex justify-center items-center p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        className="bg-[#fff0f5] w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col font-sans border-4 border-white"
      >
        <div className="flex justify-between items-center p-4 px-6 border-b-2 border-white bg-[#ffe4e1]">
          <h2 className="text-2xl font-bold text-[#ff69b4] flex items-center gap-2">🌸 清明櫻花之旅簡報</h2>
          <button onClick={onClose} className="p-2 bg-white rounded-full text-gray-500 hover:text-[#ff1493] shadow-sm transition-colors"><X size={24} /></button>
        </div>
        
        <div className="overflow-y-auto p-6 md:p-10 space-y-12 bg-white/50 pb-20">
          
          {/* Cover Slide */}
          <div className="text-center space-y-6 py-10 glass-panel rounded-3xl border-4 border-white shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
            <p className="text-[#ff82ab] font-bold tracking-widest uppercase text-sm md:text-base">TOKYO • OSAKA • KYOTO • NAGOYA</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#5a4a4a] tracking-tight">清明櫻花之旅</h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium pt-4">跨越關東與關西的六日夢幻提案</p>
          </div>

          {/* Overview */}
          <div className="glass-panel p-8 rounded-3xl border-2 border-white text-center">
            <div className="bg-[#ffb6c1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-md">
                <MapPin size={32} />
            </div>
            <h2 className="text-3xl font-bold text-[#5a4a4a] mb-4">全行程路線概覽</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto font-medium">
              從東京進、名古屋出，完美利用新幹線串聯。<br/>
              這趟旅程涵蓋了潮流街景、環球影城、古都文化與吉卜力奇幻世界。
            </p>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Day 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-l-[#ffb6c1]">
              <p className="text-[#ff69b4] font-black text-2xl mb-1">Day 1：台北 ➔ 東京</p>
              <p className="text-gray-500 font-bold mb-4">東京首日漫步</p>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start gap-2"><span>✈️</span> 航班建議：12:00 前抵達成田 (NRT)</li>
                <li className="flex items-start gap-2"><span>🏨</span> 飯店住宿：建議入住交通便利的上野</li>
                <li className="flex items-start gap-2"><span>🌅</span> 景點：澀谷 Sky (需提前一個月預約夕陽)</li>
                <li className="flex items-start gap-2"><span>🥩</span> 晚餐：敘敘苑燒肉 (上野不忍口店)</li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-l-[#ffb6c1]">
              <p className="text-[#ff69b4] font-black text-2xl mb-1">Day 2：櫻花與道頓堀</p>
              <p className="text-gray-500 font-bold mb-4">東京 ➔ 大阪新幹線移動</p>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start gap-2"><span>🚄</span> 搭乘 08:30 Nozomi 17號前進關西</li>
                <li className="flex items-start gap-2"><span>🌸</span> 大阪城公園賞櫻 (春季重點景點)</li>
                <li className="flex items-start gap-2"><span>🛍️</span> 傍晚心齋橋與道頓堀逛街</li>
                <li className="flex items-start gap-2"><span>💡</span> 貼心提醒：行李托運寄往大阪飯店</li>
              </ul>
            </div>

            {/* Day 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-l-[#ffb6c1]">
              <p className="text-[#ff69b4] font-black text-2xl mb-1">Day 3：環球影城戰鬥日</p>
              <p className="text-gray-500 font-bold mb-4">進入超級任天堂世界與哈利波特！</p>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start gap-2"><span>🎢</span> 預計 08:30 入園，挑戰各項熱門遊樂設施</li>
                <li className="flex items-start gap-2"><span>🍄</span> 午餐推薦：瑪利歐區奇諾比奧咖啡店</li>
                <li className="flex items-start gap-2"><span>🍢</span> 晚餐推薦：炸串達摩 難波總店</li>
              </ul>
            </div>

            {/* Day 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-l-[#ffb6c1]">
              <p className="text-[#ff69b4] font-black text-2xl mb-1">Day 4：古都櫻花巡禮</p>
              <p className="text-gray-500 font-bold mb-4">大阪 ➔ 京都文化體驗</p>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start gap-2"><span>⛩️</span> 上午：清水寺與二年坂經典漫步</li>
                <li className="flex items-start gap-2"><span>🌸</span> 下午：哲學之道或嵐山賞櫻</li>
                <li className="flex items-start gap-2"><span>🍲</span> 午餐：京都順正豆腐名物</li>
                <li className="flex items-start gap-2"><span>🥩</span> 晚餐：國產牛燒肉 あぶりや</li>
              </ul>
            </div>

            {/* Day 5 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-l-[#ffb6c1]">
              <p className="text-[#ff69b4] font-black text-2xl mb-1">Day 5：吉卜力奇幻日</p>
              <p className="text-gray-500 font-bold mb-4">大阪 ➔ 名古屋新幹線</p>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start gap-2"><span>🌳</span> 行程：吉卜力公園 (Ghibli Park)</li>
                <li className="flex items-start gap-2"><span>✨</span> 重點：大倉庫與魔女之谷</li>
                <li className="flex items-start gap-2"><span>🥪</span> 午餐：園內「橫斷大陸」三明治</li>
                <li className="flex items-start gap-2"><span>🍱</span> 晚餐：蓬萊軒鰻魚飯三吃</li>
              </ul>
            </div>

            {/* Day 6 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-l-[#ffb6c1]">
              <p className="text-[#ff69b4] font-black text-2xl mb-1">Day 6：最後衝刺回程</p>
              <p className="text-gray-500 font-bold mb-4">東京一番街補貨 ➔ 準備賦歸</p>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex items-start gap-2"><span>🚄</span> 上午搭乘新幹線回到東京</li>
                <li className="flex items-start gap-2"><span>🛍️</span> 前往東京車站一番街，進行最後大掃貨。午餐享用斑鳩拉麵。</li>
                <li className="flex items-start gap-2"><span>🧳</span> 整理戰利品並確認行李重量</li>
                <li className="flex items-start gap-2"><span>✈️</span> 帶著滿滿的回憶回到溫暖的家</li>
              </ul>
            </div>
          </div>

          {/* Budget Table */}
          <div className="bg-white p-4 md:p-8 rounded-3xl shadow-sm border-2 border-white overflow-x-auto">
            <h3 className="text-2xl font-bold text-[#5a4a4a] mb-6 border-b-2 border-[#ffe4e1] pb-2">💰 預算花費明細表</h3>
            <table className="w-full min-w-[600px] text-left border-collapse">
              <thead>
                <tr className="bg-[#ffb6c1] text-white">
                  <th className="p-3 rounded-tl-xl font-bold">項目</th>
                  <th className="p-3 font-bold">估算金額 (TWD)</th>
                  <th className="p-3 rounded-tr-xl font-bold">說明</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-[#ffe4e1]">
                  <td className="p-3 font-bold">國際機票</td><td className="p-3">$23,000</td><td className="p-3">清明旺季傳統航空</td>
                </tr>
                <tr className="border-b border-[#ffe4e1]">
                  <td className="p-3 font-bold">住宿費用</td><td className="p-3">$12,500</td><td className="p-3">5 晚雙人房平分</td>
                </tr>
                <tr className="border-b border-[#ffe4e1]">
                  <td className="p-3 font-bold">交通/新幹線</td><td className="p-3">$11,300</td><td className="p-3">含三段跨區新幹線與宅急便</td>
                </tr>
                <tr className="border-b border-[#ffe4e1]">
                  <td className="p-3 font-bold">門票費用</td><td className="p-3">$7,500</td><td className="p-3">USJ(門票+快通)、吉卜力、澀谷 Sky</td>
                </tr>
                <tr className="border-b border-[#ffb6c1]">
                  <td className="p-3 font-bold">餐飲/雜支</td><td className="p-3">$12,000+</td><td className="p-3">平均每日 $2,000 豪華餐飲</td>
                </tr>
                <tr className="bg-[#fff0f5]">
                  <td className="p-3 font-black text-[#ff1493] rounded-bl-xl">總計預估</td>
                  <td className="p-3 font-black text-[#ff1493]">$66,300</td>
                  <td className="p-3 font-bold text-[#ff69b4] rounded-br-xl">建議準備 $75,000 較保險</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer CTA */}
          <div className="text-center pt-8">
            <h3 className="text-4xl font-extrabold text-[#ff69b4] mb-4">Ready to Explore?</h3>
            <p className="text-xl text-gray-700 font-bold mb-2">櫻花季限定，現在就預約您的完美假期！</p>
            <p className="text-gray-400 text-sm">ⓘ 備註：吉卜力公園與澀谷 Sky 需提早預約。<br/>祝您旅途愉快！</p>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
