import React from 'react';

export default function App() {
  // CSS filter to transform any image logo to roughly #eab308 (Gold)
  const goldFilter = {
    filter: 'brightness(0) saturate(100%) invert(77%) sepia(61%) saturate(2283%) hue-rotate(3deg) brightness(97%) contrast(95%)'
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-between p-10 text-center overflow-hidden relative print:p-0">
      {/* Background Glows for Screen (Will be ignored or simplified by most printers) */}
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-yellow-600/10 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-yellow-600/10 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Main Container - Focused for A4 Aspect Ratio */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center flex-grow justify-around space-y-12">
        
        {/* Header Section - Massive Title */}
        <header className="w-full">
          <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter text-[#eab308] drop-shadow-[0_15px_40px_rgba(234,179,8,0.6)] leading-none mb-4">
            متوفر
          </h1>
          <div className="h-2 w-48 bg-[#eab308] mx-auto rounded-full"></div>
        </header>

        {/* Primary Services Section - Large Icons & Bold Labels */}
        <div className="flex flex-row flex-wrap justify-center items-start gap-12 md:gap-20 w-full">
          {/* Snapchat Plus */}
          <div className="flex flex-col items-center gap-6 group">
            <div className="w-32 h-32 md:w-48 md:h-48 border-[6px] border-[#eab308] rounded-[2.5rem] flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.3)] bg-[#eab308]/5">
              <i className="bi bi-snapchat text-7xl md:text-[8rem] text-[#eab308]"></i>
            </div>
            <span className="text-3xl md:text-5xl font-black text-[#eab308] whitespace-nowrap">
              سناب شات بلس
            </span>
          </div>

          {/* Telegram Premium */}
          <div className="flex flex-col items-center gap-6 group">
            <div className="w-32 h-32 md:w-48 md:h-48 border-[6px] border-[#eab308] rounded-[2.5rem] flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.3)] bg-[#eab308]/5">
              <i className="bi bi-telegram text-7xl md:text-[8rem] text-[#eab308]"></i>
            </div>
            <span className="text-3xl md:text-5xl font-black text-[#eab308] whitespace-nowrap">
              تيليجرام مميز
            </span>
          </div>

          {/* PUBG UC */}
          <div className="flex flex-col items-center gap-6 group">
            <div className="w-32 h-32 md:w-48 md:h-48 border-[6px] border-[#eab308] rounded-[2.5rem] flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.3)] bg-[#eab308]/5 p-6 overflow-hidden">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/f6/PUBG_Corporation_Logo.svg" 
                alt="PUBG" 
                className="w-full h-auto object-contain"
                style={goldFilter}
              />
            </div>
            <span className="text-3xl md:text-5xl font-black text-[#eab308] whitespace-nowrap">
              شدات ببجي
            </span>
          </div>
        </div>

        {/* Secondary Services (Brand Grid) */}
        <div className="w-full py-8 border-y-4 border-[#eab308]/20 flex flex-row justify-center items-center gap-12 md:gap-24">
          <div className="flex flex-col items-center">
            <i className="bi bi-tiktok text-6xl md:text-8xl text-[#eab308]"></i>
            <span className="text-2xl md:text-3xl font-black mt-2">شحن عملات</span>
          </div>
          <div className="flex flex-col items-center">
             <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Binance_Logo.svg" 
              alt="USDT" 
              className="h-14 md:h-20 w-auto"
              style={goldFilter}
            />
            <span className="text-2xl md:text-3xl font-black mt-2">شحن USDT</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="bi bi-facebook text-6xl md:text-8xl text-[#eab308]"></i>
            <span className="text-2xl md:text-3xl font-black mt-2">اعلانات ممولة</span>
          </div>
        </div>

        {/* Slogan - High Impact */}
        <div className="bg-[#eab308] text-[#0a0a0a] px-10 py-4 rounded-full">
          <p className="text-3xl md:text-5xl font-black tracking-widest">
            أسرع خدمة شحن وبأسعار تنافسية
          </p>
        </div>

        {/* Contact Footer - Massive Visibility */}
        <footer className="w-full flex flex-col items-center space-y-8">
          <div className="w-full max-w-4xl bg-gradient-to-r from-[#eab308] via-[#fbbf24] to-[#eab308] p-1 rounded-[3rem] shadow-[0_20px_60px_rgba(234,179,8,0.5)]">
            <div className="bg-[#0a0a0a] rounded-[2.8rem] py-8 px-12 flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* WhatsApp Icon & Label */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-[#eab308] rounded-3xl flex items-center justify-center">
                  <i className="bi bi-whatsapp text-5xl md:text-7xl text-[#0a0a0a]"></i>
                </div>
                <div className="text-right">
                  <p className="text-xl md:text-2xl font-black text-[#eab308] opacity-70 uppercase tracking-widest">واتساب</p>
                  <p className="text-5xl md:text-8xl font-black text-[#eab308] leading-none font-mono">0928102731</p>
                </div>
              </div>

              {/* Snapchat Handle */}
              <div className="flex items-center gap-4 border-r-4 border-[#eab308]/20 pr-8 hidden md:flex">
                <i className="bi bi-snapchat text-5xl text-[#eab308]"></i>
                <div className="text-right">
                  <p className="text-xl font-black text-[#eab308] opacity-70">سناب شات</p>
                  <p className="text-4xl md:text-6xl font-black text-[#eab308]">nuxxop</p>
                </div>
              </div>
              
              {/* Mobile snap handle visibility */}
              <div className="md:hidden flex flex-col items-center">
                 <p className="text-3xl font-black text-[#eab308]">سناب شات: nuxxop</p>
              </div>

            </div>
          </div>

          {/* Location - Final Large Text */}
          <div className="flex items-center gap-4 text-[#eab308] pb-6">
            <i className="bi bi-geo-alt-fill text-4xl md:text-6xl animate-bounce"></i>
            <span className="text-4xl md:text-6xl font-black">
              البيضاء - شارع الجامعة الجديدة
            </span>
          </div>
        </footer>

      </div>

      {/* Aesthetic Border Frame for the Poster */}
      <div className="fixed inset-4 border-[1px] border-[#eab308]/20 pointer-events-none rounded-[3rem]"></div>
    </div>
  );
}
