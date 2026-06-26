---
id: "3d-printed-plotter"
title: "100% 3D Printed Rack & Pinion Plotter"
description: "My very first plotter design—a fully 3D printed, dual-Y rack and pinion machine built using 28BYJ-48 stepper motors with almost zero non-printed hardware."
thumbnail_image: "Assembly_1.png"
gallery_images:
  - "Assembly_1.png"
  - ""
tags: ["3D Printing", "Hardware", "Kinematics", "Python"]
github_link: "https://github.com"
---

Every CNC journey has to start somewhere. Before diving into complex CoreXY kinematics, expensive NEMA steppers, and metal linear rails, I wanted to see if I could build a working pen plotter using nothing but PLA and the absolute cheapest electronics available.

This is my very first plotter design—a fully 3D printed, dual-Y rack and pinion machine with almost zero non-printed hardware.

### The Goal: Zero "Vitamins"
In the 3D printing community, non-printed hardware (like screws, belts, metal rods, and bearings) are called "vitamins." My goal for this initial build was to keep the vitamin count as close to zero as absolutely possible.

If you look at the CAD, you'll notice there are no timing belts and no metal linear rails. Everything structural and mechanical is pushed out of a 3D printer nozzle.

### The Electronics
To keep costs incredibly low, I designed this around the ubiquitous (and cheap) 28BYJ-48 unipolar stepper motors.
- **The Brains**: An Arduino Nano sitting on a green screw-terminal expansion board for easy wiring.
- **The Muscle**: A neat row of four ULN2003 stepper driver boards mounted directly to the side of the chassis.
- **The Actuators**: Four 28BYJ-48 motors (Two for the Y-axis gantry, one for the X-axis carriage, and one for the Z-axis pen lift).

[Wiring Diagram](Wiring.jpg)

### The Motion System: Rack and Pinion
Since I refused to use GT2 timing belts, I had to get creative. I integrated gear racks directly into the 3D printed base and the X-axis gantry.

I printed small pinion gears that press-fit directly onto the keyed shafts of the 28BYJ-48 motors. As the motors spin, they physically drive themselves along the printed teeth.

Because 3D printed sliding channels have significantly more friction than metal bearings, pushing a gantry from just one side would cause it to bind and skew. To solve this, I used dual Y-axis motors (one on the left, one on the right). They work in perfect unison to push the heavy gantry up and down the bed without jamming.

### The Z-Axis Pen Lift
Instead of a servo, I used a fourth 28BYJ-48 motor mounted sideways on the toolhead. It uses a smaller printed gear to drive a vertical rack up and down, raising and lowering the pen onto the A4 paper.

### Lessons Learned & Why I Upgraded
This machine was an incredible proof of concept. I had to write custom Python software to handle the kinematics, calculate steps-per-millimeter based on gear pitch, and manage the communication protocol.

However, it taught me exactly why industrial machines use the hardware they do:
- **Backlash**: 3D printed gears interacting with 3D printed racks inherently have "play" or slack. When the motors change direction, there is a small gap before the teeth catch, leading to slight inaccuracies in the drawing. (I actually wrote a software backlash-compensation matrix to fix this!).
- **The 28BYJ-48 Limits**: These motors have tiny plastic reduction gears inside them. If the 3D printed carriage binds or hits a hard stop, the internal plastic teeth sheer off instantly. You hear a sad click-click-click sound, and the motor is dead.

### The Stepping Stone
This 100% 3D printed machine was the perfect stepping stone. It taught me the fundamentals of CNC software, coordinate systems, and motor control. It ultimately paved the way for my current build: a high-speed, CoreXY (T-Bot) AxiDraw clone using NEMA 17s and GRBL.

But there is still something incredibly satisfying about watching a machine draw when you know every single gear and rail was born on your print bed.
