import { useState, useEffect, useCallback } from "react";

const tasks = [
  { title: "Concevoir la structure", icon: "🏗️" },
  { title: "Coder les fonctions", icon: "💻" },
  { title: "Tester le programme", icon: "🧪" },
];

type Phase = "title" | "adding" | "checking" | "deleting" | "pause" | "fadeout";

const TodoListAnimation = () => {
  const [phase, setPhase] = useState<Phase>("title");
  const [visibleTasks, setVisibleTasks] = useState<number[]>([]);
  const [checkedTasks, setCheckedTasks] = useState<number[]>([]);
  const [deletingTask, setDeletingTask] = useState<number | null>(null);
  const [showTitle, setShowTitle] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const reset = useCallback(() => {
    setPhase("title");
    setVisibleTasks([]);
    setCheckedTasks([]);
    setDeletingTask(null);
    setShowTitle(false);
    setOpacity(1);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    switch (phase) {
      case "title":
        timer = setTimeout(() => {
          setShowTitle(true);
          timer = setTimeout(() => setPhase("adding"), 800);
        }, 300);
        break;

      case "adding":
        if (visibleTasks.length < tasks.length) {
          timer = setTimeout(() => {
            setVisibleTasks((prev) => [...prev, prev.length]);
          }, 500);
        } else {
          timer = setTimeout(() => setPhase("checking"), 600);
        }
        break;

      case "checking":
        if (checkedTasks.length < tasks.length) {
          timer = setTimeout(() => {
            setCheckedTasks((prev) => [...prev, prev.length]);
          }, 600);
        } else {
          timer = setTimeout(() => setPhase("deleting"), 800);
        }
        break;

      case "deleting":
        if (deletingTask === null) {
          setDeletingTask(1);
          timer = setTimeout(() => setPhase("pause"), 800);
        }
        break;

      case "pause":
        timer = setTimeout(() => setPhase("fadeout"), 2000);
        break;

      case "fadeout":
        setOpacity(0);
        timer = setTimeout(() => {
          reset();
        }, 600);
        break;
    }

    return () => clearTimeout(timer);
  }, [phase, visibleTasks.length, checkedTasks.length, deletingTask, reset]);

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
            animation: `float-particle-${i % 3} ${3 + i}s ease-in-out infinite`,
          }}
        />
      ))}

      <div
        className="relative z-10 w-full max-w-xs transition-opacity duration-500"
        style={{ opacity }}
      >
        {/* Holographic card */}
        <div
          className="rounded-xl p-4 border"
          style={{
            background: "rgba(0, 229, 255, 0.03)",
            backdropFilter: "blur(12px)",
            borderColor: "rgba(0, 229, 255, 0.25)",
            boxShadow: "0 0 20px rgba(0, 229, 255, 0.08), inset 0 0 20px rgba(0, 229, 255, 0.02)",
            animation: "border-pulse 3s ease-in-out infinite",
          }}
        >
          {/* Title */}
          <div
            className="text-xs font-mono font-bold mb-3 tracking-wider flex items-center gap-2 transition-all duration-500"
            style={{
              color: "#00e5ff",
              opacity: showTitle ? 1 : 0,
              transform: showTitle ? "translateY(0)" : "translateY(-8px)",
              textShadow: "0 0 10px rgba(0, 229, 255, 0.5)",
            }}
          >
            📋 To-Do List — C++
          </div>

          {/* Tasks */}
          <ul className="space-y-2">
            {tasks.map((task, i) => {
              const isVisible = visibleTasks.includes(i);
              const isChecked = checkedTasks.includes(i);
              const isDeleting = deletingTask === i;

              return (
                <li
                  key={i}
                  className="flex items-center gap-2.5 transition-all duration-500 ease-out"
                  style={{
                    opacity: isDeleting ? 0 : isVisible ? 1 : 0,
                    transform: isDeleting
                      ? "translateX(-20px) scaleY(0)"
                      : isVisible
                      ? "translateX(0)"
                      : "translateX(30px)",
                    maxHeight: isDeleting ? "0px" : "40px",
                    marginBottom: isDeleting ? "0px" : undefined,
                    overflow: "hidden",
                  }}
                >
                  {/* Checkbox */}
                  <span
                    className="w-4 h-4 rounded flex-shrink-0 border flex items-center justify-center transition-all duration-400"
                    style={{
                      borderColor: isChecked ? "#00ff88" : "rgba(0, 229, 255, 0.3)",
                      background: isChecked ? "rgba(0, 255, 136, 0.15)" : "transparent",
                      boxShadow: isChecked ? "0 0 8px rgba(0, 255, 136, 0.3)" : "none",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-2.5 h-2.5 transition-all duration-400"
                      style={{
                        opacity: isChecked ? 1 : 0,
                        transform: isChecked ? "scale(1)" : "scale(0.3)",
                        color: "#00ff88",
                        filter: "drop-shadow(0 0 4px rgba(0, 255, 136, 0.6))",
                      }}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M4 12l6 6L20 6"
                        strokeDasharray="24"
                        strokeDashoffset={isChecked ? 0 : 24}
                        className="transition-all duration-400"
                      />
                    </svg>
                  </span>

                  {/* Icon */}
                  <span className="text-xs">{task.icon}</span>

                  {/* Text */}
                  <span
                    className="text-xs font-mono transition-all duration-400"
                    style={{
                      color: isChecked ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.9)",
                      textDecoration: isChecked ? "line-through" : "none",
                    }}
                  >
                    {task.title}
                  </span>

                  {/* Status badge */}
                  <span
                    className="ml-auto text-[9px] font-mono px-1.5 py-0.5 rounded-full transition-all duration-400"
                    style={{
                      background: isChecked ? "rgba(0, 255, 136, 0.12)" : "rgba(0, 150, 255, 0.12)",
                      color: isChecked ? "#00ff88" : "#00aaff",
                      border: `1px solid ${isChecked ? "rgba(0, 255, 136, 0.25)" : "rgba(0, 150, 255, 0.25)"}`,
                      textShadow: `0 0 6px ${isChecked ? "rgba(0, 255, 136, 0.4)" : "rgba(0, 150, 255, 0.4)"}`,
                    }}
                  >
                    {isChecked ? "Terminée" : "En cours"}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes float-particle-0 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-particle-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-8px) translateX(5px); }
        }
        @keyframes float-particle-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes border-pulse {
          0%, 100% { border-color: rgba(0, 229, 255, 0.2); box-shadow: 0 0 15px rgba(0, 229, 255, 0.06); }
          50% { border-color: rgba(0, 229, 255, 0.4); box-shadow: 0 0 25px rgba(0, 229, 255, 0.12); }
        }
      `}</style>
    </div>
  );
};

export default TodoListAnimation;
