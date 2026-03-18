import { useState, useEffect, useRef, useCallback } from "react";

type LineType = "title" | "blank" | "prompt" | "separator" | "total" | "info" | "success";

interface ScriptLine {
  text: string;
  type: LineType;
  answer?: string;
}

const SCRIPT_LINES: ScriptLine[] = [
  { text: "🛒 Bienvenue chez EuroformaShop !", type: "title" },
  { text: "", type: "blank" },
  { text: "Entrez le nombre d'articles dans votre chariot : ", type: "prompt", answer: "6" },
  { text: "", type: "blank" },
  { text: "Prix de l'article 1 : ", type: "prompt", answer: "7.50 €" },
  { text: "  → Total provisoire : 7.50 €", type: "info" },
  { text: "Prix de l'article 2 : ", type: "prompt", answer: "32.00 €" },
  { text: "  → Total provisoire : 39.50 €", type: "info" },
  { text: "Prix de l'article 3 : ", type: "prompt", answer: "9.99 €" },
  { text: "  → Total provisoire : 49.49 €", type: "info" },
  { text: "Prix de l'article 4 : ", type: "prompt", answer: "47.00 €" },
  { text: "  → Total provisoire : 96.49 €", type: "info" },
  { text: "Prix de l'article 5 : ", type: "prompt", answer: "0.99 €" },
  { text: "  → Total provisoire : 97.48 €", type: "info" },
  { text: "Prix de l'article 6 : ", type: "prompt", answer: "2.86 €" },
  { text: "  → Total provisoire : 100.34 €", type: "info" },
  { text: "", type: "blank" },
  { text: "───────────────────────────", type: "separator" },
  { text: "💰 Montant total à payer : 100.34 €", type: "total" },
  { text: "───────────────────────────", type: "separator" },
  { text: "", type: "blank" },
  { text: "Montant donné par le client : ", type: "prompt", answer: "110.00 €" },
  { text: "💶 Monnaie à rendre : 9.66 €", type: "info" },
  { text: "", type: "blank" },
  { text: "✨ Merci ! À très bientôt chez EuroformaShop !", type: "success" },
];

const CHAR_SPEED = 22;
const ANSWER_PAUSE = 250;
const END_PAUSE = 2500;
const FADE_DURATION = 600;

