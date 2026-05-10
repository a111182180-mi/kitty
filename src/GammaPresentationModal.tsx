import React from 'react';
import { X, CheckCircle, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function GammaPresentationModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  const days = [
    {
      title: "台北 ➔ 東京 | 東京首日漫步",
      day: 1,
      sections: [
        { icon: "✈️", title: "航班建議", desc: "選擇 12:00 前抵達成田 (NRT) 或羽田 (HND)，搭乘快線 Skyliner 直達上野 (41分鐘)" },
        { icon: "🚶", title: "下午行程", desc: "飯店 Check-in 後，前往澀谷 Sky 欣賞夕陽與夜景，浪漫感滿滿。⚠️ 需提前一個月預約！" },
        { icon: "🍽️", title: "晚餐", desc: "敘敘苑燒肉 (上野不忍口店)，窗外有美景相伴，開啟旅程第一頓大餐。" }
      ],
      tip: "住宿強烈建議在上野，交通方便，生活機能佳，且搭 Skyliner 下車即到！午餐於機場客運站用即可，保留體力晚餐吃敘敘苑和牛燒肉吧！"
    },
    {
      title: "東京 ➔ 大阪 | 新幹線・櫻花與道頓堀",
      day: 2,
      sections: [
        { icon: "🚅", title: "移動", desc: "Nozomi 17 號 於 08:30 ➔ 新大阪 10:57。記得在東京車站買好火車便當上車享用！" },
        { icon: "🌸", title: "下午", desc: "大阪城公園賞櫻，傍晚再前往心齋橋、道頓堀商圈，感受大阪的活力。" },
        { icon: "🍽️", title: "晚餐", desc: "螃蟹道樂 (吃海鮮放題)、道頓堀達摩炸串，道地一口接一口。" }
      ],
      tip: "聰明觀光小撇步: 早上在飯店把行李託運至大阪新飯店，兩人輕鬆上陣搭新幹線，自由自在！"
    },
    {
      title: "大阪 | 環球影城戰鬥日",
      day: 3,
      sections: [
        { icon: "🥐", title: "早餐", desc: "便利商店熱壓吐司，快速補充體能，準備一天的戰鬥！" },
        { icon: "🍔", title: "午餐", desc: "瑪利歐區奇諾比奧咖啡店 (需早點排)，打卡超級瑪利歐餐點。" },
        { icon: "🍢", title: "晚餐", desc: "炸串達摩 (だるま) 難波總店，或吃個拉麵，完美收尾。" },
        { icon: "🚆", title: "交通", desc: "搭乘環狀線 JR 櫻島線至「環球城」站，約 20 分鐘輕鬆抵達。" }
      ],
      tip: "預計 08:30 準時入園！記得買快速通關，瘋狂暢玩各項設施不浪費時間！"
    },
    {
      title: "大阪 ➔ 京都 | 古都櫻花巡禮",
      day: 4,
      sections: [
        { icon: "⛩️", title: "上午行程", desc: "清水寺、二年坂漫步，穿著和服走在古風的粉色櫻花徑，是京都最美的畫面。" },
        { icon: "🌸", title: "下午選擇", desc: "依花況選擇: 哲學之道 (粉色浪漫版) 或嵐山 (竹林與桂川) —— 兩者都是絕美風光。" },
        { icon: "🍽️", title: "三餐", desc: "午: 京都順正豆腐 (南禪寺旁)。晚: 國產牛燒肉 あぶりや (千日前店)，大口吃肉慶祝旅程美好。" }
      ],
      tip: "交通建議: 從難波搭乘 JR 至京都站，約 45 分鐘即可抵達！春季時客流湧動，建議提早出門早鳥人少景美！"
    },
    {
      title: "大阪 ➔ 名古屋 | 吉卜力奇幻",
      day: 5,
      sections: [
        { icon: "🚅", title: "搭配新幹線出發", desc: "Nozomi 12 號 於 08:36 ➔ 名古屋 09:25" },
        { icon: "🌳", title: "前往吉卜力公園", desc: "搭乘地鐵東山線轉「藤丘」，再搭火車林線 Linimo 直達。童話世界就在眼前。" },
        { icon: "🎫", title: "10:30 入園", desc: "重點攻略「大倉庫」與「魔女之谷」，進入奇幻世界的隧道與動畫場景完美還原。" },
        { icon: "🍽️", title: "餐食", desc: "午餐於園內「橫斷大陸」三明治店，晚餐為「蓬萊軒鰻魚飯三吃」，令人驚豔。" }
      ],
      tip: "訂票提醒: 吉卜力公園採預約制，需事先在日本網站購票，記得提前搶票，讓這趟美夢成真！"
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex justify-center items-center p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col font-sans"
      >
        <div className="flex justify-between items-center p-4 px-6 border-b border-gray-100 bg-white sticky top-0 z-20">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">🌸 清明六天連假 | 東京・大阪・京都 (Gamma)</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-500 hover:text-gray-800 transition-colors"><X size={20} /></button>
        </div>
        
        <div className="overflow-y-auto p-4 md:p-10 space-y-12 pb-20 bg-[#fafafa]">
          {/* Cover */}
          <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="w-full md:w-1/3 bg-gradient-to-br from-pink-100 to-red-100 min-h-[200px] md:min-h-[400px]"></div>
            <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-3xl md:text-5xl font-serif text-gray-800 tracking-tight leading-tight mb-6">🌸 清明六天連假 | 東京・大阪・京都</h1>
              <p className="text-gray-600 text-lg leading-relaxed">精心規劃的六天五夜旅程，帶你從繁華東京出發，穿越大阪的熱鬧與活力，漫步京都的古都花徑，最後前往名古屋圓夢——每一天都是粉色浪漫的印記。</p>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
             <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-2">行程總覽</h2>
             <h3 className="text-3xl font-serif text-gray-800 mb-8">六天五城，一次走遍春日日本</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 {d: 'Day 1', route: '台北 ➔ 東京', desc: '上野、澀谷 Sky'},
                 {d: 'Day 2', route: '東京 ➔ 大阪', desc: '大阪城、道頓堀'},
                 {d: 'Day 3', route: '大阪', desc: '環球影城 (USJ)'},
                 {d: 'Day 4', route: '大阪 ➔ 京都', desc: '清水寺、哲學之道'},
                 {d: 'Day 5', route: '大阪 ➔ 名古屋', desc: '吉卜力公園'},
                 {d: 'Day 6', route: '名古屋 ➔ 東京 ➔ 台北', desc: '最後衝刺回程'}
               ].map(item => (
                 <div key={item.d} className="p-4 border-l-2 border-pink-200">
                   <div className="font-serif text-pink-500 font-bold mb-1">{item.d}</div>
                   <div className="text-gray-800 font-medium">{item.route}</div>
                   <div className="text-gray-500 text-sm">{item.desc}</div>
                 </div>
               ))}
             </div>
          </div>

          {/* Daily Schedule */}
          <div className="space-y-8">
            {days.map((d) => (
              <div key={d.day} className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="w-full md:w-32 bg-gray-50 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-gray-100 text-gray-300 font-serif text-5xl">
                  {d.day}
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <h3 className="text-2xl font-serif text-gray-800 mb-6">{d.title}</h3>
                  <div className="space-y-4 mb-6">
                    {d.sections.map((s, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-lg shrink-0">{s.icon}</div>
                        <div>
                          <h4 className="font-bold text-gray-800">{s.title}</h4>
                          <p className="text-gray-600 mt-1">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-orange-50 text-orange-800 p-4 rounded-xl flex gap-3 text-sm">
                     <Info className="shrink-0 mt-0.5 text-orange-400" size={18} />
                     <p>{d.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Day 6 Timeline */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-2">Day 6</h2>
            <h3 className="text-3xl font-serif text-gray-800 mb-8">名古屋 ➔ 東京 ➔ 台北 | 最後衝刺回程</h3>
            <div className="relative border-l-2 border-gray-100 ml-4 py-4 space-y-8">
              <div className="relative pl-8">
                <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full border-4 border-white bg-pink-400"></div>
                <h4 className="font-bold text-gray-800 mb-1">09:36 出發</h4>
                <p className="text-gray-600 text-sm">Nozomi 14 號 名古屋 ➔ 東京<br/>抵達時間約 11:15</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full border-4 border-white bg-pink-400"></div>
                <h4 className="font-bold text-gray-800 mb-1">11:30 掃貨</h4>
                <p className="text-gray-600 text-sm">東京一番街伴手禮、卡通周邊<br/>最後補齊好帶走！</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full border-4 border-white bg-pink-400"></div>
                <h4 className="font-bold text-gray-800 mb-1">12:30 午餐</h4>
                <p className="text-gray-600 text-sm">斑鳩拉麵 東京一番街內<br/>美味畫下完美句點</p>
              </div>
              <div className="relative pl-8">
                 <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full border-4 border-white bg-pink-400"></div>
                 <h4 className="font-bold text-gray-800 mb-1">下午 前往機場</h4>
                 <p className="text-gray-600 text-sm">提前 3 小時 抵達機場<br/>辦理登機手續，帶著滿滿的回憶回家</p>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
             <h3 className="text-3xl font-serif text-gray-800 mb-2">💰 旅費預算一覽</h3>
             <p className="text-gray-500 mb-8">以下為每人預估費用（雙人同行，共享住宿），清明旺季建議提早訂購機票與住宿。</p>
             <div className="overflow-x-auto">
               <table className="w-full text-left">
                 <thead>
                   <tr className="border-b-2 border-gray-800 text-gray-800">
                     <th className="py-4 font-bold">項目</th>
                     <th className="py-4 font-bold">估算金額 (TWD)</th>
                     <th className="py-4 font-bold">說明</th>
                   </tr>
                 </thead>
                 <tbody className="text-gray-600">
                   <tr className="border-b border-gray-100">
                     <td className="py-4">✈️ 國際機票</td><td className="py-4">$23,000</td><td className="py-4">清明旺季傳統航空票價</td>
                   </tr>
                   <tr className="border-b border-gray-100">
                     <td className="py-4">🏨 住宿費用</td><td className="py-4">$12,500</td><td className="py-4">5 晚雙人房平分 ($2,500/晚/人)</td>
                   </tr>
                   <tr className="border-b border-gray-100">
                     <td className="py-4">🚅 新幹線交通</td><td className="py-4">$8,800</td><td className="py-4">東京-大阪、大阪-名古屋、名古屋-東京</td>
                   </tr>
                   <tr className="border-b border-gray-100">
                     <td className="py-4">🚆 當地交通/宅急便</td><td className="py-4">$2,500</td><td className="py-4">地鐵、私鐵、一次行李寄送費用</td>
                   </tr>
                   <tr className="border-b border-gray-100">
                     <td className="py-4">🎫 門票費用</td><td className="py-4">$7,500</td><td className="py-4">USJ (門票+快通)、吉卜力、澀谷 Sky</td>
                   </tr>
                   <tr className="border-b border-gray-100">
                     <td className="py-4">🍽️ 三餐餐飲</td><td className="py-4">$12,000</td><td className="py-4">平均每日 $2,000 (含和牛、鰻魚飯等大餐)</td>
                   </tr>
                   <tr className="bg-gray-50">
                     <td className="py-4 px-2 font-bold text-gray-800">總計預估</td>
                     <td className="py-4 font-bold text-gray-800">$66,300</td>
                     <td className="py-4 text-gray-500">不含購物，建議準備 $75,000 較保險</td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </div>

          {/* Outro */}
          <div className="bg-pink-50 p-8 md:p-12 rounded-2xl shadow-sm border border-pink-100">
            <h3 className="text-3xl font-serif text-gray-800 mb-4">出發吧！帶著愛，赴一場春与之約</h3>
            <p className="text-gray-700 leading-relaxed mb-8">六天的旅程，從東京的霓虹夜景到京都的落櫻繽紛，每一刻都值得紀錄。趁著清明連假，帶上你最想陪伴的人，一起去感受日本春天最溫柔的模樣。</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-xl border border-pink-100">
                  <div className="flex items-center gap-2 font-bold flex text-pink-600 mb-2">
                    <CheckCircle size={20} /> 提前準備
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">澀谷 Sky、吉卜力、USJ 快速通關，都需要<span className="font-bold text-gray-800">前一個月以上預訂！</span></p>
               </div>
               <div className="bg-white p-6 rounded-xl border border-pink-100">
                  <div className="flex items-center gap-2 font-bold flex text-pink-600 mb-2">
                    <CheckCircle size={20} /> 花況確認
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">出發前查詢日本氣象協會櫻花前線，隨時調整行程。</p>
               </div>
               <div className="bg-white p-6 rounded-xl border border-pink-100 md:col-span-2">
                  <div className="flex items-center gap-2 font-bold flex text-pink-600 mb-2">
                    <CheckCircle size={20} /> 行前必備
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">ICOCA 或 Suica 交通卡、網路 eSIM、備用現金，缺一不可！</p>
               </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
