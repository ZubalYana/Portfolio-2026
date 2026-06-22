import BackgroundGlow from "./BackgroundGlow";

const glowData = [
  { width: "clamp(250px, 35vw, 500px)", height: "clamp(250px, 35vw, 500px)", top: "35%", left: "-5vw", opacity: 0.18 },
  { width: "clamp(350px, 50vw, 700px)", height: "clamp(350px, 50vw, 700px)", top: "50%", right: "-15vw", opacity: 0.15 },
  { width: "clamp(280px, 40vw, 550px)", height: "clamp(280px, 40vw, 550px)", top: "65%", left: "-8vw", opacity: 0.12 },
  { width: "clamp(300px, 42vw, 600px)", height: "clamp(300px, 42vw, 600px)", top: "80%", right: "-10vw", opacity: 0.18 },
  { width: "clamp(260px, 38vw, 520px)", height: "clamp(260px, 38vw, 520px)", top: "95%", left: "-12vw", opacity: 0.2 },
  { width: "clamp(320px, 48vw, 650px)", height: "clamp(320px, 48vw, 650px)", top: "115%", right: "-8vw", opacity: 0.15 },
  { width: "clamp(250px, 35vw, 480px)", height: "clamp(250px, 35vw, 480px)", top: "135%", left: "-10vw", opacity: 0.12 },
  { width: "clamp(300px, 40vw, 580px)", height: "clamp(300px, 40vw, 580px)", top: "155%", right: "-15vw", opacity: 0.18 },
];

export default function PageGlow({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full overflow-x-clip overflow-y-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        {glowData.map((glow, index) => (
          <BackgroundGlow 
            key={index} 
            width={glow.width} 
            height={glow.height} 
            top={glow.top} 
            left={glow.left} 
            right={glow.right} 
            opacity={glow.opacity} 
          />
        ))}
      </div>

      <div className="relative z-10">
        {children}
      </div>
      
    </div>
  );
}