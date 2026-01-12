import React from 'react';

export default function App() {
  // CSS filter to transform any image logo to roughly #eab308 (Gold)
  const goldFilter = {
    filter: 'brightness(0) saturate(100%) invert(77%) sepia(61%) saturate(2283%) hue-rotate(3deg) brightness(97%) contrast(95%)'
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-between p-4 sm:p-6 md:p-10 text-center overflow-x-hidden relative print:p-0">
      {/* Background Glows for Screen */}
      <div className="fixed top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-yellow-600/10 blur-[80px] md:blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-yellow-600/10 blur-[80px] md:blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Main Container */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center flex-grow justify-around space-y-8 md:space-y-12">
        
        {/* Header Section */}
        <header className="w-full mt-4 md:mt-0">
          <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter text-[#eab308] drop-shadow-[0_10px_30px_rgba(234,179,8,0.6)] leading-none mb-2 md:mb-4">
            متوفر
          </h1>
          <div className="h-1.5 md:h-2 w-24 md:w-48 bg-[#eab308] mx-auto rounded-full"></div>
        </header>

        {/* Primary Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-20 w-full px-2">
          {/* Snapchat Plus */}
          <div className="flex flex-col items-center gap-4 md:gap-6 group">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 border-[4px] md:border-[6px] border-[#eab308] rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.2)] bg-[#eab308]/5 transition-transform hover:scale-105">
              <i className="bi bi-snapchat text-5xl sm:text-6xl md:text-[8rem] text-[#eab308]"></i>
            </div>
            <span className="text-2xl sm:text-3xl md:text-5xl font-black text-[#eab308]">
              سناب شات بلس
            </span>
          </div>

          {/* Telegram Premium */}
          <div className="flex flex-col items-center gap-4 md:gap-6 group">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 border-[4px] md:border-[6px] border-[#eab308] rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.2)] bg-[#eab308]/5 transition-transform hover:scale-105">
              <i className="bi bi-telegram text-5xl sm:text-6xl md:text-[8rem] text-[#eab308]"></i>
            </div>
            <span className="text-2xl sm:text-3xl md:text-5xl font-black text-[#eab308]">
              تيليجرام مميز
            </span>
          </div>

          {/* PUBG UC */}
          <div className="flex flex-col items-center gap-4 md:gap-6 group sm:col-span-2 lg:col-span-1">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 border-[4px] md:border-[6px] border-[#eab308] rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.2)] bg-[#eab308]/5 p-4 md:p-6 overflow-hidden transition-transform hover:scale-105">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/f6/PUBG_Corporation_Logo.svg" 
                alt="PUBG" 
                className="w-full h-auto object-contain"
                style={goldFilter}
              />
            </div>
            <span className="text-2xl sm:text-3xl md:text-5xl font-black text-[#eab308]">
              شدات ببجي
            </span>
          </div>
        </div>

        {/* Secondary Services Section */}
        <div className="w-full py-6 md:py-8 border-y-2 md:border-y-4 border-[#eab308]/20 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 px-2">
          <div className="flex flex-col items-center">
            <i className="bi bi-tiktok text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#eab308]"></i>
            <span className="text-lg sm:text-xl md:text-3xl font-black mt-2">شحن عملات</span>
          </div>
          <div className="flex flex-col items-center">
             <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Binance_Logo.svg" 
              alt="USDT" 
              className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto"
              style={goldFilter}
            />
            <span className="text-lg sm:text-xl md:text-3xl font-black mt-2">شحن USDT</span>
          </div>
          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <i className="bi bi-facebook text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#eab308]"></i>
            <span className="text-lg sm:text-xl md:text-3xl font-black mt-2">اعلانات ممولة</span>
          </div>
        </div>

        {/* Slogan */}
        <div className="bg-[#eab308] text-[#0a0a0a] px-6 md:px-10 py-3 md:py-4 rounded-full w-fit mx-auto shadow-lg">
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black tracking-tight md:tracking-widest">
            أسرع خدمة شحن وبأسعار تنافسية
          </p>
        </div>

        {/* Contact Footer */}
        <footer className="w-full flex flex-col items-center space-y-6 md:space-y-8 pb-4">
          <div className="w-full max-w-5xl bg-gradient-to-r from-[#eab308] via-[#fbbf24] to-[#eab308] p-0.5 md:p-1 rounded-[1.5rem] md:rounded-[3rem] shadow-[0_10px_40px_rgba(234,179,8,0.4)]">
            <div className="bg-[#0a0a0a] rounded-[1.4rem] md:rounded-[2.8rem] py-6 md:py-8 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
              
              {/* WhatsApp */}
              <div className="flex items-center gap-4 md:gap-6 w-full lg:w-auto justify-center lg:justify-start">
                <div className="w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-[#eab308] rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-whatsapp text-3xl md:text-5xl lg:text-7xl text-[#0a0a0a]"></i>
                </div>
                <div className="text-right">
                  <p className="text-sm md:text-lg lg:text-2xl font-black text-[#eab308] opacity-70 uppercase tracking-widest leading-none mb-1">واتساب</p>
                  <p className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-[#eab308] leading-none font-mono">0928102731</p>
                </div>
              </div>

              {/* Snapchat Details */}
              <div className="flex items-center gap-4 lg:border-r-2 lg:border-[#eab308]/20 lg:pr-8 w-full lg:w-auto justify-center lg:justify-end">
                <i className="bi bi-snapchat text-3xl md:text-5xl text-[#eab308] hidden sm:block"></i>
                <div className="text-center lg:text-right">
                  <p className="text-sm md:text-lg font-black text-[#eab308] opacity-70 leading-none mb-1">سناب شات</p>
                  <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-[#eab308]">nuxxop</p>
                </div>
              </div>

            </div>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-3 md:gap-4 text-[#eab308] px-4">
            <i className="bi bi-geo-alt-fill text-3xl md:text-5xl lg:text-6xl animate-bounce flex-shrink-0"></i>
            <span className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-black leading-tight">
              البيضاء - شارع الجامعة الجديدة
            </span>
          </div>
        </footer>

      </div>

      {/* Frame Border - Responsive Thickness */}
      <div className="fixed inset-2 md:inset-4 border-[1px] border-[#eab308]/20 pointer-events-none rounded-[1.5rem] md:rounded-[3rem] hidden sm:block"></div>
    </div>
  );
}
