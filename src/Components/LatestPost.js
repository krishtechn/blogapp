import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BlogCard from './BlogCard';

const LatestPost = () => {
    let { id } = useParams();
        // let  id = props.id;
  let [latestdata,setlatestdata] = useState([]);
    
  useEffect(() => {
    let fetchlatestdata = async () => {
      try {
        axios
          .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
          .then(requestdata => {
            console.log(requestdata.data);
            setlatestdata(requestdata.data);
            // setstatus({ loading: false, error: false, errormessage: "" });
          })
          .catch(error => {
            // setstatus({ loading: false, error: true, errormessage: error.message });
          });
      } catch (err) {
        console.log(err);
      }
    };

    fetchlatestdata();
  });


  return (
<>
  {/* our Courses  */}
  <div id="details" className='w-full px-8'>
   <p className='bg-gradient-to-r mt-9 mx-7 from-[#ff7170] to-[#ffe57f] text-transparent text-[40px] bg-clip-text font-bold'>Latest Post</p>
   <div className='flex flex-wrap justify-center items-center'>
   <BlogCard data={latestdata}/>
    </div>
  </div>


  </>
  )
}

export default LatestPost