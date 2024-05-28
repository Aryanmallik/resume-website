'use client'
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "@/src/styles/scroll.module.css";

const ScrollDownArrow = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 400;

    setIsScrolled(currentScrollY > scrollThreshold);
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const iconSize = "2x";

  return (
    <div
      className={`${styles["scroll-down-arrow"]} ${
        isScrolled ? styles["hidden"] : ""
      }`}
      onClick={scrollDown}
    >
      <FontAwesomeIcon icon={faChevronDown} size={iconSize} color="white" />
    </div>
  );
};

export default ScrollDownArrow;


