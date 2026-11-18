import {motion} from 'framer-motion';import {BigHeart} from './HeartButton'
export default function LoadingScreen(){return <motion.div className="fixed inset-0 z-[100] bg-midnight grid place-items-center" exit={{opacity:0}} transition={{duration:.8}} role="status" aria-label="Loading">
 <div className="text-center"><BigHeart className="w-24 h-24"/><p className="font-script text-3xl mt-6 text-softpink">Loading our universe…</p></div></motion.div>}
