import {useEffect,useRef,useState} from 'react';import {motion,AnimatePresence} from 'framer-motion';import Confetti from 'react-confetti'
import StarField from '../components/effects/StarField';import HeartButton,{BigHeart} from '../components/common/HeartButton';import useReducedMotion from '../hooks/useReducedMotion';import {loveData as d} from '../data/loveData'
function Fireworks({fire}){const r=useRef()
 useEffect(()=>{if(!fire)return;const c=r.current,x=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;let P=[],id,n=0
  const burst=()=>{const cx=Math.random()*c.width*.8+c.width*.1,cy=Math.random()*c.height*.4+60,col=['#E85D85','#F1D6A8','#D9B6E8','#FFB6C9'][Math.random()*4|0];for(let i=0;i<40;i++){const a=i/40*6.28,s=Math.random()*3+1.5;P.push({x:cx,y:cy,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:60,col})}}
  const iv=setInterval(()=>{burst();if(++n>5)clearInterval(iv)},350)
  const loop=()=>{x.clearRect(0,0,c.width,c.height);P=P.filter(p=>p.l>0);P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.04;p.l--;x.globalAlpha=p.l/60;x.fillStyle=p.col;x.fillRect(p.x,p.y,3,3)});id=requestAnimationFrame(loop)};loop()
  return()=>{clearInterval(iv);cancelAnimationFrame(id)}},[fire])
 return <canvas ref={r} aria-hidden="true" className="fixed inset-0 pointer-events-none z-30"/>}
export default function Surprise(){const [open,setOpen]=useState(false),[fire,setFire]=useState(0),[msg,setMsg]=useState(''),r=useReducedMotion()
 const openBox=()=>{if(open)return;setOpen(true);if(!r)setFire(1)}
 return(<section className="relative min-h-screen grid place-items-center px-5 py-16 text-center overflow-hidden"><StarField density={.6}/>
  {open&&!r&&<Confetti recycle={false} numberOfPieces={350} colors={['#E85D85','#F1D6A8','#FFB6C9','#D9B6E8']} style={{zIndex:35}}/>}<Fireworks fire={fire}/>
  <div className="relative z-10">
   {!open?(<><h1 className="font-display text-4xl mb-10 glow">A Little Surprise</h1>
    <button onClick={openBox} aria-label="Open the gift box" className="relative mx-auto block w-48 h-48 bob hover:scale-105 transition">
     <span className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-br from-rose to-wine shadow-[0_0_50px_#E85D85]"/><span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-32 bg-gold shadow-[0_0_16px_#F1D6A8]"/>
     <span className="absolute top-8 -inset-x-2 h-16 bg-gradient-to-br from-softpink to-rose"/><span className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-16 bg-gold"/><span className="absolute top-0 left-1/2 -translate-x-1/2 text-4xl">🎀</span></button>
    <p className="mt-8 text-softpink">Tap the gift ✨</p></>):(
   <motion.div initial={{scale:.3,opacity:0}} animate={{scale:1,opacity:1}} transition={{type:'spring',damping:12}}>
    <BigHeart className="w-32 h-32"/><h1 className="font-display font-black text-3xl md:text-5xl mt-6 glow">ABON, YOU ARE MY FAVORITE PERSON! ❤️</h1>
    <p className="mt-3 text-lavender">তোমার হাসিটা সবসময় এমনই সুন্দর থাকুক।</p>
    <div className="flex flex-wrap justify-center gap-3 mt-8">{d.surpriseMessages.map(s=><HeartButton key={s.label} onClick={()=>setMsg(s.en)}>{s.label}</HeartButton>)}</div>
    <div className="min-h-[4rem] mt-6" aria-live="polite"><AnimatePresence mode="wait"><motion.p key={msg} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0}} className="font-script text-3xl text-gold">{msg}</motion.p></AnimatePresence></div>
    <button className="text-sm text-softpink underline mt-4" onClick={()=>{setOpen(false);setMsg('');setFire(0)}}>Close the box</button></motion.div>)}</div></section>)}
