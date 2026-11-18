import {motion} from 'framer-motion'
export default function PageTransition({children}){return <motion.main initial={{opacity:0,filter:'blur(8px)'}} animate={{opacity:1,filter:'blur(0px)'}} exit={{opacity:0,filter:'blur(8px)'}} transition={{duration:.5}} className="relative min-h-screen">{children}</motion.main>}
