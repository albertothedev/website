"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";

import styles from "@/styles/ThemeToggleButton.module.scss";

type Theme = "light" | "dark" | "system";

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

  const capitalizeFirstLetter = <T extends string>(string: T) =>
    (string[0].toUpperCase() + string.slice(1)) as Capitalize<typeof string>;

  const getButtonDescription = (type: Theme) => {
    const description =
      theme === type
        ? `${capitalizeFirstLetter(type)} mode`
        : `Change to ${type} mode`;

    return {
      title: description,
      ["aria-label"]: description,
    };
  };

  return (
    <div className={styles.ThemeToggleButton}>
      <button
        {...getButtonDescription("light")}
        className={`${styles.button} ${theme === "light" ? styles.active : ""}`}
        onClick={() => setTheme("light")}
      >
        <FontAwesomeIcon size="lg" icon={faSun} />
      </button>

      <button
        {...getButtonDescription("system")}
        className={`${styles.button} ${
          theme === "system" ? styles.active : ""
        }`}
        onClick={() => setTheme("system")}
      >
        <FontAwesomeIcon size="lg" icon={faDisplay} />
      </button>

      <button
        {...getButtonDescription("dark")}
        className={`${styles.button} ${theme === "dark" ? styles.active : ""}`}
        onClick={() => setTheme("dark")}
      >
        <FontAwesomeIcon size="lg" icon={faMoon} />
      </button>
    </div>
  );
}
