import { motion } from 'framer-motion';
import { Mail, Wrench, Code, Cpu } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-16 text-gradient">About.</h1>
          
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Bio */}
            <div className="lg:col-span-2 space-y-8 text-xl text-gray-400 font-light leading-relaxed">
              <p className="text-white text-2xl font-normal">
                Hi, I'm Georgy. I am a hardware engineer, maker, and software developer specializing in the intersection of physical machines and digital control.
              </p>
              <p>
                My passion lies in designing and building custom CNC machinery, advanced 3D printers, and robotic kinematics. I don't just assemble off-the-shelf parts—I design the chassis in CAD, specify the linear motion components, wire the electronics, and write the firmware or control software to make it move.
              </p>
              <p>
                When I'm not in the workshop covered in aluminum chips, I'm usually coding web interfaces to control those machines or exploring new ways to push the boundaries of desktop manufacturing.
              </p>
              
              <div className="pt-8">
                <a 
                  href="mailto:contact@georgy.dev"
                  className="glow-button inline-flex items-center gap-3 px-8 py-4 text-sm tracking-wide"
                >
                  <Mail size={18} /> Get In Touch
                </a>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6 text-white">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Wrench size={20} />
                  </div>
                  <h3 className="font-sans text-lg font-bold">Hardware / CAD</h3>
                </div>
                <ul className="space-y-3 text-gray-400 font-mono text-sm tracking-wide">
                  <li>Fusion 360 & SolidWorks</li>
                  <li>CNC Machining</li>
                  <li>3D Printing (FDM/Resin)</li>
                  <li>PCB Design (KiCad)</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6 text-white">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Cpu size={20} />
                  </div>
                  <h3 className="font-sans text-lg font-bold">Firmware</h3>
                </div>
                <ul className="space-y-3 text-gray-400 font-mono text-sm tracking-wide">
                  <li>Klipper & Marlin</li>
                  <li>GRBL / FluidNC</li>
                  <li>C++ (Arduino/ESP32)</li>
                  <li>MicroPython</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6 text-white">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Code size={20} />
                  </div>
                  <h3 className="font-sans text-lg font-bold">Software</h3>
                </div>
                <ul className="space-y-3 text-gray-400 font-mono text-sm tracking-wide">
                  <li>React & TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Python</li>
                  <li>Web Serial API</li>
                </ul>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
