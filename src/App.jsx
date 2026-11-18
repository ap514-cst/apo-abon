import {useEffect,useState} from 'react';import {Routes,Route,useLocation} from 'react-router-dom';import {AnimatePresence,motion,useScroll,useSpring} from 'framer-motion'
import Sidebar from './components/layout/Sidebar';import PageTransition from './components/layout/PageTransition';import LoadingScreen from './components/common/LoadingScreen'
import CursorEffect from './components/effects/CursorEffect';import useMusic from './hooks/useMusic';import {loveData as d} from './data/loveData'
import Home from './pages/Home';import LoveLetter from './pages/LoveLetter';import Memories from './pages/Memories';import Reasons from './pages/Reasons';import Surprise from './pages/Surprise';import Forever from './pages/Forever'
export default function App(){
 const loc=useLocation(),music=useMusic(d.musicUrl),[loading,setL]=useState(true),[hearts,setH]=useState([])
 const {scrollYProgress}=useScroll(),sx=useSpring(scrollYProgress)
 useEffect(()=>{const t=setTimeout(()=>setL(false),1800);return()=>clearTimeout(t)},[])
 useEffect(()=>{window.scrollTo(0,0);document.title=d.websiteTitle},[loc.pathname])
 const click=e=>{if(!['/love-letter','/surprise'].includes(loc.pathname))return;const id=Math.random();setH(h=>[...h,{id,x:e.clientX,y:e.clientY}]);setTimeout(()=>setH(h=>h.filter(i=>i.id!==id)),1000)}
 return(<div onClick={click}>
  <AnimatePresence>{loading&&<LoadingScreen/>}</AnimatePresence>
  <motion.div style={{scaleX:sx}} className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-rose to-gold z-[80]"/>
  <CursorEffect/><Sidebar music={music}/>
  <div className="lg:ml-64 pt-14 lg:pt-0"><AnimatePresence mode="wait"><PageTransition key={loc.pathname}>
   <Routes location={loc}><Route path="/" element={<Home/>}/><Route path="/love-letter" element={<LoveLetter/>}/><Route path="/memories" element={<Memories/>}/>
   <Route path="/why-i-love-you" element={<Reasons/>}/><Route path="/surprise" element={<Surprise/>}/><Route path="/forever" element={<Forever/>}/><Route path="*" element={<Home/>}/></Routes>
  </PageTransition></AnimatePresence></div>
  {hearts.map(h=><motion.span key={h.id} className="fixed z-[65] pointer-events-none text-rose text-2xl" style={{left:h.x,top:h.y}} initial={{opacity:1,y:0}} animate={{opacity:0,y:-80}} transition={{duration:1}}>❤</motion.span>)}
 </div>)}
