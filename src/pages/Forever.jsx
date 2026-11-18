import {useState} from 'react';import {useNavigate} from 'react-router-dom';import {motion} from 'framer-motion'
import StarField from '../components/effects/StarField';import RosePetals from '../components/effects/RosePetals';import HeartButton,{BigHeart} from '../components/common/HeartButton';import useReducedMotion from '../hooks/useReducedMotion';import {loveData as d} from '../data/loveData'
export default function Forever(){const nav=useNavigate(),[go,setGo]=useState(false),r=useReducedMotion(),f=d.finalMessage
 const replay=()=>{if(r)return nav('/');setGo(true);setTimeout(()=>nav('/'),1100)}
 return(<section className="relative min-h-screen grid place-items-center px-5 py-16 text-center overflow-hidden"><StarField/><RosePetals/>
  <div className="relative z-10"><BigHeart go={go} className="w-48 h-48 md:w-64 md:h-64"/>
   <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{delay:.4,duration:1}} className="glass max-w-xl mx-auto -mt-8 p-8">
    <h1 className="font-display font-black text-4xl md:text-6xl glow">{f.title}</h1><h2 className="font-display text-3xl mt-2 text-softpink">{f.name}</h2>
    <p className="font-script text-2xl mt-4">{f.en}</p><p className="text-lavender mt-3">{f.bn}</p><p className="font-script text-3xl text-gold mt-6">{f.sign}</p></motion.div>
   <div className="mt-8"><HeartButton onClick={replay}>REPLAY OUR STORY</HeartButton></div></div></section>)}