const EuroformaShopAnimation = () => {
  const [displayedLines, setDisplayedLines] = useState<
    { text: string; type: string; answerText?: string }[]
  >([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [typingAnswer, setTypingAnswer] = useState(false);
  const [answerCharIdx, setAnswerCharIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const reset = useCallback(() => {
    setDisplayedLines([]);
    setCurrentLineIdx(0);
    setCurrentCharIdx(0);
    setTypingAnswer(false);
    setAnswerCharIdx(0);
    setOpacity(1);
  }, []);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [displayedLines, currentCharIdx, answerCharIdx]);

  useEffect(() => {
    if (currentLineIdx >= SCRIPT_LINES.length) {
      const t1 = setTimeout(() => {
        setOpacity(0);
        const t2 = setTimeout(() => reset(), FADE_DURATION);
        return () => clearTimeout(t2);
      }, END_PAUSE);
      return () => clearTimeout(t1);
    }

    const line = SCRIPT_LINES[currentLineIdx];

    if (line.type === "blank") {
      setDisplayedLines((prev) => [...prev, { text: "", type: "blank" }]);
      setCurrentLineIdx((i) => i + 1);
      return;
    }

    if (!typingAnswer) {
      if (currentCharIdx < line.text.length) {
        const timer = setTimeout(() => setCurrentCharIdx((c) => c + 1), CHAR_SPEED);
        return () => clearTimeout(timer);
      } else {
        if (line.answer) {
          const timer = setTimeout(() => {
            setTypingAnswer(true);
            setAnswerCharIdx(0);
          }, ANSWER_PAUSE);
          return () => clearTimeout(timer);
        } else {
          setDisplayedLines((prev) => [...prev, { text: line.text, type: line.type }]);
          setCurrentLineIdx((i) => i + 1);
          setCurrentCharIdx(0);
        }
      }
    } else {
      const answer = line.answer!;
      if (answerCharIdx < answer.length) {
        const timer = setTimeout(() => setAnswerCharIdx((c) => c + 1), CHAR_SPEED + 20);
        return () => clearTimeout(timer);
      } else {
        setDisplayedLines((prev) => [
          ...prev,
          { text: line.text, type: line.type, answerText: answer },
        ]);
        setTypingAnswer(false);
        setCurrentLineIdx((i) => i + 1);
        setCurrentCharIdx(0);
        setAnswerCharIdx(0);
      }
    }
  }, [currentLineIdx, currentCharIdx, typingAnswer, answerCharIdx, reset]);

  const currentLine = SCRIPT_LINES[currentLineIdx];

  const getLineColor = (type: string) => {
    switch (type) {
      case "title": return "#00e5ff";
      case "separator": return "rgba(0, 229, 255, 0.3)";
      case "total": return "#ffd700";
      case "info": return "#00ff88";
      case "success": return "#00e5ff";
      default: return "rgba(255, 255, 255, 0.85)";
    }
  };

  const getLineGlow = (type: string) => {
    switch (type) {
      case "title": return "0 0 10px rgba(0, 229, 255, 0.5)";
      case "total": return "0 0 12px rgba(255, 215, 0, 0.5)";
      case "success": return "0 0 10px rgba(0, 229, 255, 0.5)";
      default: return "none";
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden relative" style={{ background: "#050d1a" }}>
      {/* Circuit lines background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          linear-gradient(90deg, #00e5ff 1px, transparent 1px),
          linear-gradient(0deg, #00e5ff 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }} />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + i % 3}px`,
            height: `${2 + i % 3}px`,
            background: "#00e5ff",
            opacity: 0.3 + (i % 3) * 0.15,
            left: `${10 + i * 15}%`,
            top: `${15 + (i * 13) % 70}%`,
            animation: `float-euro-${i % 3} ${3 + i}s ease-in-out infinite`,
          }}
        />
      ))}

      <div
        className="relative z-10 w-full max-w-sm transition-opacity"
        style={{ opacity, transitionDuration: `${FADE_DURATION}ms` }}
      >
        {/* Holographic terminal */}
        <div
          className="rounded-xl overflow-hidden border"
          style={{
            background: "rgba(0, 229, 255, 0.03)",
            backdropFilter: "blur(12px)",
            borderColor: "rgba(0, 229, 255, 0.25)",
            boxShadow: "0 0 20px rgba(0, 229, 255, 0.08), inset 0 0 20px rgba(0, 229, 255, 0.02)",
            animation: "border-pulse-euro 3s ease-in-out infinite",
          }}
        >
          {/* Terminal title bar */}
          <div className="flex items-center gap-1.5 px-3 py-1.5" style={{ background: "rgba(0, 229, 255, 0.06)" }}>
            <span className="w-2 h-2 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="w-2 h-2 rounded-full" style={{ background: "#febc2e" }} />
            <span className="w-2 h-2 rounded-full" style={{ background: "#28c840" }} />
            <span className="ml-2 text-[9px] font-mono" style={{ color: "rgba(0, 229, 255, 0.5)" }}>
              python euroforma.py
            </span>
          </div>

          {/* Terminal body */}
          <div
            ref={scrollRef}
            className="p-3 h-48 overflow-hidden font-mono text-[10px] leading-relaxed"
          >
            {displayedLines.map((line, i) => (
              <div key={i} style={{ color: getLineColor(line.type), textShadow: getLineGlow(line.type) }}>
                {line.type === "prompt" ? (
                  <>
                    <span style={{ color: "rgba(255,255,255,0.85)" }}>{line.text}</span>
                    <span style={{ color: "#00e5ff" }}>{line.answerText}</span>
                  </>
                ) : (
                  line.text || "\u00A0"
                )}
              </div>
            ))}
            {/* Currently typing line */}
            {currentLineIdx < SCRIPT_LINES.length && currentLine && currentLine.type !== "blank" && (
              <div style={{ color: getLineColor(currentLine.type), textShadow: getLineGlow(currentLine.type) }}>
                {currentLine.type === "prompt" ? (
                  <>
                    <span style={{ color: "rgba(255,255,255,0.85)" }}>
                      {currentLine.text.slice(0, currentCharIdx)}
                    </span>
                    {typingAnswer && (
                      <span style={{ color: "#00e5ff" }}>
                        {currentLine.answer!.slice(0, answerCharIdx)}
                      </span>
                    )}
                  </>
                ) : (
                  currentLine.text.slice(0, currentCharIdx)
                )}
                <span
                  className="inline-block w-1.5 h-3 ml-0.5 align-middle"
                  style={{
                    background: "#00e5ff",
                    opacity: showCursor ? 1 : 0,
                    boxShadow: "0 0 4px rgba(0, 229, 255, 0.6)",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-euro-0 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-euro-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-8px) translateX(5px); }
        }
        @keyframes float-euro-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes border-pulse-euro {
          0%, 100% { border-color: rgba(0, 229, 255, 0.2); box-shadow: 0 0 15px rgba(0, 229, 255, 0.06); }
          50% { border-color: rgba(0, 229, 255, 0.4); box-shadow: 0 0 25px rgba(0, 229, 255, 0.12); }
        }
      `}</style>
    </div>
  );
};

export default EuroformaShopAnimation;
