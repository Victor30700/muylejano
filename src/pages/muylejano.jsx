import { useRef, useState, useEffect } from "react";

// Componente de corazones flotantes mejorado
const FloatingHearts = () => {
  return (
    <div className="floating-hearts">
      {[...Array(12)].map((_, i) => (
        <div key={i} className={`heart heart-${i + 1}`}>
          💖
        </div>
      ))}
    </div>
  );
};

// Componente de fondo animado romántico
const RomanticBackground = () => {
  return (
    <div className="romantic-background">
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
      <div className="gradient-orb orb-4"></div>
      <div className="sparkles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`sparkle sparkle-${i + 1}`}>✨</div>
        ))}
      </div>
    </div>
  );
};

// Componente principal mejorado
export default function MuyLejano() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFercochi, setShowFercochi] = useState(true);
  const [isImageTalking, setIsImageTalking] = useState(false);
  const audioRef = useRef(null);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const audios = [
    "/audios/audio1.mp3", // índice 0 - habilita imagen fercochi
    "/audios/audio2.mp3", // índice 1 - habilita imagen yo1
    "/audios/audio3.mp3", // índice 2 - habilita imagen fercochi
    "/audios/audio4.mp3", // índice 3 - habilita imagen yo1
    "/audios/audio5.mp3", // índice 4 - habilita imagen fercochi
    "/audios/audio6.mp3", // índice 5 - habilita imagen yo1
    "/audios/audio7.mp3", // índice 6 - habilita imagen fercochi
    "/audios/audio8.mp3", // índice 7 - habilita imagen yo1
    "/audios/audio9.mp3", // índice 8 - habilita imagen fercochi
    "/audios/audio10.mp3", // índice 9 - habilita imagen yo1
    "/audios/audio11.mp3", // índice 10 - habilita imagen fercochi
    "/audios/audio12.mp3", // índice 11 - habilita imagen yo1
    "/audios/deveritas.mp3", // índice 12 - habilita imagen fercochi
    "/audios/no.mp3", // índice 13 - habilita imagen yo1
    "/audios/audio13.mp3", // índice 14 - habilita ambas imagenes (fercochi y yo1)
    "/audios/audio14.mp3", // índice 15 - habilita ambas imagenes (fercochi y yo1)
    "/audios/audio15.mp3", // índice 16 - habilita ambas imagenes (fercochi y yo1)
    "/audios/audio16.mp3", // índice 17 - habilita ambas imagenes (fercochi y yo1)
    "/audios/audiofinal.mp3", // índice 18 - habilita pantalla final con rosas amarillas y mensaje
  ];

  const bothImageIndices = [14, 15, 16, 17]; // audio13, audio14, audio15, audio16
  const finalIndex = audios.length - 1; // índice 18 para audiofinal
  const isFinal = currentIndex === finalIndex;
  const isBothImages = bothImageIndices.includes(currentIndex);

  // Función para determinar qué imagen mostrar basándose en el índice
  const shouldShowFercochi = (index) => {
    // Los índices pares (0,2,4,6,8,10,12) muestran fercochi
    // Los índices impares (1,3,5,7,9,11,13) muestran yo1
    return index % 2 === 0;
  };

  useEffect(() => {
    if (isFinal && !isPlaying) {
      setTimeout(() => setShowWhatsApp(true), 1000);
    }
  }, [isFinal, isPlaying]);

  const playAudio = (index) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = audios[index];
    audio.load();
    audio.play().catch((err) => {
      console.warn("No se pudo reproducir el audio:", err);
    });

    setIsPlaying(true);
    setIsImageTalking(true);

    audio.onended = () => {
      setIsPlaying(false);
      setIsImageTalking(false);
      
      // Corregir el problema del audio 16 infinito
      if (index === 17) { // audio16.mp3 (índice 17)
        // Pasar al audio final después de que termine audio16
        setTimeout(() => {
          setCurrentIndex(18); // Ir al audiofinal
        }, 500);
      } else if (index === 18) { // audiofinal.mp3
        // No hacer nada automático, dejar que el usuario interactúe
      } else {
        // Para todos los otros audios, continuar normalmente
        setCurrentIndex((prev) => prev + 1);
      }
    };
  };

  const handlePlay = () => {
    if (isPlaying || currentIndex > finalIndex) return;

    // Solo cambiar la imagen si no es final ni ambas imágenes
    if (!isFinal && !isBothImages) {
      setShowFercochi(shouldShowFercochi(currentIndex));
    }

    playAudio(currentIndex);
  };

  const buttonLabel = () => {
    if (currentIndex > finalIndex) return "✅ Todos reproducidos";
    if (isFinal && !isPlaying) return "🎵 Reproducir mensaje final";
    if (isPlaying) return "💕 Reproduciendo...";
    return "▶️ Reproducir siguiente";
  };

  return (
    <div className="home-root">
      <RomanticBackground />
      <FloatingHearts />
      <div className="container">
        <h1 className="title">
          💝 Mi sorpresa para ti - Muy muy Lejano 💝
        </h1>

        <div className="stage">
          {isBothImages ? (
            <div key={`both-${currentIndex}`} className="both-images">
              <img
                src="/fercochi.WebP"
                alt="Fercochi"
                className={`side-image left ${isImageTalking ? 'talking' : ''}`}
              />
              <img
                src="/yo1.WebP"
                alt="Yo1"
                className={`side-image right ${isImageTalking ? 'talking' : ''}`}
              />
            </div>
          ) : isFinal ? (
            <div key="final-screen" className="final-screen">
              <div className="yellow-roses-wrap" aria-hidden="true">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className={`yellow-rose yr${i + 1}`}>
                    🌻
                  </div>
                ))}
              </div>

              <div className="final-message">
                <h2>💕 Sal afuera, la sorpresa llegó 💕</h2>
                <p className="final-sub">
                  <strong>"Cochinita 🐽 de mi corazón ❤️"</strong>
                </p>
                <p className="romantic-text">
                  Eres la luz que ilumina mis días <br/>
                  🌞
                </p>
              </div>

              {showWhatsApp && (
                <a
                  className="whatsapp-fab"
                  href={`https://wa.me/59167679528?text=${encodeURIComponent("Ya salgo cochinito, ya miré todo el detalle web ❤️")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ir al chat de WhatsApp"
                >
                  💬 Envíame un mensaje presiona esto
                </a>
              )}
            </div>
          ) : (
            <div key={`single-${showFercochi ? "fer" : "yo"}-${currentIndex}`} className="single-image-wrap">
              <img
                src={showFercochi ? "/fercochi.WebP" : "/yo1.WebP"}
                alt={showFercochi ? "Fercochi" : "Yo1"}
                className={`single-image ${isImageTalking ? 'talking' : ''}`}
              />
            </div>
          )}
        </div>

        <div className="controls">
          <button
            onClick={handlePlay}
            disabled={isPlaying || currentIndex > finalIndex}
            className="play-button"
          >
            {buttonLabel()}
          </button>

          <div className="status">
            <span>Audio: </span>
            <strong>
              {currentIndex <= finalIndex ? `${currentIndex + 1} de ${audios.length}` : "Completado"}
            </strong>
            <span className="dot">{isPlaying ? " 💕 reproduciendo" : ""}</span>
          </div>
        </div>

        <audio ref={audioRef} preload="auto" />
      </div>

      <style jsx>{`
        * { 
          box-sizing: border-box; 
          margin: 0; 
          padding: 0; 
        }
        
        html, body, #root { 
          height: 100%; 
        }
        
        body {
          font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;
          color: #fff;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
          background: #1a1a2e;
        }

        /* Fondo romántico animado */
        .romantic-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: linear-gradient(-45deg, #ff9a9e, #fecfef, #fecfef, #ff9a9e);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.7;
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255, 154, 158, 0.8) 0%, rgba(254, 206, 239, 0.4) 70%);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(254, 206, 239, 0.6) 0%, rgba(255, 154, 158, 0.3) 70%);
          top: 60%;
          right: 10%;
          animation-delay: 7s;
        }

        .orb-3 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(255, 154, 158, 0.7) 0%, rgba(254, 206, 239, 0.2) 70%);
          bottom: 20%;
          left: 30%;
          animation-delay: 14s;
        }

        .orb-4 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(254, 206, 239, 0.8) 0%, rgba(255, 154, 158, 0.3) 70%);
          top: 30%;
          right: 40%;
          animation-delay: 21s;
        }

        .sparkles {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .sparkle {
          position: absolute;
          animation: sparkleFloat 8s linear infinite;
          opacity: 0;
        }

        .sparkle-1 { left: 10%; animation-delay: 0s; font-size: 10px; }
        .sparkle-2 { left: 20%; animation-delay: 1s; font-size: 14px; }
        .sparkle-3 { left: 30%; animation-delay: 2s; font-size: 8px; }
        .sparkle-4 { left: 40%; animation-delay: 3s; font-size: 12px; }
        .sparkle-5 { left: 50%; animation-delay: 4s; font-size: 15px; }
        .sparkle-6 { left: 60%; animation-delay: 5s; font-size: 9px; }
        .sparkle-7 { left: 70%; animation-delay: 6s; font-size: 13px; }
        .sparkle-8 { left: 80%; animation-delay: 7s; font-size: 11px; }
        .sparkle-9 { left: 90%; animation-delay: 0.5s; font-size: 14px; }
        .sparkle-10 { left: 15%; animation-delay: 1.5s; font-size: 10px; }
        .sparkle-11 { left: 25%; animation-delay: 2.5s; font-size: 12px; }
        .sparkle-12 { left: 35%; animation-delay: 3.5s; font-size: 15px; }
        .sparkle-13 { left: 45%; animation-delay: 4.5s; font-size: 9px; }
        .sparkle-14 { left: 55%; animation-delay: 5.5s; font-size: 13px; }
        .sparkle-15 { left: 65%; animation-delay: 6.5s; font-size: 11px; }
        .sparkle-16 { left: 75%; animation-delay: 7.5s; font-size: 14px; }
        .sparkle-17 { left: 85%; animation-delay: 0.8s; font-size: 10px; }
        .sparkle-18 { left: 95%; animation-delay: 1.8s; font-size: 12px; }
        .sparkle-19 { left: 5%; animation-delay: 2.8s; font-size: 15px; }
        .sparkle-20 { left: 65%; animation-delay: 3.8s; font-size: 9px; }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(30px) rotate(240deg); }
        }

        @keyframes sparkleFloat {
          0% {
            bottom: -10%;
            transform: translateX(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            bottom: 110%;
            transform: translateX(100px) scale(0);
            opacity: 0;
          }
        }

        /* Corazones flotantes mejorados */
        .floating-hearts {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .heart {
          position: absolute;
          animation: floatHeart 12s linear infinite;
          opacity: 0;
        }

        .heart-1 { left: 5%; animation-delay: 0s; font-size: 22px; }
        .heart-2 { left: 15%; animation-delay: 2s; font-size: 18px; }
        .heart-3 { left: 25%; animation-delay: 4s; font-size: 24px; }
        .heart-4 { left: 35%; animation-delay: 1s; font-size: 20px; }
        .heart-5 { left: 45%; animation-delay: 3s; font-size: 16px; }
        .heart-6 { left: 55%; animation-delay: 5s; font-size: 23px; }
        .heart-7 { left: 65%; animation-delay: 7s; font-size: 19px; }
        .heart-8 { left: 75%; animation-delay: 6s; font-size: 21px; }
        .heart-9 { left: 85%; animation-delay: 8s; font-size: 17px; }
        .heart-10 { left: 95%; animation-delay: 9s; font-size: 25px; }
        .heart-11 { left: 10%; animation-delay: 10s; font-size: 20px; }
        .heart-12 { left: 90%; animation-delay: 11s; font-size: 18px; }

        @keyframes floatHeart {
          0% {
            bottom: -5%;
            transform: translateX(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            bottom: 105%;
            transform: translateX(50px) rotate(360deg) scale(1.2);
            opacity: 0;
          }
        }

        /* Aplicación principal mejorada */
        .home-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
        }

        .container {
          width: 100%;
          max-width: 900px;
          text-align: center;
          z-index: 10;
          position: relative;
        }

        .title {
          font-size: 2.2rem;
          margin-bottom: 30px;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
          font-family: 'Playfair Display', serif;
          letter-spacing: 1px;
          background: linear-gradient(45deg, #fff, #ffb6c1, #fff);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShimmer 3s ease-in-out infinite;
        }

        @keyframes textShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .stage {
          width: 100%;
          height: 500px;
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: 30px;
          position: relative;
          padding: 20px;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .single-image-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
        }

        .single-image {
          width: auto;
          height: 90%;
          max-width: 90%;
          border-radius: 20px;
          object-fit: contain;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          border: 3px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .single-image.talking {
          animation: imageTalk 0.4s ease-in-out infinite;
        }

        @keyframes imageTalk {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }

        .both-images {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          padding: 10px;
        }

        .side-image {
          width: auto;
          height: 85%;
          max-width: 48%;
          border-radius: 20px;
          object-fit: contain;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          border: 3px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .side-image.talking {
          animation: imageTalkSide 0.4s ease-in-out infinite;
        }

        @keyframes imageTalkSide {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.02); }
        }

        .controls {
          margin-top: 25px;
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .play-button {
          background: linear-gradient(135deg, #ff6b6b, #ff8787);
          border: none;
          padding: 18px 45px;
          border-radius: 50px;
          font-weight: bold;
          font-size: 1.2rem;
          cursor: pointer;
          color: white;
          box-shadow: 0 15px 50px rgba(255, 107, 107, 0.4);
          transition: all 0.3s ease;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          animation: buttonPulse 2s ease-in-out infinite;
        }

        @keyframes buttonPulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 15px 50px rgba(255, 107, 107, 0.4);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 20px 60px rgba(255, 107, 107, 0.6);
          }
        }

        .play-button:hover {
          transform: scale(1.1);
          box-shadow: 0 20px 60px rgba(255, 107, 107, 0.6);
        }

        .play-button:active { 
          transform: scale(1.05); 
        }
        
        .play-button:disabled { 
          opacity: 0.6; 
          cursor: not-allowed; 
          transform: scale(1);
          animation: none;
        }

        .status {
          color: #fff;
          font-size: 1.2rem;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.1);
          padding: 10px 20px;
          border-radius: 25px;
          backdrop-filter: blur(10px);
        }

        .status strong {
          color: #ffd700;
        }

        /* Pantalla final mejorada */
        .final-screen {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 30px;
        }

        .final-message {
          z-index: 40;
          text-align: center;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 35px 45px;
          border-radius: 25px;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
          margin-top: 20px;
          border: 2px solid rgba(255, 182, 193, 0.5);
          animation: finalMessageAppear 1s ease-out;
        }

        @keyframes finalMessageAppear {
          0% {
            opacity: 0;
            transform: scale(0.8) rotateY(90deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }
        }

        .final-message h2 {
          color: #d63384;
          font-size: 2.2rem;
          margin-bottom: 15px;
          font-family: 'Playfair Display', serif;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .final-message .final-sub {
          color: #764ba2;
          font-size: 1.6rem;
          font-style: italic;
          margin-bottom: 15px;
        }

        .romantic-text {
          color: #666;
          font-size: 1.2rem;
          line-height: 1.6;
          margin-top: 10px;
          font-style: italic;
        }

        .whatsapp-fab {
          position: fixed;
          right: 30px;
          bottom: 30px;
          z-index: 150;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: white;
          padding: 18px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.2rem;
          box-shadow: 0 20px 60px rgba(37, 211, 102, 0.5);
          display: flex;
          align-items: center;
          gap: 10px;
          animation: whatsappPulse 2s ease-in-out infinite;
        }

        @keyframes whatsappPulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 20px 60px rgba(37, 211, 102, 0.5);
          }
          50% { 
            transform: scale(1.1);
            box-shadow: 0 25px 70px rgba(37, 211, 102, 0.7);
          }
        }

        .whatsapp-fab:hover {
          transform: scale(1.2);
          box-shadow: 0 25px 70px rgba(37, 211, 102, 0.7);
        }

        /* Animación de rosas amarillas mejorada */
        .yellow-roses-wrap {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 20;
          overflow: hidden;
        }

        .yellow-rose {
          position: absolute;
          font-size: 35px;
          opacity: 0;
          filter: drop-shadow(0 8px 25px rgba(255, 215, 0, 0.4));
        }

        .yr1 { left: 5%; bottom: -60px; animation: roseFloat 12s linear infinite 0s; }
        .yr2 { left: 10%; bottom: -40px; animation: roseFloat 10s linear infinite 1s; font-size: 40px; }
        .yr3 { left: 20%; bottom: -50px; animation: roseFloat 11s linear infinite 0.5s; }
        .yr4 { left: 30%; bottom: -30px; animation: roseFloat 13s linear infinite 1.5s; font-size: 38px; }
        .yr5 { left: 40%; bottom: -60px; animation: roseFloat 12s linear infinite 0.3s; }
        .yr6 { left: 50%; bottom: -40px; animation: roseFloat 9s linear infinite 2s; font-size: 42px; }
        .yr7 { left: 60%; bottom: -55px; animation: roseFloat 10.5s linear infinite 0.8s; }
        .yr8 { left: 70%; bottom: -35px; animation: roseFloat 11.5s linear infinite 1.2s; font-size: 36px; }
        .yr9 { left: 80%; bottom: -60px; animation: roseFloat 10s linear infinite 0.6s; }
        .yr10 { left: 85%; bottom: -45px; animation: roseFloat 9.5s linear infinite 1.8s; font-size: 39px; }
        .yr11 { left: 15%; bottom: -70px; animation: roseFloat 12.5s linear infinite 0.2s; }
        .yr12 { left: 45%; bottom: -65px; animation: roseFloat 11s linear infinite 1.6s; font-size: 41px; }
        .yr13 { left: 75%; bottom: -50px; animation: roseFloat 10.2s linear infinite 0.9s; }
        .yr14 { left: 25%; bottom: -55px; animation: roseFloat 11.8s linear infinite 2.2s; font-size: 37px; }
        .yr15 { left: 90%; bottom: -40px; animation: roseFloat 9.8s linear infinite 1.4s; }

        @keyframes roseFloat {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
            transform: scale(1);
          }
          50% {
            transform: translateY(-350px) rotate(180deg) scale(1.2);
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-700px) rotate(360deg) scale(0.6);
            opacity: 0;
          }
        }

        /* Diseño responsivo mejorado */
        @media (max-width: 768px) {
          .title {
            font-size: 1.8rem;
            padding: 0 15px;
            margin-bottom: 25px;
          }
          
          .stage {
            height: 420px;
            padding: 15px;
            border-radius: 20px;
          }
          
          .single-image {
            height: 85%;
            max-width: 95%;
          }
          
          .side-image {
            height: 80%;
            max-width: 49%;
          }
          
          .both-images {
            gap: 10px;
          }
          
          .play-button {
            padding: 15px 35px;
            font-size: 1.1rem;
          }
          
          .status {
            font-size: 1.1rem;
            padding: 8px 18px;
          }
          
          .final-message {
            padding: 25px 30px;
            margin: 15px;
          }
          
          .final-message h2 {
            font-size: 1.8rem;
          }
          
          .final-message .final-sub {
            font-size: 1.3rem;
          }
          
          .romantic-text {
            font-size: 1.1rem;
          }
          
          .whatsapp-fab {
            right: 20px;
            bottom: 20px;
            padding: 15px 25px;
            font-size: 1.1rem;
          }

          .yellow-rose {
            font-size: 30px;
          }

          .gradient-orb {
            filter: blur(60px);
          }

          .orb-1, .orb-2 {
            width: 250px;
            height: 250px;
          }

          .orb-3, .orb-4 {
            width: 200px;
            height: 200px;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 1.5rem;
            padding: 0 10px;
          }
          
          .stage {
            height: 360px;
            padding: 10px;
          }
          
          .single-image {
            height: 80%;
            border-radius: 15px;
          }
          
          .side-image {
            height: 75%;
            border-radius: 15px;
          }
          
          .both-images {
            gap: 8px;
            padding: 8px;
          }
          
          .play-button {
            padding: 12px 28px;
            font-size: 1rem;
          }
          
          .status {
            font-size: 1rem;
            padding: 6px 15px;
          }
          
          .final-message {
            padding: 20px 25px;
          }
          
          .final-message h2 {
            font-size: 1.6rem;
          }
          
          .final-message .final-sub {
            font-size: 1.2rem;
          }
          
          .romantic-text {
            font-size: 1rem;
          }
          
          .whatsapp-fab {
            right: 15px;
            bottom: 15px;
            padding: 12px 20px;
            font-size: 1rem;
          }

          .yellow-rose {
            font-size: 25px;
          }

          .heart {
            font-size: 16px;
          }

          .sparkle {
            font-size: 10px;
          }

          .gradient-orb {
            filter: blur(40px);
          }

          .orb-1, .orb-2 {
            width: 200px;
            height: 200px;
          }

          .orb-3, .orb-4 {
            width: 150px;
            height: 150px;
          }
        }

        @media (max-width: 360px) {
          .stage {
            height: 320px;
          }
          
          .single-image, .side-image {
            border-radius: 12px;
          }
          
          .final-message {
            padding: 18px 20px;
          }
          
          .final-message h2 {
            font-size: 1.4rem;
          }
          
          .title {
            font-size: 1.3rem;
          }

          .yellow-rose {
            font-size: 22px;
          }
        }

        /* Orientación landscape en móviles */
        @media (max-height: 500px) and (orientation: landscape) {
          .stage {
            height: 280px;
          }
          
          .final-message {
            padding: 20px 30px;
          }
        }

        /* Mejoras de accesibilidad */
        @media (prefers-reduced-motion: reduce) {
          .romantic-background,
          .gradient-orb,
          .sparkle,
          .heart,
          .yellow-rose,
          .play-button,
          .whatsapp-fab,
          .single-image.talking,
          .side-image.talking {
            animation: none !important;
          }
          
          .final-message {
            animation: none !important;
          }
        }

        /* Modo alto contraste */
        @media (prefers-contrast: high) {
          .stage {
            border: 3px solid rgba(255, 255, 255, 0.8);
          }
          
          .final-message {
            background: rgba(255, 255, 255, 1);
            border: 3px solid #d63384;
          }
        }
      `}</style>
    </div>
  );
}