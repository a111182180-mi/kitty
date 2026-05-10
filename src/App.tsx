import React, { useState } from 'react';
import { User, Briefcase, Heart, Plane, Film, Box, Camera, ExternalLink, Sparkles, Map, Presentation } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import profileImg from './assets/images/regenerated_image_1778429922400.png';
import lifeImg1 from './assets/images/regenerated_image_1778429083801.jpg';
import lifeImg2 from './assets/images/regenerated_image_1778429085418.jpg';
import lifeImg3 from './assets/images/regenerated_image_1778429087107.jpg';
import lifeImg4 from './assets/images/regenerated_image_1778429089182.jpg';
import travelDay2Img from './assets/images/regenerated_image_1778432881162.webp';
import travelDay5Img from './assets/images/regenerated_image_1778432883260.jpg';
import travelDay6Img from './assets/images/regenerated_image_1778432884475.png';
import avatar3DImg from './assets/images/regenerated_image_1778433640785.jpg';
import parrot3DImg from './assets/images/regenerated_image_1778433642052.jpg';
import TravelPresentationModal from './TravelPresentationModal';
import NotebookPresentationModal from './NotebookPresentationModal';
import GammaPresentationModal from './GammaPresentationModal';
import VideoModal from './VideoModal';

// --- Background Stickers Component ---
const CuteBackground = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <div className="absolute top-[10%] left-[5%] text-primary-300 opacity-60 animate-float text-6xl">✨</div>
    <div className="absolute top-[20%] right-[10%] text-primary-200 opacity-50 animate-float-delayed text-8xl">🌸</div>
    <div className="absolute top-[60%] left-[8%] text-primary-400 opacity-40 animate-float-reverse text-7xl">💖</div>
    <div className="absolute bottom-[10%] right-[5%] text-primary-300 opacity-60 animate-float text-6xl">🎀</div>
    <div className="absolute top-[40%] left-[80%] text-primary-200 opacity-50 animate-pulse-soft text-5xl">☁️</div>
    <div className="absolute bottom-[30%] left-[20%] text-primary-300 opacity-40 animate-float-delayed text-6xl">🍓</div>
  </div>
);

// --- Sections Components ---

const AboutSection = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8 relative z-10">
    <div className="glass-panel rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
      <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-primary-100 rounded-full border-8 border-white shadow-lg overflow-hidden mb-6">
        {/* 替換圖片: 在 src 屬性放入您的個人照片網址 */}
        <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold heading-cute mb-4">你好，我是吳宓潔</h1>
      <h2 className="text-xl md:text-2xl font-bold text-primary-400 mb-6 flex justify-center items-center gap-2">
        <Sparkles size={24} /> 充滿熱情的海事領域學習者 <Sparkles size={24} />
      </h2>
      <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto font-medium bg-white/50 p-6 rounded-2xl">
        目前就讀於高雄科技大學航海科。我個性活潑開朗，對航海專業與海上實務操作充滿熱忱。曾在基隆港務分公司實習，學習客運服務與現場狀況處理。
        雖然轉換環境對我而言是一項挑戰，但我希望能積極投入專業領域，為未來累積實務能力與經驗。
        期望能將我細心與危機處理的能力，應用在未來的工作中！
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="glass-panel p-8 rounded-3xl">
        <h3 className="text-2xl font-bold heading-cute mb-6 flex items-center gap-3"><User size={28} /> 學歷背景</h3>
        <div className="space-y-6">
          <div className="bg-white/60 p-4 rounded-2xl border-2 border-primary-100">
            <p className="text-primary-500 font-bold text-lg">2023 - 2026</p>
            <p className="font-bold text-xl text-gray-800">國立高雄科技大學</p>
            <p className="text-gray-600 font-medium">航海科</p>
          </div>
          <div className="bg-white/60 p-4 rounded-2xl border-2 border-primary-100">
            <p className="text-primary-500 font-bold text-lg">2022 - 2023</p>
            <p className="font-bold text-xl text-gray-800">國立基隆女子高級中學</p>
          </div>
        </div>
      </div>
      <div className="glass-panel p-8 rounded-3xl">
        <h3 className="text-2xl font-bold heading-cute mb-6 flex items-center gap-3"><Camera size={28} /> 生活剪影</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* 替換圖片: 在 src 屬性放入您的生活照網址 */}
          <img src={lifeImg1} alt="Life 1" className="w-full h-32 object-cover rounded-2xl hover:scale-105 transition-transform border-4 border-white shadow-sm" />
          <img src={lifeImg2} alt="Life 2" className="w-full h-32 object-cover rounded-2xl hover:scale-105 transition-transform border-4 border-white shadow-sm" />
          <img src={lifeImg3} alt="Life 3" className="w-full h-32 object-cover rounded-2xl hover:scale-105 transition-transform border-4 border-white shadow-sm" />
          <img src={lifeImg4} alt="Life 4" className="w-full h-32 object-cover rounded-2xl hover:scale-105 transition-transform border-4 border-white shadow-sm" />
        </div>
      </div>
    </div>
  </motion.div>
);

