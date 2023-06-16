import React from 'react'

const BlogCard = (props) => {
  return (
    <>
    {props.data.map((items,index)=>{
      let {id,userId,title,body,image} = items;
      image = image !== null?"https://www.jsmastery.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmovie.3bed4872.png&w=3840&q=75":"";
      return <div key={index} className='md:w-[350px] w-full ml-0 mb-6 shadow-md shadow-white rounded-lg hover:scale-105 duration-100 transition-all ease-in-out md:mx-5'>
      <img src = {`${id >= 4 && id <= 10?image:"https://www.jsmastery.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNFT.91383e8a.png&w=3840&q=75"}`} className='object-contain h-[200px] w-full  rounded-t-lg'/>
      <div className='py-2 px-3 h-[120px]'>
      <h2 className='font-bold text-2xl capitalize my-1 bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text mb-2 line-clamp-2'>{title}</h2>
      <p className='text-[16px] capitalize font-medium bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text mb-2 line-clamp-1'>{body}</p>
      </div>
      <div className='w-full justify-end flex mb-5 px-3'>
        <a href={`/BlogDetails/${id}`} className='py-3 px-5 text-white font-semibold text-xl bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] rounded-full'>Read Post</a>
      </div>
    </div>
    })}
    </>
  )
}

export default BlogCard