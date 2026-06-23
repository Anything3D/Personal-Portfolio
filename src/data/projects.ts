export interface Project {
  id: string;
  title: string;
  description: string;
  details_text: string;
  thumbnail_image: string;
  gallery_images: string[];
  tags: string[];
  github_link?: string;
}

export const projects: Project[] = [
  {
    id: "3d-printed-plotter",
    title: "100% 3D Printed Rack & Pinion Plotter",
    description: "My very first plotter design—a fully 3D printed, dual-Y rack and pinion machine built using 28BYJ-48 stepper motors with almost zero non-printed hardware.",
    details_text: "Every CNC journey has to start somewhere. Before diving into complex CoreXY kinematics, expensive NEMA steppers, and metal linear rails, I wanted to see if I could build a working pen plotter using nothing but PLA and the absolute cheapest electronics available.\n\nThis is my very first plotter design—a fully 3D printed, dual-Y rack and pinion machine with almost zero non-printed hardware.\n\n**The Goal: Zero \"Vitamins\"**\nIn the 3D printing community, non-printed hardware (like screws, belts, metal rods, and bearings) are called \"vitamins.\" My goal for this initial build was to keep the vitamin count as close to zero as absolutely possible.\n\nIf you look at the CAD, you'll notice there are no timing belts and no metal linear rails. Everything structural and mechanical is pushed out of a 3D printer nozzle.\n\n**The Electronics**\nTo keep costs incredibly low, I designed this around the ubiquitous (and cheap) 28BYJ-48 unipolar stepper motors.\n- The Brains: An Arduino Nano sitting on a green screw-terminal expansion board for easy wiring.\n- The Muscle: A neat row of four ULN2003 stepper driver boards mounted directly to the side of the chassis.\n- The Actuators: Four 28BYJ-48 motors (Two for the Y-axis gantry, one for the X-axis carriage, and one for the Z-axis pen lift).\n\n**The Motion System: Rack and Pinion**\nSince I refused to use GT2 timing belts, I had to get creative. I integrated gear racks directly into the 3D printed base and the X-axis gantry.\n\nI printed small pinion gears that press-fit directly onto the keyed shafts of the 28BYJ-48 motors. As the motors spin, they physically drive themselves along the printed teeth.\n\nBecause 3D printed sliding channels have significantly more friction than metal bearings, pushing a gantry from just one side would cause it to bind and skew. To solve this, I used dual Y-axis motors (one on the left, one on the right). They work in perfect unison to push the heavy gantry up and down the bed without jamming.\n\n**The Z-Axis Pen Lift**\nInstead of a servo, I used a fourth 28BYJ-48 motor mounted sideways on the toolhead. It uses a smaller printed gear to drive a vertical rack up and down, raising and lowering the pen onto the A4 paper.\n\n**Lessons Learned & Why I Upgraded**\nThis machine was an incredible proof of concept. I had to write custom Python software to handle the kinematics, calculate steps-per-millimeter based on gear pitch, and manage the communication protocol.\n\nHowever, it taught me exactly why industrial machines use the hardware they do:\n- Backlash: 3D printed gears interacting with 3D printed racks inherently have \"play\" or slack. When the motors change direction, there is a small gap before the teeth catch, leading to slight inaccuracies in the drawing. (I actually wrote a software backlash-compensation matrix to fix this!).\n- The 28BYJ-48 Limits: These motors have tiny plastic reduction gears inside them. If the 3D printed carriage binds or hits a hard stop, the internal plastic teeth sheer off instantly. You hear a sad click-click-click sound, and the motor is dead.\n\n**The Stepping Stone**\nThis 100% 3D printed machine was the perfect stepping stone. It taught me the fundamentals of CNC software, coordinate systems, and motor control. It ultimately paved the way for my current build: a high-speed, CoreXY (T-Bot) AxiDraw clone using NEMA 17s and GRBL.\n\nBut there is still something incredibly satisfying about watching a machine draw when you know every single gear and rail was born on your print bed.",
    thumbnail_image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    gallery_images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&q=80&w=1200"
    ],
    tags: ["3D Printing", "Hardware", "Kinematics", "Python"],
    github_link: "https://github.com"
  },
  {
    id: "custom-3d-printer",
    title: "Voron-inspired 3D Printer",
    description: "A fully enclosed, custom-built 3D printer featuring a Voron-style gantry and Klipper firmware.",
    details_text: "Designed from the ground up for high-temperature materials like ABS and Nylon. The printer features a completely custom toolhead, direct drive extrusion, and is powered by Klipper running on a Raspberry Pi. It integrates an accelerometer for input shaping to eliminate ringing at high accelerations.",
    thumbnail_image: "https://images.unsplash.com/photo-1631558774797-29177aeb073e?auto=format&fit=crop&q=80&w=800",
    gallery_images: [
      "https://images.unsplash.com/photo-1631558774797-29177aeb073e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1631558774797-c81600b46eb2?auto=format&fit=crop&q=80&w=1200"
    ],
    tags: ["3D Printing", "Klipper", "Python", "CAD"],
    github_link: "https://github.com"
  },
  {
    id: "cnc-router-v2",
    title: "Desktop CNC Router V2",
    description: "An upgrade to my previous desktop CNC, featuring ball screws and a 1.5kW water-cooled spindle.",
    details_text: "The V2 design vastly improves rigidity by migrating from belt drive to C7 ball screws on all axes. Powered by GRBL on an Arduino Mega, it's capable of milling aluminum and hard plastics with precision. The custom enclosure features acoustic dampening for quieter operation.",
    thumbnail_image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800",
    gallery_images: [
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1504917595217-d4ce5eb9681c?auto=format&fit=crop&q=80&w=1200"
    ],
    tags: ["CNC", "Machining", "Hardware", "GRBL"],
    github_link: "https://github.com"
  },
  {
    id: "gcode-sender-ui",
    title: "G-Code Sender Dashboard",
    description: "A sleek, responsive web interface for sending G-Code to CNC machines over WebSerial.",
    details_text: "To move away from clunky native apps, I developed this web-based G-code sender. It connects directly to serial devices via the Web Serial API and features real-time toolpath visualization, DRO (Digital Read Out), and macro support. Built with React and Three.js.",
    thumbnail_image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    gallery_images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1580983546522-834c9c2c62c3?auto=format&fit=crop&q=80&w=1200"
    ],
    tags: ["Software", "React", "WebSerial"],
    github_link: "https://github.com"
  }
];
