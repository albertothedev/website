"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";

import styles from "@/styles/ThemeToggleButton.module.scss";

export default function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.ThemeToggleButton}>
      <button
        title="Change to light mode"
        aria-label="Change to light mode"
        className={`${styles.button} ${theme === "light" ? styles.active : ""}`}
        onClick={() => setTheme("light")}
      >
        <FontAwesomeIcon size="lg" icon={faSun} />
      </button>

      <button
        title="Change to system mode"
        aria-label="Change to system mode"
        className={`${styles.button} ${
          theme === "system" ? styles.active : ""
        }`}
        onClick={() => setTheme("system")}
      >
        <FontAwesomeIcon size="lg" icon={faDisplay} />
      </button>

      <button
        title="Change to dark mode"
        aria-label="Change to dark mode"
        className={`${styles.button} ${theme === "dark" ? styles.active : ""}`}
        onClick={() => setTheme("dark")}
      >
        <FontAwesomeIcon size="lg" icon={faMoon} />
      </button>
    </div>
  );
}
