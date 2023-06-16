import React, { useState } from 'react'
import {RiUserAddLine,RiLockPasswordFill,MdEmail,ToastContainer,toast, Link} from './index';


const Signup = () => {
    let [name,setname] = useState("");
    let [email,setemail] = useState("");
    let [password,setpassword] = useState("");
    let [agree,setagree] = useState(false);

    let [show,setshow] = useState({
        login:false,
        signup:true,
    });

    if(localStorage.getItem("name")){
        document.location.href = "/home";
    }
 
    if(show.signup){
        document.title = "Blog App - Signup";
    }else if(show.login){
        document.title = "Blog App - Login";
    }


    let [loginname,setloginname] = useState("");
    let [loginpassword,setloginpassword] = useState("");

    
    const LoginForm= (e)=>{
        e.preventDefault();
         if(loginname == ""){
            toast("Name most be field");
        }else if(loginpassword == ""){
            toast("Password filed can't be blank");
        }else{
            toast("you are login now");
            setInterval(()=>{
                localStorage.setItem("password",loginpassword);
                localStorage.setItem("name",loginname);
                document.location.href = 'http://localhost:3000/home';
            },[2000])
        }
    }

    const submitForm= (e)=>{
        e.preventDefault();
        if(name == ""){
          toast("Name most be field");
        }else if(email == ""){
            toast("Email most be field");
        }else if(password == ""){
            toast("Password filed can't be blank");
        }else if (password.length < 3){
            toast("Password length most be greater then 3 char");
        }else if(agree == false){
            toast("follow all term and condition");
        }else{
            toast("you are signup now");
            setInterval(()=>{
                // document.location.href = 'http://localhost:3000/home';
                setshow({signup:false,login:true});
                document.title = "Blog App - Login";
            },[1000])
            // document.location.href = "http://localhost:3000/login";
        }
    }

       
  return (
    <div className='flex justify-center w-full h-screen items-center'>
        {show.signup == true?
         <form className='flex bg-[#1F2937] flex-col md:w-[400px] py-3 px-4 rounded-lg w-full mx-8 shadow-black shadow-2xl' onSubmit={(e)=>submitForm(e)}>
         <h1 className='text-center text-3xl font-bold mb-3 bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>Signup</h1>
           <div className='flex items-center bg-[#0e1a2b] p-3 mb-3 rounded-full text-xl text-black'>
            <RiUserAddLine className='text-gray-300'/>
            <input className='pl-3 text-white font-medium outline-none border-none text-xl text-black bg-[#0e1a2b] placeholder:text-[18px] font-normal' type='text' name='username' placeholder='Enter your Name' value={name} onChange={(e)=>setname(e.target.value)}/>
           </div>
 
           <div className='flex items-center bg-[#0e1a2b] p-3 my-3 text-xl rounded-full text-black'>
            <RiLockPasswordFill className='text-gray-300'/>
            <input className='pl-3 text-white font-medium outline-none border-none text-xl text-black bg-[#0e1a2b] placeholder:text-[18px] font-normal' type='email' name='useremail' placeholder='Enter your Email' value={email} onChange={(e)=>setemail(e.target.value)}/>
           </div>
 
           <div className='flex items-center bg-[#0e1a2b] p-3 my-3 text-xl text-white rounded-full'>
            <MdEmail className='text-gray-300'/>
            <input className='pl-3 outline-none border-none text-white text-xl bg-[#0e1a2b] placeholder:text-[18px] font-normal' type='password' name='userpassword' placeholder='Enter your Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
           </div>
 
           <div class="flex items-start mb-3 mt-3 items">
         <div class="flex items-center h-5">
         <input id="remember" type="checkbox" checked={agree} class="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" onClick={()=>setagree(true)} />
         </div>
         <label for="remember" class="ml-2 text-[16px] font-medium text-gray-300 dark:text-gray-300">I agree with the <a href="#" class="bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text hover:underline dark:text-blue-500">terms and conditions</a>.</label>
     </div>
         <Link onClick={()=>setshow({login:true,signup:false})} className='text-blue-400 cursor-pointer text-end hover:underline text-[13px]'>Already have account <br/><span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>Login Now</span></Link>
            <button className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] w-[200px] my-5 scale-100 text-white py-3 font-semibold cursor-pointer hover:bg-indigo-400 hover:scale-105 transition-none ease-in-out rounded-full'>Signup Now</button>
         </form>:""
        }
           

        {
            show.login?
            <div className='flex justify-center w-full h-screen items-center'>
    <form className='flex flex-col md:w-[400px] py-3 px-4 bg-[#1F2937] rounded-lg w-full mx-8 shadow-black shadow-2xl' onSubmit={(e)=>LoginForm(e)}>
    <h1 className='text-center text-3xl font-bold mb-5 bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>Login</h1>
      <div className='flex items-center bg-[#0e1a2b] p-3 my-3 rounded-full text-xl text-white'>
       <RiLockPasswordFill className='text-gray-300'/>
       <input className='pl-3 text-white font-medium outline-none border-none text-xl text-black bg-[#0e1a2b] placeholder:text-[18px] font-normal' type='text' name='username' placeholder='Enter your Name' value={loginname} onChange={(e)=>setloginname(e.target.value)}/>      
      </div>

      <div className='flex items-center bg-[#0e1a2b] p-3 my-3 rounded-full text-xl text-white'>
       <MdEmail className='text-gray-300'/>
       <input className='pl-3 outline-none bg-[#0e1a2b] border-none w-full text-xl text-white placeholder:text-[18px] font-normal' type='password' name='userpassword' placeholder='Enter your Password' value={loginpassword} onChange={(e)=>setloginpassword(e.target.value)}/>
      </div>

       <button className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] w-[200px] my-5 scale-100 text-white py-3 font-semibold cursor-pointer hover:bg-indigo-400 hover:scale-105 transition-none ease-in-out rounded-full' onClick={LoginForm}>Login Now</button>
    </form>
</div>
            :""
        }

    </div>
  )
}

export default Signup