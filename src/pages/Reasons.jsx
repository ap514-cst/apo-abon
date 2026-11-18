import {useRef,useState} from 'react';import {motion,AnimatePresence} from 'framer-motion';import FloatingHearts from '../components/effects/FloatingHearts';import HeartButton from '../components/common/HeartButton';import {loveData as d} from '../data/loveData'
function Card({r,i}){const [f,setF]=useState(false)
 return(<motion.button initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.12,duration:.5+i*.05}} onClick={()=>setF(!f)} aria-pressed={f} className="h-44 [perspective:900px] text-center">
  <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]" style={{transform:f?'rotateY(180deg)':'none'}}>
   <div className="glass absolute inset-0 grid place-items-center [backface-visibility:hidden]"><span className="font-display text-5xl text-rose glow">{i+1}</span><span className="absolute bottom-3 text-xs tracking-widest text-softpink">TAP TO REVEAL</span></div>
   <div className="absolute inset-0 grid place-items-center p-4 bg-gradient-to-br from-wine to-rose/60 border border-gold/50 [backface-visibility:hidden] [transform:rotateY(180deg)]"><div><p className="font-script text-2xl">{r.en}</p><p className="text-sm text-gold mt-2">{r.bn}</p></div></div></div></motion.button>)}
export default function Reasons(){const [msg,setMsg]=useState(''),last=useRef(-1),L=d.loveReasons.length
 const sweet=()=>{let k;do{k=Math.random()*d.sweetMessages.length|0}while(k===last.current&&d.sweetMessages.length>1);last.current=k;setMsg(d.sweetMessages[k])}
 return(<section className="relative px-5 md:px-12 py-16"><FloatingHearts/><div className="relative z-10 max-w-5xl mx-auto text-center">
  <h1 className="font-display text-4xl md:text-5xl glow">{L>=100?'100':L} Little Reasons Why I Love You</h1>
  <p className="font-script text-2xl text-softpink mt-2 mb-10">Every little thing about you makes you special.</p>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{d.loveReasons.map((r,i)=><Card key={i} r={r} i={i}/>)}</div>
  <div className="mt-12"><HeartButton onClick={sweet}>TELL ME SOMETHING SWEET</HeartButton>
   <div className="min-h-[4rem] mt-6" aria-live="polite"><AnimatePresence mode="wait"><motion.p key={msg} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0}} className="font-script text-3xl text-gold">{msg}</motion.p></AnimatePresence></div></div></div></section>)}