const ExperienceSection = () => (
  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="space-y-8 relative z-10">
    <h2 className="text-4xl font-extrabold heading-cute text-center mb-10 flex justify-center items-center gap-4">
      <Briefcase size={40} className="text-primary-400" /> 工作經歷
    </h2>
    <div className="glass-panel p-8 md:p-10 rounded-3xl border-l-8 border-l-primary-400">
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 border-b-2 border-primary-100 pb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">臺灣港務股份有限公司 <span className="text-primary-500 font-black">地勤人員</span></h3>
          <p className="text-xl text-gray-600 font-semibold mt-1">基隆港務分公司</p>
        </div>
        <div className="mt-4 md:mt-0 bg-primary-100 text-primary-500 font-bold px-6 py-2 rounded-full inline-block text-lg">
          2024.07 - 2024.09
        </div>
      </div>
      
      <div>
        <ul className="space-y-4 text-gray-700 font-medium text-lg">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 text-2xl">🌸</span>
            <span>擔任登船報到人員，負責登記旅客護照，分發旅客門卡，以及升級旅客房間。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 text-2xl">🌸</span>
            <span>擔任行李托運部門，登記旅客行李，檢查確認行李狀況，視情況填寫行李破損表。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 text-2xl">🌸</span>
            <span>擔任現場人流分配人員，及時疏通分配旅客登記櫃台。</span>
          </li>
        </ul>
      </div>
    </div>
  </motion.div>
);

