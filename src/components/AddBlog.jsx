import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import {db} from '../Firebase'
import { addDoc, collection } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBlog = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: '',
        shortDesc: '',
        logDesc: '',
        imgUrl: '',
        authorName:auth.currentUser.displayName,
        authorImg:auth.currentUser.photoURL
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const colleRef = collection(db,"blog");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // alert("Blog Added!")
        
        await addDoc(colleRef,data);
        
        console.log("form submitted");
        setTimeout(() => {
            navigate('/blogs')
        }, 3000);

    setData({
        title: '',
        shortDesc: '',
        logDesc: '',
        imgUrl: '',
       
    })
    toast.success('Your blog is Added!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    }

  

    return (
        <>
        <ToastContainer
position="top-right"
autoClose={4998}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
            <Navbar />
            <div className="container my-3" style={{ padding: '2rem', width: '50%' }}>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Title</label>
                        <input
                            value={data.title}
                            name="title"
                            type="text"
                            required
                            onChange={handleChange}
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp" />

                    </div>

                    <div class="mb-3">
                        <label for="text" class="form-label">Short Description</label>
                        <input
                            value={data.shortDesc}
                            name="shortDesc"
                            type="text"
                            required
                            onChange={handleChange}
                            class="form-control"
                            id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Full Desciption</label>
                        <textarea
                            value={data.logDesc}
                            name="logDesc"
                            required
                            onChange={handleChange}
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                        ></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">imge Url</label>
                        <input
                            value={data.imgUrl}
                            name="imgUrl"
                            type="text"
                            required
                            onChange={handleChange}
                            class="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>

                    <div className='mb-3'>

                        <button type="submit" class="btn btn-primary btn-lg">Add Blog</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default AddBlog