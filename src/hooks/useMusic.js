import {useEffect,useRef,useState} from 'react'
export default function useMusic(url){const a=useRef(null),[playing,setP]=useState(false),[missing,setM]=useState(!url)
useEffect(()=>{if(!url)return;const au=new Audio(url);au.loop=true;au.volume=.4;au.onerror=()=>setM(true);a.current=au;return()=>au.pause()},[url])
const toggle=()=>{const au=a.current;if(!au||missing)return;if(playing){au.pause();setP(false)}else au.play().then(()=>setP(true)).catch(()=>setM(true))}
return{playing,toggle,missing}}
