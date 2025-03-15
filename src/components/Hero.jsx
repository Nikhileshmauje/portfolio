import { motion } from "framer-motion"
import { HERO_CONTENT } from "../constants";
import profile from "../assets/Profile-pic.jpg"
import resume from "../assets/Nikhilesh Resume.pdf"

const textVariants ={
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition:{duration: 0.8, ease: "easeOut"}}
}

const containerVariants ={
    hidden: {opacitiy: 1},
    visible :{
        opacity: 1,
        transition :{
            staggerChildren: 0.3
        }
    }
}

const imageVariants={
    image: {clipPath: "inset(0 50% 0 50%)"},
    visible: {
        clipPath:"inset(0 0% 0 0%",
        transition:{duration: 1.2, ease: "easeInOut"}
    }
}

const Hero = () => {
  return (
    <section>
        <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
            <motion.div className="w-full md:w-1/2 p-8" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.h1 
                className="text-2xl md:text-3xl lg:text-5xl my-14" 
                variants={textVariants}>{HERO_CONTENT.greeting}
                </motion.h1>
                <motion.p 
                className="text-xl md:text-xl lg:text-2xl mb-4" 
                variants={textVariants}>{HERO_CONTENT.introduction}
                </motion.p>
                <motion.p 
                className="text-xl md:text-xl lg:text-2xl" 
                variants={textVariants}>{HERO_CONTENT.description}
                </motion.p>
                <motion.a className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl cursor-pointer"
                download="Nikhilesh Resume.pdf"
                target="_blank"
                variants={textVariants}
                href={resume}>
                    {HERO_CONTENT.resumeLinkText}
                </motion.a>
            </motion.div>
            <motion.div className="w-full md:w-1/3 p-8"
            initial="hidden"
            animate="visible"
            variants={imageVariants}>
                <img src={profile} alt="profile image" width={550} height={550} className="rounded-3xl" />
            </motion.div>
        </div>
    </section>
  )
}

export default Hero