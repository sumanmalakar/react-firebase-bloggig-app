import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { auth , db} from '../Firebase'
import { onSnapshot, collection, deleteDoc, doc, getDoc} from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([])

  const colleRef = collection(db, 'blog')

  useEffect(() => {

    const getdata = async () =>{

      
   await onSnapshot(colleRef, (snapshot) => {
        setAllBlogs(snapshot.docs.map((doc) => ({
          ...doc.data(), id: doc.id
        })))
      })
      
    }

    getdata();
    console.log(allBlogs)

  }, [])

  const deletBlog = async (id) =>{
    alert("Document will deleted forever..!")
    const deleteData = doc(db, "blog", id)
    await deleteDoc(deleteData);

    toast.success('Your blog is deleted!', {
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

const getsingleDoc = async (id)=>{
  // console.log(id)
  const data = doc(db, "blog", id)
  getDoc(data).then((doc)=>console.log(doc.data()))
  // console.log(data2);

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

      <div style={{ marginTop: '1rem', textAlign: 'center', minHeight: "100vh" }}>
      {allBlogs.map((data)=>{
        return(
          <>
         

        <div className="container  my-3 ">
          <div className='d-flex justify-content-center align-item-center flex-column '>

            <div className="author d-flex justify-content-center align-items-center"
              style={{
                width: "60%",

              }}
            >
              <img src={data.authorImg} alt="author" style={{
                width: "4%",
                borderRadius: "50%",
                margin: '1rem'
              }} />
              <h3>{data.authorName}</h3>
            </div>
            <div className='d-flex justify-content-center align-item-center'>

              <div className="card center bg-secondary" style={{ width: "70%", alignItems: "center", color: 'white' }}>
                <div className="row ">
                  <div className="col-md-4 d-flex justify-content-center align-item-center">
                    <img src={data.imgUrl} className="img-fluid rounded-start" alt="..." style={{
                      width:"60%"
                    }} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">{data.title}</h2>
                      <h5 className="card-text">{data.shortDesc}</h5>
                      <h5 className=""><small className="text-warning">Last updated 3 mins ago</small></h5>
                      <Link className='btn btn-primary' 
                      to={`/blogs/${data.id}`}
                      >View More</Link>
                      <button className='btn btn-danger mx-3' onClick={()=>deletBlog(data.id)}>Delete</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>





      </>
        )
      })}
      </div>
      <Footer />
    </>
  )
}

export default Blogs