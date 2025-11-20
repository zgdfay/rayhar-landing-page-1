"use client";

import { Variants } from "framer-motion";

export const viewportMotion = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -10% 0px",
};

export const viewportTight = {
  once: true,
  amount: 0.1,
  margin: "0px 0px -30% 0px",
};

export const sectionFade: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = (delayChildren = 0.08, staggerChildren = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});

export const itemFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const fadeInUpSlow: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

