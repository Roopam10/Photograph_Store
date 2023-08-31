import React, { useEffect, useState } from 'react';
import { useFetcher,useNavigate } from 'react-router-dom';
import axios from 'axios'

const Photo =()=>{
    const[title,setTitle]=useState("");
    const [location,setLocation]=useState("");
    const[image,setImage]=useState("");
    const navigate = useNavigate();

    const handlePhoto=async()=>{
        console.log(title,location,image,19);
        const formData = new FormData();
        formData.append('title',title);
        formData.append('location',location);
        formData.append('image',image);

        const result = await axios.post('http://localhost:5000/addPhoto',formData,{
            // headers:{"Content-Type":"multipart/form-data"},
        });

        // let result = await fetch('http://localhost:5000/addPhoto',{
        //     method:'post',
        //     body:formData,
        //     headers:{
        //         'Content-Type':'multipart/form-data'
        //     },
            
        // });
    }

    return (
        <div className='photo'>
            <input className='inputBox' type="text" placeholder='Enter Title' onChange={(e)=>setTitle(e.target.value)} value={title}/>
           <input className='inputBox'  type="test" placeholder='Enter Location' onChange={(e)=>setLocation(e.target.value)} value={location}/>
           <input onChange={(e)=>setImage(e.target.files[0])} type='file'/>
           <button onClick={handlePhoto} className='addphotobutton' type='button'>ADD Photo</button>
        </div>
    )
}
export default Photo