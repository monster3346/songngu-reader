import { useState, useEffect } from 'react';
export default function Header(){
  const [dark,setDark] = useState(false);
  useEffect(()=>{ if(localStorage.getItem('dark')==='true') setDark(true) },[]);
  const toggleDark = ()=>{
    setDark(!dark);
    localStorage.setItem('dark',!dark);
    document.documentElement.classList.toggle('dark',!dark);
  };
  return (
    <header className="p-4 flex justify-between items-center border-b">
      <h1 className="font-bold text-xl">SongNgữ Reader</h1>
      <button onClick={toggleDark} className="px-2 py-1 border rounded">{dark?'🌙':'☀️'}</button>
    </header>
  )
}
