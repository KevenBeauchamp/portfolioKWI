import { NavLink } from "react-router-dom";
import classes from '../css/MainNavigation.module.css';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function MainNavigation(){
    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
            },
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
            },
        },
    }
    
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.1,backgroundColor: "#000000", color:"#000000", }}
                        whileTap={{ scale: 0.95 }}                   
                    >
                        <NavLink
                        to='/'
                        className={({isActive})=> isActive ? classes.active: undefined}
                        >
                            Home
                        </NavLink>
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.1,backgroundColor: "#000000", color:"#000000", }}
                        whileTap={{ scale: 0.95 }}  
                    >
                        <NavLink
                        to='/about'
                        className={({isActive})=> isActive ? classes.active: undefined}
                        >
                            About
                        </NavLink>
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.1,backgroundColor: "#000000", color:"#000000", }}
                        whileTap={{ scale: 0.95 }}  
                    >
                        <NavLink
                        to='/skills'
                        className={({isActive})=> isActive ? classes.active: undefined}
                        >
                            Skills
                        </NavLink>
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        whileHover={{ scale: 1.1,backgroundColor: "#000000", color:"#000000", }}
                        whileTap={{ scale: 0.95 }}  
                    >
                        <NavLink
                        to='/project'
                        className={({isActive})=> isActive ? classes.active: undefined}
                        >
                            Project
                        </NavLink>
                    </motion.li>
                    <motion.li 
                        variants={itemVariants}
                        whileHover={{ scale: 1.1,backgroundColor: "#000000", color:"#000000", }}
                        whileTap={{ scale: 0.95 }}  
                    >
                        <NavLink
                        to='/resume'
                        className={({isActive})=> isActive ? classes.active: undefined}
                        >
                            Resume
                        </NavLink>
                    </motion.li>
                    <motion.li 
                        variants={itemVariants}
                        whileHover={{ scale: 1.1,backgroundColor: "#000000", color:"#000000", }}
                        whileTap={{ scale: 0.95 }}  
                    >
                            <NavLink
                            to='/contact'
                            className={({isActive})=> isActive ? classes.active: undefined}
                            >
                                Contact
                            </NavLink>
                    </motion.li>
                </ul>
            </nav>
        </header>
      );
}