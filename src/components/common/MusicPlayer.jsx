import {Volume2,VolumeX} from 'lucide-react'
export default function MusicPlayer({music}){const {playing,toggle,missing}=music
 return <button onClick={toggle} aria-pressed={playing} aria-label={playing?'Pause music':'Play music'} className="flex items-center gap-3 text-sm text-softpink hover:text-gold transition">
 {playing?<Volume2 size={18}/>:<VolumeX size={18}/>}<span>{missing?'Add song to public/music':playing?'Music on':'Music off'}</span></button>}
