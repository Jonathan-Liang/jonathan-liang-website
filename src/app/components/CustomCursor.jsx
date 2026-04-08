"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Core cursor position mapped exactly to the mouse
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    // Check if device is touch or doesn't have fine pointer
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const moveMouse = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Detect hovering over clickable elements
    const updateHoverState = (e) => {
      const target = e.target;
      
      // Quickly check specific tags/roles or if there's a pointer class anywhere up the tree
      const isClickable = 
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('input') !== null ||
        target.closest('textarea') !== null ||
        target.closest('select') !== null ||
        target.closest('label') !== null ||
        target.closest('[role="button"]') !== null ||
        target.closest('[role="link"]') !== null ||
        target.closest('.cursor-pointer') !== null || // Catch Tailwind explicit pointer elements
        window.getComputedStyle(target).cursor === 'pointer' ||
        window.getComputedStyle(target).cursor === 'text';
      
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mousemove", updateHoverState);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mousemove", updateHoverState);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    if (!isTouchDevice && !shouldReduceMotion) {
      document.body.style.cursor = "none";
      
      const style = document.createElement("style");
      style.id = "custom-cursor-style";
      style.innerHTML = `
        * {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.body.style.cursor = "auto";
        const styleElement = document.getElementById("custom-cursor-style");
        if (styleElement) {
          document.head.removeChild(styleElement);
        }
      };
    }
  }, [isTouchDevice, shouldReduceMotion]);

  if (isTouchDevice || shouldReduceMotion) {
    return null;
  }

  // Variants for the core constant cursor (always visible)
  const dotVariants = {
    default: {
      opacity: 0.95,
      scale: 1,
      backgroundColor: "rgba(191, 97, 106, 1)", // Nord 11 (Aurora Red)
    },
    hover: {
      opacity: 1, // Becomes fully solid/stronger
      scale: 1.25, // Slight swell
      backgroundColor: "rgba(191, 97, 106, 1)", 
    },
    clicked: {
      opacity: 1,
      scale: 0.8, // Quick compress
      backgroundColor: "rgba(191, 97, 106, 1)", 
    }
  };

  // Variants for the ripple accent (stays attached to cursor, expands on click)
  const rippleVariants = {
    default: {
      backgroundColor: "transparent",
      border: "0px solid rgba(191, 97, 106, 0)",
      opacity: 0,
      scale: 1,
    },
    hover: {
      backgroundColor: "rgba(191, 97, 106, 0.1)", // Very faint backing
      border: "1.5px solid rgba(191, 97, 106, 0.4)", // Define edge
      opacity: 1,
      scale: 1.8, 
    },
    clicked: {
      backgroundColor: "transparent", 
      border: "2px solid rgba(191, 97, 106, 0.8)", // Crisp pulse
      scale: 2.8, // Clearly visible expansion
      opacity: 0, // Fades out like a ripple
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-normal"
      style={{
        x: cursorX,
        y: cursorY,
        width: 48,
        height: 48,
        marginLeft: -24, // Center exactly at cursor
        marginTop: -24,  // Center exactly at cursor
        display: isVisible ? "block" : "none",
      }}
    >
      {/* The attached ripple ring */}
      <motion.div
        className="absolute rounded-full"
        style={{ width: 24, height: 24, left: 12, top: 12 }} // Perfect center inside the 48x48 parent (48-24)/2
        variants={rippleVariants}
        animate={isClicked ? "clicked" : isHovering ? "hover" : "default"}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      
      {/* The main constant cursor */}
      <motion.div
        className="absolute rounded-full"
        style={{ width: 12, height: 12, left: 18, top: 18 }} // Perfect center inside the 48x48 parent (48-12)/2
        variants={dotVariants}
        animate={isClicked ? "clicked" : isHovering ? "hover" : "default"}
        transition={{ duration: 0.15 }}
      />
    </motion.div>
  );
}