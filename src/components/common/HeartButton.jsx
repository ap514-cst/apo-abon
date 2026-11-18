import {motion} from 'framer-motion'
export const BigHeart=({go=false,className='w-40 h-40 md:w-56 md:h-56'})=>(
 <div className="beat"><motion.svg viewBox="0 0 100 90" className={`${className} mx-auto`} style={{filter:'drop-shadow(0 0 30px #E85D85)'}} animate={go?{scale:40,opacity:0}:{scale:1,opacity:1}} transition={{duration:1.2,ease:'easeIn'}} aria-hidden="true">
 <defs><linearGradient id="hg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FFB6C9"/><stop offset="1" stopColor="#E85D85"/></linearGradient></defs>
 <path d="M50 85C10 55 0 35 0 22 0 8 11 0 24 0c10 0 20 6 26 16C56 6 66 0 76 0c13 0 24 8 24 22 0 13-10 33-50 63z" fill="url(#hg)"/></motion.svg></div>)
export default function HeartButton({children,onClick,className=''}){return <motion.button whileHover={{scale:1.05}} whileTap={{scale:.95}} onClick={onClick} className={`btn ${className}`}>{children}</motion.button>}
