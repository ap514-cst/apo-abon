import {useState} from 'react';import {useNavigate} from 'react-router-dom';import {ChevronDown} from 'lucide-react'
import StarField from '../components/effects/StarField';import RosePetals from '../components/effects/RosePetals'
import HeartButton,{BigHeart} from '../components/common/HeartButton';import RevealText from '../components/common/RevealText'
import useReducedMotion from '../hooks/useReducedMotion';import {loveData as d} from '../data/loveData'
export default function Home(){const nav=useNavigate(),[go,setGo]=useState(false),r=useReducedMotion()
 const enter=()=>{if(r)return nav('/love-letter');setGo(true);setTimeout(()=>nav('/love-letter'),1100)}
 return(<section className="relative min-h-screen grid place-items-center text-center px-6 overflow-hidden">
  <StarField/><RosePetals/>
  <div className="relative z-10"><BigHeart go={go}/>
   <h1 className="font-display font-black text-5xl md:text-7xl mt-8 glow"><RevealText text={`HEY ${d.girlfriendName.toUpperCase()} ❤️`}/></h1>
   <p className="font-script text-3xl md:text-4xl text-softpink mt-4">A Little Universe Made Just For You.</p>
   <p className="mt-3 text-lavender">তোমার জন্য তৈরি আমার ছোট্ট একটা পৃথিবী।</p>
   <div className="mt-10"><HeartButton onClick={enter}>ENTER OUR WORLD</HeartButton></div></div>
  <ChevronDown className="absolute bottom-6 text-softpink bob" aria-hidden="true"/></section>)}
