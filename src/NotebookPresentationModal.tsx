import React from 'react';
import { X, MapPin, Gauge, Utensils, TrainFront, Briefcase, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function NotebookPresentationModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  const days = [
    {
      day: 1,
      pace: 'Moderate / 舒適步調',
      title: '降落與東京暮色',
      route: '台北 ➔ 東京 (住宿建議: 上野)',
      schedule: [
        { time: '中午', desc: '啟程：選擇 12:00 前抵達成田 (NRT) 或羽田 (HND) 的航班。' },
        { time: '下午', desc: '登高：飯店 Check-in 後，直奔澀谷 Sky 俯瞰絕美夕陽與璀璨夜景。(⚠️ 需一個月前預約)' }
      ],
      food: '午餐：機場輕食 (高效補給) / 晚餐：敘敘苑燒肉 (上野不忍口店)',
      transport: '成田機場搭乘 Skyliner 直達上野，僅需 41 分鐘。'
    },
    {
      day: 2,
      pace: 'Moderate / 舒適步調',
      title: '櫻花特快與道頓堀之夜',
      route: '東京 ➔ 大阪',
      schedule: [
        { time: '08:30', desc: '移動：東京車站搭乘 Nozomi 17 號，10:57 準時抵達新大阪。' },
        { time: '下午', desc: '賞櫻：漫步大阪城公園 — 關西賞櫻的絕對重點。' },
        { time: '傍晚', desc: '繁華：深入心齋橋、道頓堀，感受關西熱情與霓虹夜色。' },
      ],
      food: '午餐：新幹線限定便當 / 晚餐：道頓堀螃蟹道樂 或 美津大阪燒',
      transport: '✨ 空手觀光策略：在東京飯店將大行李托運寄往大阪飯店，輕裝搭乘新幹線！'
    },
    {
      day: 3,
      pace: 'High / 戰鬥步調 - 20k+ Steps',
      title: '環球影城全日戰鬥',
      route: '大阪 (全日)',
      schedule: [
        { time: '08:30', desc: '闖園衝刺：日本環球影城 (USJ) 一日遊。' },
        { time: '全日', desc: '沉浸體驗：搭配快速通關，高效率刷霸超級任天堂世界與各大經典主題區。' }
      ],
      food: '午餐：奇諾比奧咖啡店 / 晚餐：炸串達摩 (だるま) 難波總店',
      transport: '從難波出發，搭乘 JR 環狀線直達「環球城站」。'
    },
    {
      day: 4,
      pace: 'Slow / 深度慢遊',
      title: '古都櫻花巡禮',
      route: '大阪 ➔ 京都 (單日往返)',
      schedule: [
        { time: '上午', desc: '晨曦古剎：漫步清水寺與二年坂。' },
        { time: '下午', desc: '花見追尋：視當日「櫻花前線」決定前往哲學之道，或轉往嵐山。' }
      ],
      food: '午餐：順正豆腐 (南禪寺旁) / 晚餐：國產牛燒肉 あぶりや (千日前店)',
      transport: '難波搭乘近鐵特急或 JR 至京都站 (約 45 分鐘)。'
    },
    {
      day: 5,
      pace: 'Moderate / 舒適步調',
      title: '吉卜力奇幻空間',
      route: '大阪 ➔ 名古屋',
      schedule: [
        { time: '08:36', desc: '晨間移動：新大阪站搭乘 Nozomi 12 號，09:25 抵達名古屋。' },
        { time: '10:30', desc: '進入奇幻：吉卜力公園 (Ghibli Park) 入園，探索大倉庫與魔女之谷。' }
      ],
      food: '午餐：園區內「橫斷大陸」三明治 / 晚餐：蓬萊軒 鰻魚飯三吃',
      transport: '名古屋站轉乘地鐵東山線至「藤丘」，轉乘磁浮電車直達。'
    },
    {
      day: 6,
      pace: 'Fast / 精準衝刺',
      title: '滿載而歸的最終衝刺',
      route: '名古屋 ➔ 東京 ➔ 台北',
      schedule: [
        { time: '09:36', desc: '啟程回京：名古屋搭乘 Nozomi 14 號，11:15 抵達東京。' },
        { time: '下午', desc: '最後採購：東京車站一番街，集中火力補齊伴手禮與動漫周邊。' },
        { time: '傍晚', desc: '歸途：帶著滿滿回憶前往機場，準備登機。' }
      ],
      food: '午餐：東京車站一番街 斑鳩拉麵 / 晚餐：機場飛機餐',
      transport: '善用東京車站大型寄物櫃 (Coin Lockers)，無負擔購物。'
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex justify-center items-center p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#fdfaf7] w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col font-sans border-2 border-[#e8d5c4]"
      >
        <div className="flex justify-between items-center p-4 px-6 border-b border-[#e8d5c4] bg-[#f5e6da] sticky top-0 z-20">
          <h2 className="text-xl font-bold text-[#8c6b54] flex items-center gap-2">🌸 櫻盛開的黃金軌跡 (Notebook LM)</h2>
          <button onClick={onClose} className="p-2 bg-white rounded-full text-gray-500 hover:text-[#8c6b54] shadow-sm transition-colors"><X size={20} /></button>
        </div>
        
        <div className="overflow-y-auto p-4 md:p-10 space-y-8 pb-20 text-[#5c4a3d]">
          {/* Cover */}
          <div className="text-left space-y-6 p-8 md:p-12 bg-white rounded-3xl shadow-sm relative overflow-hidden bg-gradient-to-br from-[#fcf8f5] to-[#f5e6da]">
            <p className="text-[#a68a73] font-bold tracking-widest text-sm uppercase">2024 清明連假完美提案</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#5c4a3d] tracking-tight mb-2">櫻盛開的<br className="md:hidden"/>黃金軌跡</h1>
            <p className="text-base md:text-xl text-[#8c6b54] font-medium border-t border-[#e8d5c4] pt-4 mt-6 inline-block">東京 • 大阪 • 京都 • 名古屋 — 六天五夜頂級高鐵雙效行旅</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#f0e4da]">
              <h3 className="text-xl font-bold text-[#8c6b54] mb-4 flex items-center gap-2"><MapPin size={24} />跨越關東與關西的完美迴圈</h3>
              <p className="text-[#6e594b] font-medium leading-relaxed">
                結合「極速移動」與「深度慢遊」。<br/>
                利用新幹線的絕對優勢，將日本四大精華城市濃縮於六天的黃金假期之中。
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#f0e4da]">
              <h3 className="text-xl font-bold text-[#8c6b54] mb-4 flex items-center gap-2"><Briefcase size={24} />高效移動美學</h3>
              <p className="text-[#6e594b] font-medium leading-relaxed mb-2">
                <span className="font-bold text-[#8c6b54]">行李分流術：</span>Day 2 早上交由飯店「宅急便」寄出行李，輕裝搭乘新幹線前往大阪。
              </p>
              <p className="text-[#6e594b] font-medium leading-relaxed">
                <span className="font-bold text-[#8c6b54]">新幹線與寄物：</span>提前劃位 Nozomi 指定席。善用車站大型寄物櫃，達成最後一日無負擔購物。
              </p>
            </div>
          </div>

          {/* Daily Schedule */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-[#5c4a3d] text-center mb-8 border-b border-[#e8d5c4] pb-4">行程總覽</h2>
            
            {days.map((d) => (
              <div key={d.day} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#f0e4da]">
                <div className="bg-[#f5e6da] p-4 px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <h3 className="text-2xl font-black text-[#8c6b54]">Day {d.day} | {d.title}</h3>
                    <p className="text-[#a68a73] font-bold text-sm tracking-wider mt-1">{d.route}</p>
                  </div>
                  <div className="bg-white/60 px-3 py-1 rounded-full flex items-center gap-2 text-sm font-bold text-[#8c6b54]">
                    <Gauge size={16} /> Pace: {d.pace}
                  </div>
                </div>
                
                <div className="p-6 md:p-8 space-y-6">
                  <div className="space-y-4">
                    {d.schedule.map((s, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-16 flex-shrink-0 text-[#8c6b54] font-bold mt-0.5">{s.time}</div>
                        <div className="flex-1 text-[#6e594b] font-medium leading-relaxed">{s.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#f5e6da]">
                    <div className="flex items-start gap-3 bg-[#fdfaf7] p-4 rounded-2xl">
                      <Utensils className="text-[#d8a482] mt-1 shrink-0" size={20} />
                      <p className="text-sm text-[#6e594b] font-medium"><strong className="text-[#8c6b54]">Gastronomy</strong><br/>{d.food}</p>
                    </div>
                    <div className="flex items-start gap-3 bg-[#fdfaf7] p-4 rounded-2xl">
                      <TrainFront className="text-[#82a8d8] mt-1 shrink-0" size={20} />
                      <p className="text-sm text-[#6e594b] font-medium"><strong className="text-[#8c6b54]">Transport</strong><br/>{d.transport}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Budget */}
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-[#f0e4da] text-center">
             <h3 className="text-2xl font-black text-[#5c4a3d] mb-6">預算總結</h3>
             <div className="overflow-x-auto">
               <table className="w-full min-w-[600px] text-left border-collapse">
                 <thead>
                   <tr className="bg-[#f5e6da] text-[#8c6b54]">
                     <th className="p-3 rounded-tl-xl font-bold">分類</th>
                     <th className="p-3 font-bold">預估額 (TWD)</th>
                     <th className="p-3 rounded-tr-xl font-bold">細節說明</th>
                   </tr>
                 </thead>
                 <tbody className="text-[#6e594b] font-medium text-sm">
                   <tr className="border-b border-[#f5e6da]">
                     <td className="p-3 font-bold text-[#8c6b54]">國際機票 (11%)</td><td className="p-3">$23,000</td><td className="p-3">清明旺季傳統航空票價</td>
                   </tr>
                   <tr className="border-b border-[#f5e6da]">
                     <td className="p-3 font-bold text-[#8c6b54]">住宿費用 (18%)</td><td className="p-3">$12,500</td><td className="p-3">5 晚雙人房平分，每人約 $2,500/晚</td>
                   </tr>
                   <tr className="border-b border-[#f5e6da]">
                     <td className="p-3 font-bold text-[#8c6b54]">新幹線交通 (17%)</td><td className="p-3">$8,800</td><td className="p-3">含 東京-大阪、大阪-名古屋、名古屋-東京</td>
                   </tr>
                   <tr className="border-b border-[#f5e6da]">
                     <td className="p-3 font-bold text-[#8c6b54]">當地交通/物流</td><td className="p-3">$2,500</td><td className="p-3">含地鐵、私鐵及一次跨城行李宅急便寄送</td>
                   </tr>
                   <tr className="border-b border-[#f5e6da]">
                     <td className="p-3 font-bold text-[#8c6b54]">門票費用 (11%)</td><td className="p-3">$7,500</td><td className="p-3">USJ 門票+快速通關、吉卜力公園、澀谷 Sky</td>
                   </tr>
                   <tr className="border-b border-[#f5e6da]">
                     <td className="p-3 font-bold text-[#8c6b54]">三餐餐飲 (18%)</td><td className="p-3">$12,000</td><td className="p-3">平均每日 $2,000，含敘敘苑和牛、蓬萊軒等大餐</td>
                   </tr>
                   <tr className="bg-[#fcf8f5]">
                     <td className="p-4 font-black text-[#5c4a3d] text-lg rounded-bl-xl text-right" colSpan={2}>總計預估：$66,300 NTD/人</td>
                     <td className="p-4 rounded-br-xl text-[#a68a73] italic">建議準備 $75,000 較為餘裕</td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