const InterestsSection = () => (
  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-8 relative z-10">
    <h2 className="text-4xl font-extrabold heading-cute text-center mb-10 flex justify-center items-center gap-4">
      <Heart size={40} className="text-primary-400" /> 興趣與技能
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div className="glass-panel p-8 rounded-3xl">
        <h3 className="text-2xl font-bold text-primary-500 mb-6 border-b-2 border-primary-100 pb-2">🎨 設計美編</h3>
        <ul className="space-y-4">
          <li className="bg-white/70 p-4 rounded-2xl font-bold text-gray-700 shadow-sm flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-primary-400 inline-block"></span> 海報及平面設計
          </li>
          <li className="bg-white/70 p-4 rounded-2xl font-bold text-gray-700 shadow-sm flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-primary-400 inline-block"></span> 圖文宣傳貼文
          </li>
          <li className="bg-white/70 p-4 rounded-2xl font-bold text-gray-700 shadow-sm flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-primary-400 inline-block"></span> 系服設計
          </li>
          <li className="bg-white/70 p-4 rounded-2xl font-bold text-gray-700 shadow-sm flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-primary-400 inline-block"></span> 店家客製明信片製作
          </li>
        </ul>
      </div>

      <div className="glass-panel p-8 rounded-3xl">
        <h3 className="text-2xl font-bold text-primary-500 mb-6 border-b-2 border-primary-100 pb-2">💃 舞蹈與活動</h3>
        <ul className="space-y-4">
          <li className="bg-white/70 p-4 rounded-2xl font-bold text-gray-700 shadow-sm flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-primary-300 inline-block"></span> 街舞 (Hip-hop、Jazz)
          </li>
          <li className="bg-white/70 p-4 rounded-2xl font-bold text-gray-700 shadow-sm flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-primary-300 inline-block"></span> K-pop 翻跳
          </li>
        </ul>
      </div>

      <div className="glass-panel p-8 rounded-3xl md:col-span-2">
        <h3 className="text-2xl font-bold text-primary-500 mb-6 border-b-2 border-primary-100 pb-2 flex justify-between items-center">
          <span>📜 專業證照 (航海)</span>
        </h3>
        <div className="flex flex-wrap gap-4">
          <span className="px-6 py-3 bg-white/80 border-2 border-primary-200 text-gray-800 font-bold rounded-full shadow-sm hover:bg-primary-50 hover:border-primary-400 transition-colors cursor-default">基本安全訓練</span>
          <span className="px-6 py-3 bg-white/80 border-2 border-primary-200 text-gray-800 font-bold rounded-full shadow-sm hover:bg-primary-50 hover:border-primary-400 transition-colors cursor-default">保全意識</span>
          <span className="px-6 py-3 bg-white/80 border-2 border-primary-200 text-gray-800 font-bold rounded-full shadow-sm hover:bg-primary-50 hover:border-primary-400 transition-colors cursor-default">保全職責</span>
          <span className="px-6 py-3 bg-white/80 border-2 border-primary-200 text-gray-800 font-bold rounded-full shadow-sm hover:bg-primary-50 hover:border-primary-400 transition-colors cursor-default">船員手冊</span>
        </div>
      </div>

    </div>
  </motion.div>
);

