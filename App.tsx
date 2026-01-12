import React from 'react';

export default function App() {
  // CSS filter to transform any image logo to roughly #eab308 (Gold)
  const goldFilter = {
    filter: 'brightness(0) saturate(100%) invert(77%) sepia(61%) saturate(2283%) hue-rotate(3deg) brightness(97%) contrast(95%)'
  };

  return (
    <div className="h-screen bg-[#0a0a0a] flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 text-center overflow-hidden relative print:p-0 print:h-[297mm] print:w-[210mm] mx-auto">
      {/* Background Glows */}
      <div className="fixed top-[-5%] right-[-5%] w-[300px] h-[300px] bg-yellow-600/10 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
      <div className="fixed bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-yellow-600/10 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Main Wrapper - Forced to fill height without scrolling */}
      <div className="w-full max-w-5xl h-full flex flex-col items-center justify-between space-y-4">
        
        {/* 1. Header Section - 15% height approx */}
        <header className="w-full flex flex-col items-center">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter text-[#eab308] drop-shadow-[0_10px_20px_rgba(234,179,8,0.5)] leading-none mb-2">
            متوفر
          </h1>
          <div className="h-1.5 w-32 md:w-48 bg-[#eab308] rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
        </header>

        {/* 2. Primary Services Section - 25% height approx */}
        <div className="grid grid-cols-3 gap-4 md:gap-10 w-full px-2">
          {/* Snapchat Plus */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 border-[4px] border-[#eab308] rounded-[1.5rem] flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.2)] bg-[#eab308]/5">
              <i className="bi bi-snapchat text-5xl sm:text-6xl md:text-7xl text-[#eab308]"></i>
            </div>
            <span className="text-xs sm:text-xl md:text-3xl font-black text-[#eab308] whitespace-nowrap">
              سناب شات بلس
            </span>
          </div>

          {/* Telegram Premium */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 border-[4px] border-[#eab308] rounded-[1.5rem] flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.2)] bg-[#eab308]/5">
              <i className="bi bi-telegram text-5xl sm:text-6xl md:text-7xl text-[#eab308]"></i>
            </div>
            <span className="text-xs sm:text-xl md:text-3xl font-black text-[#eab308] whitespace-nowrap">
              تيليجرام مميز
            </span>
          </div>

          {/* PUBG UC */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 border-[4px] border-[#eab308] rounded-[1.5rem] flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.2)] bg-[#eab308]/5 p-4 overflow-hidden">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/f6/PUBG_Corporation_Logo.svg" 
                alt="PUBG" 
                className="w-full h-auto object-contain"
                style={goldFilter}
              />
            </div>
            <span className="text-xs sm:text-xl md:text-3xl font-black text-[#eab308] whitespace-nowrap">
              شدات ببجي
            </span>
          </div>
        </div>

        {/* 3. Combined Middle Container - 30% height approx */}
        <div className="w-full py-4 md:py-6 border-y-[3px] border-[#eab308]/30 bg-[#eab308]/5 flex flex-col justify-around flex-grow max-h-[35%] rounded-lg">
          
          {/* Charging Services Row */}
          <div className="grid grid-cols-3 gap-2 w-full px-4">
            <div className="flex flex-col items-center">
               <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Binance_Logo.svg" alt="USDT" className="h-6 sm:h-8 md:h-12 w-auto mb-1" style={goldFilter} />
               <span className="text-[10px] sm:text-base md:text-xl font-black text-[#eab308]">شحن USDT</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="bi bi-tiktok text-2xl sm:text-3xl md:text-4xl text-[#eab308] mb-1"></i>
              <span className="text-[10px] sm:text-base md:text-xl font-black text-[#eab308]">شحن عملات</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="bi bi-facebook text-2xl sm:text-3xl md:text-4xl text-[#eab308] mb-1"></i>
              <span className="text-[10px] sm:text-base md:text-xl font-black text-[#eab308]">اعلانات ممولة</span>
            </div>
          </div>

          {/* Separator Line */}
          <div className="w-3/4 mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#eab308]/40 to-transparent my-2"></div>

          {/* Payments Row */}
          <div className="space-y-3">
            <h2 className="text-sm sm:text-lg md:text-2xl font-black text-[#eab308] opacity-80 tracking-widest leading-none">
              نقبل الدفع بـ
            </h2>
            <div className="grid grid-cols-4 gap-2 px-4 items-center">
              <div className="flex flex-col items-center">
                <img src="https://masarat.ly/ms_uploads/2023/08/yussor-white.svg" alt="Yussor" className="h-6 sm:h-8 md:h-10 w-auto" style={goldFilter} />
                <span className="text-[8px] sm:text-xs md:text-sm font-bold text-[#eab308] mt-1">يُسر باي</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://masarat.ly/ms_uploads/2025/10/OnePay-Full-Logo.svg" alt="OnePay" className="h-6 sm:h-8 md:h-10 w-auto" style={goldFilter} />
                <span className="text-[8px] sm:text-xs md:text-sm font-bold text-[#eab308] mt-1">وان باي</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://masarat.ly/ms_uploads/2023/08/%D9%85%D8%B5%D8%B1%D9%81%D9%8A-%D8%A8%D8%A7%D9%8A-1.svg" alt="Masrafi Pay" className="h-6 sm:h-8 md:h-10 w-auto" style={goldFilter} />
                <span className="text-[8px] sm:text-xs md:text-sm font-bold text-[#eab308] mt-1">مصرفي باي</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://d.top4top.io/p_3663s45sv0.png" alt="Libyana" className="h-6 sm:h-8 md:h-10 w-auto" style={goldFilter} />
                <span className="text-[8px] sm:text-xs md:text-sm font-bold text-[#eab308] mt-1">رصيد ليبيانا</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Slogan - Fixed size */}
        <div className="bg-[#eab308] text-[#0a0a0a] px-6 py-2 rounded-full shadow-[0_5px_15px_rgba(234,179,8,0.3)] shrink-0">
          <p className="text-sm sm:text-lg md:text-2xl font-black tracking-widest whitespace-nowrap">
            أسرع خدمة شحن وبأسعار تنافسية
          </p>
        </div>

        {/* 5. Footer - 20% height approx */}
        <footer className="w-full flex flex-col items-center space-y-4 shrink-0">
          <div className="w-full bg-gradient-to-r from-[#eab308] via-[#fbbf24] to-[#eab308] p-[2px] rounded-3xl shadow-[0_5px_20px_rgba(234,179,8,0.3)]">
            <div className="bg-[#0a0a0a] rounded-[1.4rem] py-3 px-6 flex items-center justify-between gap-4">
              
              {/* WhatsApp Item */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#eab308] rounded-2xl flex items-center justify-center">
                  <i className="bi bi-whatsapp text-2xl md:text-4xl text-[#0a0a0a]"></i>
                </div>
                <div className="text-right">
                  <p className="text-[8px] md:text-sm font-black text-[#eab308] opacity-70 leading-none">واتساب</p>
                  <p className="text-xl md:text-4xl font-black text-[#eab308] leading-none font-mono">0928102731</p>
                </div>
              </div>

              {/* Snapchat Item */}
              <div className="flex items-center gap-2 border-r-[1px] border-[#eab308]/30 pr-4">
                <div className="text-right">
                  <p className="text-[8px] md:text-sm font-black text-[#eab308] opacity-70 leading-none">سناب شات</p>
                  <p className="text-lg md:text-3xl font-black text-[#eab308]">nuxxop</p>
                </div>
                <i className="bi bi-snapchat text-xl md:text-3xl text-[#eab308]"></i>
              </div>

            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-[#eab308]">
            <i className="bi bi-geo-alt-fill text-xl md:text-3xl animate-bounce"></i>
            <span className="text-xs sm:text-lg md:text-2xl font-black">
              البيضاء - شارع الجامعة الجديدة
            </span>
          </div>
        </footer>

      </div>

      {/* Frame Border Decor */}
      <div className="fixed inset-3 border-[1px] border-[#eab308]/20 pointer-events-none rounded-3xl hidden sm:block"></div>
    </div>
  );
}
