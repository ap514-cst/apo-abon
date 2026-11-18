import {useEffect,useRef} from 'react';import useReducedMotion from '../../hooks/useReducedMotion'
export default function CursorEffect(){const ref=useRef(),reduced=useReducedMotion()
 useEffect(()=>{if(reduced||!matchMedia('(pointer: fine)').matches)return;const c=ref.current,x=c.getContext('2d');let pts=[],id
  const rs=()=>{c.width=innerWidth;c.height=innerHeight};rs();addEventListener('resize',rs)
  const mv=e=>pts.push({x:e.clientX,y:e.clientY,l:1});addEventListener('mousemove',mv)
  const loop=()=>{x.clearRect(0,0,c.width,c.height);pts=pts.filter(p=>p.l>0);pts.forEach(p=>{p.l-=.03;x.globalAlpha=p.l;x.fillStyle='#FFB6C9';x.shadowColor='#E85D85';x.shadowBlur=14;x.beginPath();x.arc(p.x,p.y,3*p.l+1,0,6.28);x.fill()});id=requestAnimationFrame(loop)};loop()
  return()=>{cancelAnimationFrame(id);removeEventListener('resize',rs);removeEventListener('mousemove',mv)}},[reduced])
 return <canvas ref={ref} aria-hidden="true" className="fixed inset-0 pointer-events-none z-[60] hidden lg:block"/>}
