// Edit everything here. Put real photos in /public/images and use "/images/x.jpg".
const ph=(t,a,b,h)=>'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="${h}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="600" height="${h}" fill="url(#g)"/><text x="300" y="${h/2}" fill="#FFF5F7" font-size="28" text-anchor="middle" font-family="serif">${t}</text></svg>`)
const memories=[
 {id:1,title:'Memory One',date:'',en:'Add your first memory here.',bn:'এখানে তোমাদের প্রথম স্মৃতি লিখো।',image:ph('Your photo #1','#652044','#E85D85',700)},
 {id:2,title:'Memory Two',date:'',en:'Add a caption about a special moment.',bn:'একটি বিশেষ মুহূর্তের কথা লিখো।',image:ph('Your photo #2','#351027','#D9B6E8',500)},
 {id:3,title:'Memory Three',date:'',en:'Another beautiful moment goes here.',bn:'আরেকটি সুন্দর মুহূর্ত এখানে।',image:ph('Your photo #3','#E85D85','#F1D6A8',600)},
 {id:4,title:'Memory Four',date:'',en:'Replace this with a real photo.',bn:'এটি একটি আসল ছবি দিয়ে বদলে দাও।',image:ph('Your photo #4','#652044','#FFB6C9',760)},
 {id:5,title:'Memory Five',date:'',en:'Write what that day felt like.',bn:'সেদিন কেমন লেগেছিল লিখো।',image:ph('Your photo #5','#351027','#E85D85',520)},
 {id:6,title:'Memory Six',date:'',en:'One more little memory.',bn:'আরও একটি ছোট্ট স্মৃতি।',image:ph('Your photo #6','#D9B6E8','#652044',640)}]
export const loveData={
 boyfriendName:'Apo',girlfriendName:'Abon',websiteTitle:'Apo ❤️ Abon',
 musicUrl:'/music/ambient.mp3',
 loveLetter:{en:`My Dearest Abon,\n\nI don't know how to explain everything I feel, but I know one thing: you are incredibly special to me.\n\nYour smile makes ordinary moments beautiful. Your presence makes my world a little brighter.\n\nMaybe I cannot always find the perfect words, but I hope my little efforts remind you how much you mean to me.\n\nYou are my favorite part of this beautiful journey.\n\nWith love,\nApo ❤️`,
  bn:'তুমি আমার কাছে কতটা স্পেশাল, সেটা হয়তো সবসময় কথায় বোঝাতে পারি না। কিন্তু তুমি আমার জীবনের অনেক সুন্দর একটা অংশ।'},
 memories,galleryImages:memories.map(m=>m.image),
 loveReasons:[
  {en:'Your beautiful smile.',bn:'তোমার সুন্দর হাসি।'},{en:'Your kindness.',bn:'তোমার দয়ালু মন।'},
  {en:'Your adorable personality.',bn:'তোমার মিষ্টি ব্যক্তিত্ব।'},{en:'The way you make me smile.',bn:'তুমি যেভাবে আমাকে হাসাও।'},
  {en:'Your beautiful heart.',bn:'তোমার সুন্দর হৃদয়।'},{en:'The happiness you bring.',bn:'তুমি যে আনন্দ নিয়ে আসো।'},
  {en:'Every little thing about you.',bn:'তোমার প্রতিটি ছোট্ট জিনিস।'}],
 surpriseMessages:[
  {label:'Open me ✨',en:'You make ordinary days feel like magic.'},
  {label:'Read me 💌',en:'Thank you for being exactly who you are.'},
  {label:'Tap me 🌹',en:'Your smile is my favorite view.'},
  {label:'Last one 💫',en:'I am so glad you are in my world.'}],
 sweetMessages:['You make my world brighter.','Your smile is my favorite thing.','I am lucky to have you.','You are special, always.','Thinking of you makes me smile.'],
 finalMessage:{title:'I LOVE YOU',name:'ABON ❤️',en:'Not just today, not just tomorrow, but in every beautiful moment.',bn:'আজ, আগামীকাল, আর প্রতিটি সুন্দর মুহূর্তে — তোমার জন্য আমার ভালোবাসা।',sign:'Forever & Always — Apo'},
 secretMessage:'Some things are difficult to explain with words, but I hope you can feel them in every little thing I create for you.\n\nYou are special to me.\n\n— Apo ❤️'}
