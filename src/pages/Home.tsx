import { useEffect, useRef } from 'react';

export function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rawQuoteText = [
      "I was born to take things apart, to bend them to my will.",
      "This is where it can all go wrong – and that's exactly where I want to be.",
      "Mistakes are lessons, failures are fuel.",
      "I won't stop at good enough, and if safety guidelines are just suggestions...",
      "It's exactly what I'm going to do.",
      "If it's worth doing, it's worth overdoing.",
      "I won't stop at good enough.",
      "I won't stop until it breaks.",
      "And even then, I'll push it further, harder, until it hurts.",
      "|Because I am an engineer." 
    ];

    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
    
    function createSparks(x: number, y: number, count: number, coreColor = '#ffb700', shadowColor = '#ff5100') {
      for(let i=0; i<count; i++) {
          const spark = document.createElement('div');
          spark.className = 'spark';
          spark.style.backgroundColor = coreColor;
          spark.style.boxShadow = `0 0 4px ${shadowColor}`;

          const tx = (Math.random() - 0.5) * 150;
          const ty = (Math.random() - 0.5) * 150;
          spark.style.setProperty('--tx', tx.toString());
          spark.style.setProperty('--ty', ty.toString());
          
          spark.style.left = `${x}px`;
          spark.style.top = `${y}px`;
          spark.style.animation = `sparkFly ${0.3 + Math.random()*0.4}s ease-out forwards`;
          
          document.body.appendChild(spark);
          setTimeout(() => spark.remove(), 700);
      }
    }

    async function runCNC() {
      const spindle = document.getElementById('cnc-spindle');
      const titleLines = [
          { ghost: document.getElementById('title-line-1'), filled: document.getElementById('milled-1') },
          { ghost: document.getElementById('title-line-2'), filled: document.getElementById('milled-2') }
      ];

      if(!spindle || !titleLines[0].ghost) return;

      spindle.style.opacity = '1';

      for (const line of titleLines) {
          if(!line.ghost || !line.filled) continue;
          
          const textWidth = line.ghost.offsetWidth;
          const startY = line.ghost.offsetTop;
          
          spindle.style.top = `${startY - 80}px`; 
          spindle.style.left = '0px';
          spindle.style.transition = 'none';
          await sleep(500);

          spindle.style.transition = 'left 2s linear';
          line.filled.style.transition = 'width 2s linear';
          spindle.style.left = `${textWidth}px`;
          line.filled.style.width = '100%';

          const sparkInterval = setInterval(() => {
              const spindleRect = spindle.getBoundingClientRect();
              createSparks(spindleRect.left + 30 + window.scrollX, spindleRect.bottom - 5 + window.scrollY, 4);
          }, 50);
          
          await sleep(2000);
          clearInterval(sparkInterval);
          await sleep(300);
      }

      spindle.style.transition = 'top 1s ease-in, opacity 0.5s';
      spindle.style.top = '-150px';
      spindle.style.opacity = '0';
    }

    async function run3DPrinter() {
      const container = document.getElementById('quote-container');
      const extruder = document.getElementById('extruder');
      if(!container || !extruder) return;
      
      extruder.style.opacity = '1';
      extruder.style.transition = 'left 0.05s linear, top 0.3s ease-in-out';

      for (let i = 0; i < rawQuoteText.length; i++) {
          let text = rawQuoteText[i];
          let isHighlight = text.startsWith('|');
          if(isHighlight) text = text.substring(1);

          const wrapper = document.createElement('div');
          wrapper.className = 'quote-line-wrapper';
          const p = document.createElement('span');
          p.className = 'quote-line';
          if(isHighlight) p.classList.add('highlight');
          
          wrapper.appendChild(p);
          container.appendChild(wrapper);

          extruder.style.top = `${wrapper.offsetTop - 80}px`;
          extruder.style.left = '0px';
          await sleep(400); 

          for (let char of text) {
              p.textContent += char;
              extruder.style.left = `${p.offsetWidth + 10}px`;
              await sleep(30); 
          }
          await sleep(150); 
      }

      extruder.style.transition = 'top 1s ease-in, opacity 0.5s';
      extruder.style.top = '-150px';
      extruder.style.opacity = '0';
    }

    async function revealClimax() {
      const blocks = ['ab1', 'ab2', 'ab3'].map(id => document.getElementById(id));
      const board = document.getElementById('board');

      for (let i = 0; i < blocks.length; i++) {
          const block = blocks[i];
          if(!block) continue;
          
          block.style.transition = 'opacity 0.4s, transform 0.4s';
          block.style.opacity = '1';
          block.style.transform = 'scale(1) translateX(0)';
          
          if(board) {
              board.style.animation = 'none';
              void board.offsetWidth;
              board.style.animation = 'screenShake 0.4s ease-out';
          }
          await sleep(600); 
      }
    }

    async function finalizeBlueprint() {
      document.querySelectorAll('.draw-path').forEach((path, i) => {
          (path as HTMLElement).style.animation = `drawLine 1.5s ease-out forwards ${i * 0.3}s`;
      });
      const anno1 = document.getElementById('anno1');
      const anno2 = document.getElementById('anno2');
      if(anno1) anno1.style.animation = 'fadeIn 1s forwards 0.5s';
      if(anno2) anno2.style.animation = 'fadeIn 1s forwards 1s';
    }

    let isMounted = true;
    async function startFactory() {
      await sleep(1000);
      if(!isMounted) return;
      await runCNC();
      if(!isMounted) return;
      await sleep(300);
      await run3DPrinter();
      if(!isMounted) return;
      await sleep(300);
      await revealClimax();
      if(!isMounted) return;
      await finalizeBlueprint();
    }

    startFactory();
    
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen pb-32">
      {/* Factory Blueprint Hero Section */}
      <section className="flex justify-center items-center py-24 px-4 sm:px-6 lg:px-8 bg-[#0f1218]">
        
        {/* SVG Gradients */}
        <svg style={{width:0, height:0, position:'absolute'}}>
            <defs>
                <linearGradient id="dark-metal" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2d3748" />
                    <stop offset="50%" stopColor="#4a5568" />
                    <stop offset="100%" stopColor="#1a202c" />
                </linearGradient>
                <linearGradient id="steel-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#cbd5e0" />
                    <stop offset="30%" stopColor="#ffffff" />
                    <stop offset="70%" stopColor="#a0aec0" />
                    <stop offset="100%" stopColor="#718096" />
                </linearGradient>
                <linearGradient id="brass-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#b7791f" />
                    <stop offset="50%" stopColor="#f6e05e" />
                    <stop offset="100%" stopColor="#975a16" />
                </linearGradient>
            </defs>
        </svg>

        <div className="blueprint-board mt-16" id="board" ref={containerRef}>

          <svg className="decor pencil" viewBox="0 0 20 200">
              <path d="M5,0 L15,0 L15,170 L10,195 L5,170 Z" fill="#4a5568"/>
              <path d="M5,0 L15,0 L15,20 L5,20 Z" fill="#2d3748"/>
              <path d="M5,170 L15,170 L10,195 Z" fill="#e2e8f0"/>
              <circle cx="10" cy="192" r="2" fill="#1a202c"/>
          </svg>

          <svg className="decor compass-tool" viewBox="0 0 200 80">
              <line x1="10" y1="40" x2="190" y2="40" stroke="#a0aec0" strokeWidth="4"/>
              <circle cx="100" cy="40" r="10" fill="#718096"/>
              <path d="M90,30 L110,30 L105,10 L95,10 Z" fill="#cbd5e0"/>
              <line x1="20" y1="30" x2="20" y2="50" stroke="#718096" strokeWidth="3"/>
              <line x1="180" y1="30" x2="180" y2="50" stroke="#718096" strokeWidth="3"/>
          </svg>

          <svg className="drawing-layer" viewBox="0 0 950 900" preserveAspectRatio="none">
              <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="var(--text-highlight)" />
                  </marker>
              </defs>
              <path id="path1" className="draw-path" d="M 620 180 Q 700 200 700 280 L 680 280" markerEnd="url(#arrowhead)"/>
              <path id="path2" className="draw-path" d="M 100 400 L 50 400 L 50 550 L 80 550" markerEnd="url(#arrowhead)"/>
              <path id="path3" className="draw-path" d="M 750 400 L 800 400 L 800 600 L 700 600 L 700 650"/>
          </svg>

          <div className="annotation anno-1" id="anno1">Deconstruction = Insight</div>
          <div className="annotation anno-2" id="anno2">Stress Test Everything</div>

          <div className="cnc-stage">
              
              <svg className="cnc-machine" id="cnc-spindle" viewBox="0 0 60 120">
                  <rect x="5" y="0" width="50" height="25" fill="url(#dark-metal)" rx="2"/>
                  <circle cx="15" cy="12" r="3" fill="#111"/>
                  <circle cx="45" cy="12" r="3" fill="#111"/>
                  <rect x="10" y="25" width="40" height="50" fill="url(#steel-grad)"/>
                  <line x1="10" y1="35" x2="50" y2="35" stroke="#4a5568" strokeWidth="2"/>
                  <line x1="10" y1="45" x2="50" y2="45" stroke="#4a5568" strokeWidth="2"/>
                  <line x1="10" y1="55" x2="50" y2="55" stroke="#4a5568" strokeWidth="2"/>
                  <line x1="10" y1="65" x2="50" y2="65" stroke="#4a5568" strokeWidth="2"/>
                  <path d="M15,75 L45,75 L40,90 L20,90 Z" fill="#2d3748"/>
                  <rect x="22" y="90" width="16" height="8" fill="url(#brass-grad)"/>
                  <path className="cnc-bit" d="M26,98 L34,98 L31,120 L29,120 Z" fill="url(#steel-grad)"/>
                  <path className="cnc-bit" d="M26,102 L34,106 M27,108 L33,112 M28,114 L32,117" stroke="#4a5568" strokeWidth="1.5"/>
              </svg>

              <div className="main-title" id="title-line-1">
                  BEYOND
                  <div className="milled-text" id="milled-1">BEYOND</div>
              </div>
              <div className="main-title" id="title-line-2">
                  LIMITS
                  <div className="milled-text steel-milled" id="milled-2">LIMITS</div>
              </div>
          </div>

          <div className="print-stage" id="print-stage">
              <svg className="extruder" id="extruder" viewBox="0 0 60 100">
                  <rect x="28" y="0" width="4" height="20" fill="#e2e8f0"/>
                  <rect x="10" y="15" width="40" height="30" fill="#1a202c" rx="2"/>
                  <rect x="12" y="17" width="36" height="26" fill="url(#dark-metal)" rx="1"/>
                  <circle cx="18" cy="23" r="2" fill="#718096"/>
                  <circle cx="42" cy="37" r="2" fill="#718096"/>
                  <rect x="15" y="45" width="30" height="30" fill="#2b6cb0"/>
                  <line x1="15" y1="50" x2="45" y2="50" stroke="#1a365d" strokeWidth="2"/>
                  <line x1="15" y1="56" x2="45" y2="56" stroke="#1a365d" strokeWidth="2"/>
                  <line x1="15" y1="62" x2="45" y2="62" stroke="#1a365d" strokeWidth="2"/>
                  <line x1="15" y1="68" x2="45" y2="68" stroke="#1a365d" strokeWidth="2"/>
                  <rect x="20" y="75" width="20" height="12" fill="url(#steel-grad)" rx="1"/>
                  <path d="M40,80 Q45,80 45,70 L45,45" fill="none" stroke="#e53e3e" strokeWidth="1.5"/>
                  <polygon points="25,87 35,87 32,97 28,97" fill="url(#brass-grad)"/>
                  <circle cx="30" cy="98" r="3" className="hotend-glow"/>
              </svg>
              <div id="quote-container"></div>
          </div>

          <div className="robot-stage" id="robot-stage">
              <div className="action-block ab-1" id="ab1">I will TEAR DOWN.</div>
              <div className="action-block ab-2" id="ab2">I will REBUILD.</div>
              <div className="action-block ab-3" id="ab3">I will CREATE THE WORLD</div>
          </div>
          
          <div style={{marginTop: '40px', display: 'flex', justifyContent: 'flex-end'}}>
             <div style={{fontFamily: "'Courier New', Courier, monospace", color: 'var(--text-main)', opacity: 0, animation: 'fadeIn 1s forwards 2s'}}>Georgy Jacob</div>
          </div>

        </div>
      </section>

    </div>
  );
}
