import { useState } from "react";
import MuyLejano from './muylejano.jsx'; // Ajusta la ruta si es necesario, por ejemplo '../pages/muylejano.jsx'

// Componente de corazones flotantes
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

// Componente de flores flotantes (nuevo)
const FloatingFlowers = () => {
  return (
    <div className="floating-flowers">
      {[...Array(10)].map((_, i) => (
        <div key={i} className={`flower flower-${i + 1}`}>
          🌹
        </div>
      ))}
    </div>
  );
};

// Componente de narices de cerdo flotantes (nuevo, para "cochinita")
const FloatingPigNoses = () => {
  return (
    <div className="floating-pig-noses">
      {[...Array(8)].map((_, i) => (
        <div key={i} className={`pig-nose pig-nose-${i + 1}`}>
          🐽
        </div>
      ))}
    </div>
  );
};

// Componente de lluvia de flores (nuevo)
const FlowerRain = () => {
  return (
    <div className="flower-rain">
      {[...Array(20)].map((_, i) => (
        <div key={i} className={`rain-flower rain-flower-${i + 1}`}>
          🌹
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

// Componente principal
export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showFlowerRain, setShowFlowerRain] = useState(false);
  
  const screens = [
    {
      title: "💝 Un detalle especial",
      content: "Un detalle hecho con mucho cariño, para mi cochinita preciosa🐽❤️",
      emoji: "💝"
    },
    {
      title: "🎵 Preparación importante",
      content: "Sube el volumen multimedia de tu dispositivo móvil para escuchar lo que se viene 🔊",
      emoji: "🎵"
    },
    {
      title: "🌹 Más que flores",
      content: "Como solo regalarte flores si es algo que cualquiera lo puede hacer... aquí está mi detalle único 🌻",
      emoji: "🌹"
    },
    {
      title: "💚 Nuestra historia",
      content: "Simularemos que yo soy Shrek y que tú eres el burrito (sin ofender) 💚",
      emoji: "🐴"
    }
  ];

  const handleNext = () => {
    if (currentScreen === 2) {
      setShowFlowerRain(true);
    }
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      setShowIntro(false); // Completa la intro y muestra MuyLejano
    }
  };

  if (showIntro) {
    return (
      <div className="intro-container">
        <RomanticBackground />
        <FloatingHearts />
        <FloatingFlowers />
        <FloatingPigNoses />
        {showFlowerRain && <FlowerRain />}
        <div className="intro-wrapper">
          <div key={currentScreen} className="intro-screen animate__animated animate__fadeIn">
            <div className="intro-emoji">
              {screens[currentScreen].emoji}
            </div>
            <h2 className="intro-title">{screens[currentScreen].title}</h2>
            <p className="intro-content">{screens[currentScreen].content}</p>
            <button className="next-button animate__animated animate__heartBeat animate__infinite" onClick={handleNext}>
              {currentScreen < screens.length - 1 ? "Siguiente ➡️" : "Comenzar la sorpresa 💕"}
            </button>
          </div>
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

          /* Pantallas de introducción */
          .intro-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            padding: 20px;
          }

          .intro-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
            width: 100%;
            max-width: 600px;
          }

          .intro-screen {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            padding: 40px 30px;
            border-radius: 25px;
            text-align: center;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
            border: 2px solid rgba(255, 255, 255, 0.3);
            width: 100%;
            animation: floatScreen 3s ease-in-out infinite;
          }

          @keyframes floatScreen {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .intro-emoji {
            font-size: 80px;
            margin-bottom: 20px;
            animation: emojiPulse 2s ease-in-out infinite;
          }

          @keyframes emojiPulse {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(5deg); }
          }

          .intro-title {
            color: #764ba2;
            font-size: 1.8rem;
            margin-bottom: 15px;
            font-weight: bold;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .intro-content {
            color: #555;
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 30px;
            font-style: italic;
          }

          .next-button {
            background: linear-gradient(135deg, #ff0000, #ff4d4d);
            color: white;
            border: none;
            padding: 15px 35px;
            font-size: 1.1rem;
            border-radius: 50px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(255, 0, 0, 0.3);
            position: relative;
            overflow: hidden;
          }

          .next-button::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: rgba(255, 255, 255, 0.2);
            transform: rotate(45deg);
            animation: shine 3s ease-in-out infinite;
          }

          @keyframes shine {
            0% { left: -150%; }
            50% { left: 150%; }
            100% { left: 150%; }
          }

          .next-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(255, 0, 0, 0.4);
          }

          .next-button:active {
            transform: translateY(-1px);
          }

          /* Corazones flotantes */
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

          /* Flores flotantes (nuevo) */
          .floating-flowers {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
          }

          .flower {
            position: absolute;
            animation: floatFlower 15s linear infinite;
            opacity: 0;
          }

          .flower-1 { left: 8%; animation-delay: 0s; font-size: 28px; }
          .flower-2 { left: 18%; animation-delay: 3s; font-size: 24px; }
          .flower-3 { left: 28%; animation-delay: 6s; font-size: 30px; }
          .flower-4 { left: 38%; animation-delay: 1s; font-size: 26px; }
          .flower-5 { left: 48%; animation-delay: 4s; font-size: 22px; }
          .flower-6 { left: 58%; animation-delay: 7s; font-size: 29px; }
          .flower-7 { left: 68%; animation-delay: 2s; font-size: 25px; }
          .flower-8 { left: 78%; animation-delay: 5s; font-size: 27px; }
          .flower-9 { left: 88%; animation-delay: 8s; font-size: 23px; }
          .flower-10 { left: 98%; animation-delay: 9s; font-size: 31px; }

          @keyframes floatFlower {
            0% {
              bottom: -5%;
              transform: translateX(0) rotate(0deg) scale(0.8);
              opacity: 0;
            }
            10% {
              opacity: 0.8;
            }
            90% {
              opacity: 0.8;
            }
            100% {
              bottom: 105%;
              transform: translateX(-30px) rotate(-360deg) scale(1.1);
              opacity: 0;
            }
          }

          /* Narices de cerdo flotantes (nuevo) */
          .floating-pig-noses {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
          }

          .pig-nose {
            position: absolute;
            animation: floatPigNose 10s linear infinite;
            opacity: 0;
          }

          .pig-nose-1 { left: 12%; animation-delay: 0s; font-size: 20px; }
          .pig-nose-2 { left: 22%; animation-delay: 1.5s; font-size: 18px; }
          .pig-nose-3 { left: 32%; animation-delay: 3s; font-size: 22px; }
          .pig-nose-4 { left: 42%; animation-delay: 4.5s; font-size: 19px; }
          .pig-nose-5 { left: 52%; animation-delay: 6s; font-size: 21px; }
          .pig-nose-6 { left: 62%; animation-delay: 7.5s; font-size: 17px; }
          .pig-nose-7 { left: 72%; animation-delay: 9s; font-size: 23px; }
          .pig-nose-8 { left: 82%; animation-delay: 0.5s; font-size: 20px; }

          @keyframes floatPigNose {
            0% {
              bottom: -5%;
              transform: translateX(0) rotate(0deg) scale(0.9);
              opacity: 0;
            }
            10% {
              opacity: 0.6;
            }
            90% {
              opacity: 0.6;
            }
            100% {
              bottom: 105%;
              transform: translateX(40px) rotate(180deg) scale(1.0);
              opacity: 0;
            }
          }

          /* Lluvia de flores (nuevo) */
          .flower-rain {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 5;
            overflow: hidden;
          }

          .rain-flower {
            position: absolute;
            animation: rainFlower 5s linear infinite;
            opacity: 0;
          }

          .rain-flower-1 { left: 5%; animation-delay: 0s; font-size: 28px; }
          .rain-flower-2 { left: 10%; animation-delay: 0.2s; font-size: 24px; }
          .rain-flower-3 { left: 15%; animation-delay: 0.4s; font-size: 30px; }
          .rain-flower-4 { left: 20%; animation-delay: 0.6s; font-size: 26px; }
          .rain-flower-5 { left: 25%; animation-delay: 0.8s; font-size: 22px; }
          .rain-flower-6 { left: 30%; animation-delay: 1s; font-size: 29px; }
          .rain-flower-7 { left: 35%; animation-delay: 1.2s; font-size: 25px; }
          .rain-flower-8 { left: 40%; animation-delay: 1.4s; font-size: 27px; }
          .rain-flower-9 { left: 45%; animation-delay: 1.6s; font-size: 23px; }
          .rain-flower-10 { left: 50%; animation-delay: 1.8s; font-size: 31px; }
          .rain-flower-11 { left: 55%; animation-delay: 2s; font-size: 28px; }
          .rain-flower-12 { left: 60%; animation-delay: 2.2s; font-size: 24px; }
          .rain-flower-13 { left: 65%; animation-delay: 2.4s; font-size: 30px; }
          .rain-flower-14 { left: 70%; animation-delay: 2.6s; font-size: 26px; }
          .rain-flower-15 { left: 75%; animation-delay: 2.8s; font-size: 22px; }
          .rain-flower-16 { left: 80%; animation-delay: 3s; font-size: 29px; }
          .rain-flower-17 { left: 85%; animation-delay: 3.2s; font-size: 25px; }
          .rain-flower-18 { left: 90%; animation-delay: 3.4s; font-size: 27px; }
          .rain-flower-19 { left: 95%; animation-delay: 3.6s; font-size: 23px; }
          .rain-flower-20 { left: 0%; animation-delay: 3.8s; font-size: 31px; }

          @keyframes rainFlower {
            0% {
              top: -5%;
              transform: translateX(0) rotate(0deg) scale(0.8);
              opacity: 0;
            }
            10% {
              opacity: 0.8;
            }
            90% {
              opacity: 0.8;
            }
            100% {
              top: 105%;
              transform: translateX(20px) rotate(180deg) scale(1.1);
              opacity: 0;
            }
          }

          /* Diseño responsivo */
          @media (max-width: 768px) {
            .intro-screen {
              padding: 30px 25px;
              margin: 15px;
              border-radius: 20px;
            }
            
            .intro-emoji {
              font-size: 65px;
            }
            
            .intro-title {
              font-size: 1.6rem;
            }
            
            .intro-content {
              font-size: 1rem;
              line-height: 1.5;
            }
            
            .next-button {
              padding: 12px 28px;
              font-size: 1rem;
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
            .intro-screen {
              padding: 25px 20px;
              margin: 10px;
            }
            
            .intro-emoji {
              font-size: 55px;
            }
            
            .intro-title {
              font-size: 1.4rem;
            }
            
            .intro-content {
              font-size: 0.95rem;
            }
            
            .next-button {
              padding: 10px 25px;
              font-size: 0.95rem;
            }

            .heart {
              font-size: 16px;
            }

            .flower {
              font-size: 20px;
            }

            .pig-nose {
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
            .intro-screen {
              padding: 20px 15px;
            }
          }

          /* Orientación landscape en móviles */
          @media (max-height: 500px) and (orientation: landscape) {
            .intro-screen {
              padding: 20px 25px;
            }
            
            .intro-emoji {
              font-size: 50px;
              margin-bottom: 15px;
            }
            
            .intro-title {
              font-size: 1.3rem;
              margin-bottom: 10px;
            }
            
            .intro-content {
              font-size: 0.9rem;
              margin-bottom: 20px;
            }
          }

          /* Mejoras de accesibilidad */
          @media (prefers-reduced-motion: reduce) {
            .romantic-background,
            .gradient-orb,
            .sparkle,
            .heart,
            .flower,
            .pig-nose,
            .intro-emoji,
            .next-button {
              animation: none !important;
            }
          }

          /* Modo alto contraste */
          @media (prefers-contrast: high) {
            .intro-screen {
              background: rgba(255, 255, 255, 1);
              border: 3px solid #000;
            }
          }
        `}</style>
      </div>
    );
  }

  return <MuyLejano />;
}