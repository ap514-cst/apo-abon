import {useState} from 'react';import {AnimatePresence,motion} from 'framer-motion';import {X} from 'lucide-react';import {loveData as d} from '../data/loveData'
export default function Memories(){const [sel,setSel]=useState(null)
 return(<section className="px-5 md:px-12 py-16">
  <h1 className="font-display text-4xl md:text-5xl text-center glow">Our Memories</h1>
  <p className="text-center font-script text-2xl text-softpink mt-2 mb-10">Swap the placeholders in loveData.js with your real photos.</p>
  <div className="columns-1 sm:columns-2 xl:columns-3 gap-5">{d.memories.map((m,i)=>(
   <motion.figure key={m.id} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:(i%3)*.12}} className="mb-5 break-inside-avoid group relative overflow-hidden border border-softpink/20">
    <button onClick={()=>setSel(m)} className="block w-full text-left" aria-label={`Open ${m.title}`}>
     <img src={m.image} alt={m.title} loading="lazy" className="w-full transition duration-700 group-hover:scale-110"/>
     <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-midnight/90 to-transparent"><b className="font-display">{m.title}</b>{m.date&&<span className="text-gold text-sm ml-2">{m.date}</span>}</figcaption></button></motion.figure>))}</div>
  <ol className="max-w-xl mx-auto mt-14 border-l border-rose/50 pl-6 space-y-5" aria-label="Memory timeline">{d.memories.map(m=>(
   <li key={m.id} className="relative"><span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-rose shadow-[0_0_10px_#E85D85]"/><b className="font-display text-gold">{m.title}</b>{m.date&&<span className="text-sm text-softpink ml-2">{m.date}</span>}<p className="text-sm opacity-80">{m.en}</p></li>))}</ol>
  <AnimatePresence>{sel&&<motion.div className="fixed inset-0 z-[70] bg-midnight/90 grid place-items-center p-4" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSel(null)} role="dialog" aria-modal="true" aria-label={sel.title}>
   <motion.div onClick={e=>e.stopPropagation()} initial={{scale:.85,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:.85,opacity:0}} className="max-w-lg w-full glass p-3 relative">
    <button onClick={()=>setSel(null)} aria-label="Close" className="absolute top-2 right-2 z-10 bg-midnight/70 p-1"><X/></button>
    <img src={sel.image} alt={sel.title} className="w-full max-h-[60vh] object-cover"/><div className="p-4 text-center"><h2 className="font-display text-2xl">{sel.title}</h2><p className="font-script text-xl text-softpink">{sel.en}</p><p className="text-lavender text-sm">{sel.bn}</p></div></motion.div></motion.div>}</AnimatePresence></section>)}
