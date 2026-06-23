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
    id: "corexy-plotter",
    title: "CoreXY Pen Plotter",
    description: "Custom-designed high-speed CoreXY kinematics plotter built with aluminum extrusions and NEMA 17 steppers.",
    details_text: "This project explores the limits of CoreXY kinematics applied to pen plotting. The chassis is built using 2020 aluminum extrusions for rigidity, while custom 3D printed parts handle the motion system. Driven by an SKR Mini E3 and Marlin firmware, it achieves precision down to 0.1mm at high speeds.",
    thumbnail_image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&q=80&w=800",
    gallery_images: [
      "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
    ],
    tags: ["CoreXY", "Hardware", "Kinematics", "C++"],
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
