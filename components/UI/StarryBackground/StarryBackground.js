// components/StarryBackground.js
import { useEffect, useRef } from "react";
import styles from "./StarryNight.module.css";

const StarryBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing stars
    container.innerHTML = "";

    // Create stars
    const starCount = 200; // Adjust for density
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = styles.star;

      // Random positioning
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      // Random size (0.5px to 2px)
      const size = Math.random() * 1.5 + 0.5;

      // Random opacity (0.3 to 1)
      const opacity = Math.random() * 0.7 + 0.3;

      // Random animation duration (2s to 5s)
      const duration = Math.random() * 3 + 2;

      const delay = Math.random() * 5;

      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.opacity = opacity;
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = `${delay}s`;

      container.appendChild(star);
      stars.push(star);
    }

    return () => {
      stars.forEach((star) => star.remove());
    };
  }, []);

  return <div ref={containerRef} className={styles.starryContainer} />;
};

export default StarryBackground;
