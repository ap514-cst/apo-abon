import {useState} from 'react';import {NavLink} from 'react-router-dom';import {AnimatePresence,motion} from 'framer-motion'
import {Sparkles,Mail,Camera,Heart,Gift,Infinity as Inf,Menu,X} from 'lucide-react'
import MusicPlayer from '../common/MusicPlayer';import {loveData as d} from '../../data/loveData'
const links=[['/','Our Universe',Sparkles],['/love-letter','Love Letter',Mail],['/memories','Our Memories',Camera],['/why-i-love-you','Why I Love You',Heart],['/surprise','Special Surprise',Gift],['/forever','Forever & Always',Inf]]
export default function Sidebar({music}){
 const [open,setOpen]=useState(false),[secret,setSecret]=useState(false)
 const nav=(<nav aria-label="Main" className="flex flex-col gap-1">{links.map(([to,l,I])=>(
  <NavLink key={to} to={to} end={to==='/'} onClick={()=>setOpen(false)} className={({isActive})=>`relative flex items-center gap-3 px-4 py-3 font-display transition ${isActive?'text-gold':'text-softpink hover:text-cream hover:translate-x-1'}`}>
  {({isActive})=>(<>{isActive&&<motion.span layoutId={`ind${open}`} className="absolute left-0 top-2 bottom-2 w-[3px] bg-rose shadow-[0_0_12px_#E85D85]"/>}<I size={18}/>{l}</>)}</NavLink>))}</nav>)
 const foot=(<div className="mt-auto px-4 pb-6 flex flex-col gap-4"><MusicPlayer music={music}/>
  <button onClick={()=>setSecret(true)} aria-label="A little secret" className="self-start opacity-25 hover:opacity-100 text-rose transition"><Heart size={16} fill="currentColor"/></button></div>)
 return (<>
  <aside className="glass hidden lg:flex fixed left-0 top-0 bottom-0 w-64 z-40 flex-col pt-10 !border-y-0 !border-l-0">
   <h1 className="font-script text-4xl px-4 mb-8 text-softpink glow">{d.websiteTitle}</h1>{nav}{foot}</aside>
  <header className="glass lg:hidden fixed top-0 inset-x-0 h-14 z-40 flex items-center justify-between px-4 !border-x-0 !border-t-0">
   <span className="font-script text-2xl text-softpink">{d.websiteTitle}</span>
   <button onClick={()=>setOpen(true)} aria-label="Open menu"><Menu/></button></header>
  <AnimatePresence>{open&&<motion.div className="fixed inset-0 z-50 bg-midnight/70" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setOpen(false)}>
   <motion.div onClick={e=>e.stopPropagation()} className="glass h-full w-72 flex flex-col pt-6 bg-midnight/90" initial={{x:-300}} animate={{x:0}} exit={{x:-300}} transition={{type:'spring',damping:26}}>
    <button onClick={()=>setOpen(false)} aria-label="Close menu" className="self-end mr-4 mb-4"><X/></button>{nav}{foot}</motion.div></motion.div>}</AnimatePresence>
  <AnimatePresence>{secret&&<motion.div className="fixed inset-0 z-[70] grid place-items-center bg-midnight/80 p-6" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSecret(false)} role="dialog" aria-modal="true" aria-label="Secret message">
   <motion.div onClick={e=>e.stopPropagation()} initial={{scale:.5,rotate:-6,opacity:0}} animate={{scale:1,rotate:0,opacity:1}} exit={{scale:.7,opacity:0}} transition={{type:'spring',damping:15}} className="glass max-w-md p-8 text-center">
    <Heart className="mx-auto text-rose mb-4" fill="currentColor"/><p className="font-script text-2xl leading-relaxed whitespace-pre-line">{d.secretMessage}</p>
    <button className="btn mt-6" onClick={()=>setSecret(false)}>CLOSE</button></motion.div></motion.div>}</AnimatePresence></>)}
