import {useEffect,useState} from 'react';import {motion} from 'framer-motion';import {Heart} from 'lucide-react'
import FloatingHearts from '../components/effects/FloatingHearts';import HeartButton from '../components/common/HeartButton';import {loveData as d} from '../data/loveData'
export default function LoveLetter(){const [st,setSt]=useState('closed'),[n,setN]=useState(0),txt=d.loveLetter.en
 useEffect(()=>{if(st!=='open'){setN(0);return}const id=setInterval(()=>setN(k=>{if(k>=txt.length){clearInterval(id);return k}return k+1}),35);return()=>clearInterval(id)},[st,txt])
 const openIt=()=>{if(st!=='closed')return;setSt('opening');setTimeout(()=>setSt('open'),900)}
 return(<section className="relative min-h-screen grid place-items-center px-5 py-16"><FloatingHearts/>
  <div className="relative z-10 w-full max-w-xl text-center">
  {st!=='open'?(<><h1 className="font-display text-4xl mb-10 glow">A Letter For {d.girlfriendName}</h1>
   <button onClick={openIt} aria-label="Open the envelope" className="relative mx-auto block w-72 h-48 [perspective:900px] hover:scale-105 transition">
    <div className="absolute inset-0 bg-gradient-to-br from-wine to-burgundy border border-gold/50 shadow-[0_0_50px_rgba(232,93,133,.4)]"/>
    <motion.div className="absolute top-0 inset-x-0 h-24 bg-rose/70 [transform-origin:top]" style={{clipPath:'polygon(0 0,100% 0,50% 100%)'}} animate={{rotateX:st==='opening'?180:0,opacity:st==='opening'?.3:1}} transition={{duration:.8}}/>
    <span className="absolute left-1/2 top-[84px] -translate-x-1/2 w-12 h-12 rounded-full bg-rose grid place-items-center shadow-[0_0_20px_#E85D85]"><Heart size={22} fill="#FFF5F7"/></span></button>
   <p className="mt-8 text-softpink">Tap the seal to open</p></>):(
   <motion.div initial={{y:80,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.9}} className="glass p-8 text-left">
    <p className="font-script text-2xl md:text-3xl leading-relaxed whitespace-pre-line min-h-[18rem]" aria-label={txt}>{txt.slice(0,n)}<span className="animate-pulse">|</span></p>
    <p className="mt-6 pt-4 border-t border-softpink/20 text-lavender leading-loose">{d.loveLetter.bn}</p>
    <div className="text-center mt-6"><HeartButton onClick={()=>setSt('closed')}>READ AGAIN</HeartButton></div></motion.div>)}
  </div></section>)}
