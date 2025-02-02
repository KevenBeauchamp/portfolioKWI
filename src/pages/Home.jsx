import { motion, useMotionValue, useTransform, animate } from "framer-motion";
  import classes from "../css/Home.module.css"
import { useEffect } from "react";
import pdf from "../assets/Keven_BEAUCHAMP.pdf";
export default function HomePage(){
    const text = "Software Developer".split(" ");
    const textIndex = useMotionValue(0);
  const texts = [
    " Software Developer    ",
    " Front-End Developer   ",
    " Back-End Developer  ",
    "Network Administrator  ",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);
  const onButtonClick = () => {
    const pdfUrl = pdf;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume_Keven.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 2.45,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      delay: 0.75,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
  }, []);
    return(
       
            <motion.div
                initial= {{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.5, duration:0.5}}            
                className={classes.content}
            >
                
                <h1>Hi, I'm <motion.span
                initial= {{opacity:0}}
                        animate={{
                            fontSize: "50px", color: '#0000ff',opacity:1
                        }}
                        transition={{delay:1.7, duration:1}}
                >Keven Beauchamp</motion.span></h1> 
                <h3>  I am  &nbsp; 
                    <motion.span className="inline">{displayText}</motion.span>
                    &nbsp;  based in USA</h3>
                <p>    &nbsp;
                <motion.button
                  onClick={onButtonClick}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{
                    scale: 1.1,
                    backgroundColor: "#0000ff",
                    color: "black",
                    }}
                    transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                    className="bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide"
                >
                    Download CV
                </motion.button>
                </p>
            </motion.div>
        
    )
}