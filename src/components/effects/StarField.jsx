import {useEffect,useRef} from 'react';import useReducedMotion from '../../hooks/useReducedMotion'
export default function StarField({kind='stars',density=1}){
 const ref=useRef(),reduced=useReducedMotion()
 useEffect(()=>{const c=ref.current,x=c.getContext('2d');let w,h,id;const mob=innerWidth<768
  const n=Math.round({stars:140,petals:22,hearts:18}[kind]*density*(mob?.5:1))
  const rs=()=>{w=c.width=innerWidth;h=c.height=innerHeight};rs();addEventListener('resize',rs)
  const P=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.6+.4,s:Math.random()*.6+.2,p:Math.random()*6.28}))
  const draw=t=>{x.clearRect(0,0,w,h);P.forEach(o=>{
   if(kind==='stars'){x.globalAlpha=.4+.6*Math.abs(Math.sin(t/1200+o.p));x.fillStyle='#FFF5F7';x.beginPath();x.arc(o.x,o.y,o.r,0,6.28);x.fill();return}
   if(!reduced){o.y+=kind==='petals'?o.s:-o.s;o.x+=Math.sin(t/900+o.p)*.4;if(o.y>h+20)o.y=-20;if(o.y<-20)o.y=h+20}
   x.globalAlpha=.55;x.fillStyle=kind==='petals'?'#E85D85':'#FFB6C9'
   if(kind==='petals'){x.beginPath();x.ellipse(o.x,o.y,o.r*3+3,o.r*2+2,o.p+t/2000,0,6.28);x.fill()}
   else{x.font=`${o.r*8+8}px serif`;x.fillText('♥',o.x,o.y)}})
   if(!reduced)id=requestAnimationFrame(draw)}
  id=requestAnimationFrame(draw)
  return()=>{cancelAnimationFrame(id);removeEventListener('resize',rs)}},[kind,density,reduced])
 return <canvas ref={ref} aria-hidden="true" className="fixed inset-0 w-full h-full pointer-events-none z-0"/>}
