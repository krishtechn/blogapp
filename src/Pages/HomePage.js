import React,{useState} from 'react'
import BlogCards from '../Components/BlogCards';
import { toast } from 'react-toastify';
import LatestPost from '../Components/LatestPost';

const HomePage = () => {
  let name = localStorage.getItem("name");
  let password = localStorage.getItem("password");
  
  document.title = `Welcome - ${name[0].toLocaleUpperCase()+name.slice(1,name.length)}`;

  if(name == null|| password == null){
    document.location.href = "/";
  }

  let [width,setwidth] = useState(window.innerWidth);

  window.addEventListener('resize',(e)=>{
    setwidth(e.currentTarget.innerWidth);
  })

  return (
    <div className='w-full py-4 px-10 bg-[#0D1117]'>
      <div className='flex justify-between mb-5'>
      <h1 className={`text-2xl font-medium bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text ${width < 600?"hidden w-[347px]":""}`}>Blog</h1>
      <div className='flex items-center'>
      <h2 className="text-xl font-medium bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text md:text-2xl">Welcome - {name}</h2>
      <button onClick={()=>{
        setInterval(()=>{
          localStorage.clear();
          document.location.href = "/";
        })
        toast("you are Logout Now");
      }} className='py-2 px-5 text-white rounded ml-4 bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] hover:scale-110 transition-all'>Logout</button>
      </div>
      </div>
       <BlogCards />
    </div>
  )
}

export default HomePage