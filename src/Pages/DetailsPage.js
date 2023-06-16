import React, { useState, useEffect } from 'react'
import { AiFillStar, BlogCard } from './index';
import axios from 'axios';
import { shortdesc, BlogCards, useParams, Link ,url,latestpost} from './index';
import LatestPost from '../Components/LatestPost';


const DetailsPage = () => {
  let { id } = useParams();
  let [data, setdata] = useState([]);
  let [fdata, setfdata] = useState([]);
  let [status, setstatus] = useState({
    loading: true,
    error: false,
    errormessage: "",
  });



  useEffect(() => {
    let fetchdata = async () => {
      try {
        axios
          .get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
          .then(requestdata => {
            setdata(requestdata.data);
            setstatus({ loading: false, error: false, errormessage: "" });
          })
          .catch(error => {
            setstatus({ loading: false, error: true, errormessage: error.message });
          });
      } catch (err) {
        console.log(err);
      }
    };


    fetchdata();
  }, [fdata]);



  if (status.loading) {
    return <div className='flex w-full h-screen justify-center items-center'>
      <h2 className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text text-3xl'>Loading...</h2>
    </div>
  }

  if (status.error) {
    return <div className='flex w-full h-screen justify-center items-center'>
      <h2 className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text text-3xl capitalize'>{status.errormessage}....</h2>
    </div>
  }


  let {title,body,userId} = data[0];
  return (
    <>
     <div className='flex w-full justify-center items-center flex-col'>
<p className='bg-gradient-to-r mt-9 from-[#ff7170] to-[#ffe57f] text-transparent text-[13px] bg-clip-text font-bold mx-7'>{title}</p>
        <h1 className=' text-white font-bold mt-9 capitalize leading-[60px] text-[45px] md:text-7xl text-center mx-7'>Complete Path to The <br/> Development</h1>
        <p className='bg-gradient-to-r from-[#4ca5ff] text-xl to-[#b673f8] text-transparent bg-clip-text capitalize mt-3 mx-7 text-center'>{title}</p>
        
        {/* <p className='text-[21px] font-medium mx-1 capitalize text-[#A3B3BC] my-2 text-center md:w-[600px]'>{title}</p> */}
        <a href='#details' className='py-3 px-6 text-xl bg-gradient-to-r my-3 from-[#ff7170] rounded-full text-white font-bold to-[#ffe57f]'>Learn Post</a>

        <div className='flex items-center'>
        <div className='flex text-[#fbbf24]'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className='text-[17px] font-medium mx-1 capitalize text-[#A3B3BC]'>4.7/5, based on 97 reviews</p>
        </div>


<section id = "detailss">
        <div className='flex mx-auto flex-wrap'>
          <div className='my-5 mx-4 text-white my-[60px] md:w-[600px]'>
          <img src = "https://www.jsmastery.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmovie.3bed4872.png&w=3840&q=75" className='object-cover w-full rounded-t-lg'/>
    
          <h1 className='text-3xl mt-6 mb-5 font-bold capitalize'><span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>{title}</span></h1>
          <p className='bg-gradient-to-r from-[#4ca5ff] text-xl to-[#b673f8] text-transparent bg-clip-text'>{body}</p>
              <p className='text-[20px] text-[#D0DFFF] my-7'>This course is for you if:</p>
              {status.loading ? "" : <ul className='my-4 list-disc'>
        {shortdesc.length && shortdesc.map((items) => {
          return <li className='text-[20px] text-[#D0DFFF] my-5'>{items}</li>;
        })}
      </ul>}

      </div> 
        </div>
        </section> 

   </div> 

    <LatestPost />
    </>
  )
}

export default DetailsPage