const TravelSection = ({ onOpenPresentation, onOpenNotebook, onOpenGamma }: { onOpenPresentation: () => void, onOpenNotebook: () => void, onOpenGamma: () => void }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} className="space-y-8 relative z-10">
    <h2 className="text-4xl font-extrabold heading-cute text-center mb-10 flex justify-center items-center gap-4">
      <Plane size={40} className="text-primary-400" /> 清明連假旅遊計畫
    </h2>
    
    <div className="glass-panel p-8 rounded-3xl text-center mb-8 bg-gradient-to-br from-primary-50 to-white">
      <h3 className="text-3xl font-black text-gray-800 mb-4">東京 - 大阪 - 京都 - 名古屋</h3>
      <p className="text-xl text-primary-500 font-bold mb-6">六天五夜 櫻花與奇幻之旅 🌸</p>
      
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
        {/* 會開啟 PDF 轉換而成的畫面 */}
        <button onClick={onOpenPresentation} className="flex flex-col items-center p-6 bg-white rounded-2xl border-4 text-center border-primary-100 hover:border-primary-400 hover:-translate-y-2 transition-all group flex-1">
          <Presentation size={48} className="text-primary-300 mb-4 group-hover:scale-110 transition-transform" />
          <span className="font-bold text-lg text-gray-700">清明連假規劃簡報</span>
          <span className="text-sm text-gray-400 mt-2 flex items-center justify-center gap-1">點擊檢視 <ExternalLink size={14}/></span>
        </button>
        <button onClick={onOpenNotebook} className="flex flex-col items-center p-6 bg-white rounded-2xl border-4 text-center border-primary-100 hover:border-primary-400 hover:-translate-y-2 transition-all group flex-1">
          <Presentation size={48} className="text-green-400 mb-4 group-hover:scale-110 transition-transform" />
          <span className="font-bold text-lg text-gray-700">Notebook LM 版本</span>
          <span className="text-sm text-gray-400 mt-2 flex items-center justify-center gap-1">點擊檢視 <ExternalLink size={14}/></span>
        </button>
        <button onClick={onOpenGamma} className="flex flex-col items-center p-6 bg-white rounded-2xl border-4 text-center border-primary-100 hover:border-primary-400 hover:-translate-y-2 transition-all group flex-1">
          <Presentation size={48} className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
          <span className="font-bold text-lg text-gray-700">Gamma 精美簡報</span>
          <span className="text-sm text-gray-400 mt-2 flex items-center justify-center gap-1">點擊檢視 <ExternalLink size={14}/></span>
        </button>
      </div>
    </div>

    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-primary-200 before:to-primary-100">
      
      {/* 旅遊行程 Timeline */}
      {[
        { day: 'Day 1', route: '台北 ✈️ 東京', desc: '抵達成田/羽田機場，漫步澀谷 Sky 看夕陽，晚餐品嚐敘敘苑。', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&q=80' },
        { day: 'Day 2', route: '東京 🚄 大阪', desc: '搭乘首班新幹線前往大阪，造訪大阪城公園欣賞櫻花，晚上逛道頓堀。', img: travelDay2Img },
        { day: 'Day 3', route: '大阪 USJ', desc: '環球影城全日戰鬥！瑪利歐園區與哈利波特魔法世界。', img: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=500&q=80' },
        { day: 'Day 4', route: '大阪 🚆 京都', desc: '清水寺、二年坂漫步，下午前往嵐山感受古都寧靜與絕美櫻花。', img: 'https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=500&q=80' },
        { day: 'Day 5', route: '大阪 🚄 名古屋', desc: '前往吉卜力公園，進入宮崎駿的奇幻世界。品嚐名古屋名物鰻魚飯。', img: travelDay5Img },
        { day: 'Day 6', route: '名古屋 ✈️ 台北', desc: '東京車站一番街最後衝刺採購伴手禮，滿載而歸。', img: travelDay6Img },
      ].map((item, index) => (
        <div key={item.day} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary-400 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            {index + 1}
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl hover:scale-105 transition-transform">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-xl font-bold bg-primary-100 inline-block px-3 py-1 rounded-full text-primary-500 mb-2">{item.day}</h4>
                <p className="text-lg font-bold text-gray-800 mb-1">{item.route}</p>
                <p className="text-gray-600 font-medium">{item.desc}</p>
              </div>
              <img src={item.img} alt={item.route} className="w-24 h-24 object-cover rounded-xl border-2 border-white shadow-sm" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const PortfolioSection = ({ onOpenVideo }: { onOpenVideo: () => void }) => (
    <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="space-y-12 relative z-10">
      
      {/* AI Videos Section */}
      <div>
        <h2 className="text-4xl font-extrabold heading-cute text-center mb-8 flex justify-center items-center gap-4">
          <Film size={40} className="text-primary-400" /> AI 影片作品
        </h2>
        <div className="max-w-3xl mx-auto flex justify-center">
          <button onClick={onOpenVideo} className="glass-panel p-4 rounded-3xl flex flex-col items-center w-full group hover:border-primary-400 transition-colors text-left border-4 border-transparent hover:shadow-xl">
            <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden relative group-hover:shadow-lg transition-shadow">
              <img src="https://lurl.cc/tNKo9" alt="Video Placeholder" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-6 py-3 bg-white/80 rounded-full font-bold text-primary-500 flex items-center gap-2 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  ▶️ 點擊播放影片
                </span>
              </div>
            </div>
            <p className="mt-4 font-bold text-gray-700 text-lg group-hover:text-primary-500 transition-colors">AI影片生成實驗</p>
          </button>
        </div>
      </div>

      {/* 3D Figures Section */}
      <div>
        <h2 className="text-4xl font-extrabold heading-cute text-center mb-8 flex justify-center items-center gap-4">
          <Box size={40} className="text-primary-400" /> 3D 公仔作品
        </h2>
        <div className="glass-panel p-8 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Figure 1: Self */}
            <div className="bg-white/50 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">個人 3D 公仔模型</h3>
              <div className="flex flex-col items-center">
                <a href="https://studio.tripo3d.ai/3d-model/6c10e7f3-a5ce-4634-92ec-93b1491d2c7d?invite_code=QV2Z54" target="_blank" rel="noreferrer" className="w-full h-80 bg-primary-50 rounded-xl overflow-hidden border-8 border-white shadow-md relative group block">
                   {/* 替換圖片: 放您生成的3D人物照片 */}
                   <img src={avatar3DImg} alt="3D Avatar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                     <span className="px-4 py-2 bg-white/90 rounded-full font-bold text-primary-500 shadow flex items-center gap-2">
                        <Box size={18} /> 檢視 3D 模型
                     </span>
                   </div>
                </a>
              </div>
            </div>

            {/* Figure 2: Pet */}
            <div className="bg-white/50 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">寵物鸚鵡 3D 公仔模型</h3>
              <div className="flex flex-col items-center">
                <a href="https://studio.tripo3d.ai/3d-model/87ac38d9-9889-4e97-9524-2e93d9a4592d?invite_code=QV2Z54" target="_blank" rel="noreferrer" className="w-full h-80 bg-primary-50 rounded-xl overflow-hidden border-8 border-white shadow-md relative group block">
                   {/* 替換圖片: 放您生成的3D鸚鵡照片 */}
                   <img src={parrot3DImg} alt="3D Parrot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                     <span className="px-4 py-2 bg-white/90 rounded-full font-bold text-primary-500 shadow flex items-center gap-2">
                        <Box size={18} /> 檢視 3D 模型
                     </span>
                   </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
);


// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [showPresentation, setShowPresentation] = useState(false);
  const [showNotebookModal, setShowNotebookModal] = useState(false);
  const [showGammaModal, setShowGammaModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const navItems = [
    { id: 'about', label: '關於我', icon: <User size={20} /> },
    { id: 'experience', label: '工作經歷', icon: <Briefcase size={20} /> },
    { id: 'interests', label: '興趣/技能', icon: <Heart size={20} /> },
    { id: 'travel', label: '旅遊計畫', icon: <Map size={20} /> },
    { id: 'portfolio', label: '視覺作品', icon: <Film size={20} /> },
  ];

  return (
    <div className="min-h-screen pb-20 overflow-x-hidden selection:bg-primary-200 selection:text-white">
      <CuteBackground />
      
      {/* Header & Navigation */}
      <header className="sticky top-0 z-50 p-4 md:p-6 flex justify-center">
        <nav className="glass-panel py-3 px-4 md:px-8 rounded-full flex flex-wrap justify-center gap-2 md:gap-4 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === item.id 
                  ? 'bg-primary-400 text-white shadow-lg scale-105' 
                  : 'bg-white/50 text-gray-600 hover:bg-primary-100 hover:text-primary-500'
              }`}
            >
              {item.icon} <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 md:px-8 max-w-5xl mt-8">
        <AnimatePresence mode="wait">
          {activeTab === 'about' && <AboutSection key="about" />}
          {activeTab === 'experience' && <ExperienceSection key="experience" />}
          {activeTab === 'interests' && <InterestsSection key="interests" />}
          {activeTab === 'travel' && <TravelSection key="travel" onOpenPresentation={() => setShowPresentation(true)} onOpenNotebook={() => setShowNotebookModal(true)} onOpenGamma={() => setShowGammaModal(true)} />}
          {activeTab === 'portfolio' && <PortfolioSection key="portfolio" onOpenVideo={() => setShowVideoModal(true)} />}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-center text-primary-400 font-bold pb-8 relative z-10">
        <p>🎀 kittykitty 🎀</p>
      </footer>
      
      {/* Modals */}
      <AnimatePresence>
        {showPresentation && (
          <TravelPresentationModal 
            isOpen={showPresentation} 
            onClose={() => setShowPresentation(false)} 
          />
        )}
        {showNotebookModal && (
          <NotebookPresentationModal
            isOpen={showNotebookModal}
            onClose={() => setShowNotebookModal(false)}
          />
        )}
        {showGammaModal && (
          <GammaPresentationModal
            isOpen={showGammaModal}
            onClose={() => setShowGammaModal(false)}
          />
        )}
        {showVideoModal && (
          <VideoModal
            isOpen={showVideoModal}
            onClose={() => setShowVideoModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
