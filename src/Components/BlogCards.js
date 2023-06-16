import React, { useEffect, useState } from 'react'
import BlogCard from '../Components/index';
import axios from 'axios';
// import { url } from '../Pages';

const BlogCards = (props) => {
  let url = "https://jsonplaceholder.typicode.com/posts";
  let [data,setdata] = useState([]);
  let [status,setstatus] = useState({
    loading : true,
    error:false,
    errormessage:"",
  });
  
  
  useEffect(()=>{
    let fetchdata = async()=>{
      // used fetch method to get data from api 
    //   try{
    //   let d = await fetch(url);
    //   if (!d.ok) {
    //     throw new Error(`Error! status: ${d.status}`);
    //   }
    //   let data = await d.json();
    //   setdata(data);
    //   setloading(false);
    // }catch(err){
    //   console.log(err);
    // }

    //using axios to fetch data from api
    try{
    axios
  .get(url)
  .then(data => {
    setdata(data.data);
    setstatus({loading:false,error:false,errormessage:""});
  })
  .catch(error => {
    setstatus({loading:false,error:true,errormessage:error.message});
  });
}catch(err){
  console.log(err);
}
   };
    fetchdata();
  },[data]);


  
  if(status.loading){
    return <div className='flex w-full h-screen justify-center items-center'>
      <h2 className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text text-3xl'>Loading...</h2>
    </div>
  }

  if(status.error){
    return <div className='flex w-full h-screen justify-center items-center'>
      <h2 className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text text-3xl capitalize'>{status.errormessage}....</h2>
    </div>
  }

  return (
    <div className='w-full'>
      <div className='flex w-full flex-wrap justify-center'>
        <BlogCard data={data}/>;
      </div>

    </div>
  )
}

export default BlogCards