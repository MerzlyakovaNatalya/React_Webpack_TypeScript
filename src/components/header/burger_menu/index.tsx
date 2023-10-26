import React, { useRef } from 'react'
import { motion, useCycle } from "framer-motion";
import useDimensions from "./use_dimensions";
import MenuToggle from "./menu_toggle";
import Navigation from "./navigation";
import style from './styles.module.scss'

const sidebar = {
    open: (height = 500) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

const BurgerMenu: React.FC = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
  
    return (
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className={style.burger_menu_nav}
      >
        <motion.div className={style.burger_menu_background} variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    );
}

export default BurgerMenu