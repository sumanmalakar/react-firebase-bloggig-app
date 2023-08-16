import React from 'react'
import {getAuth} from 'firebase/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // console.log(getAuth());
  const auth = getAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const signOut = () =>{
    auth.signOut();
    navigate('/')
  }

  // console.log(useLocation())
  return (
    <div style={{
      backgroundColor:"blueviolet",
    display:'flex',
    justifyContent:"space-between",
    padding:'0.3rem',
    position:'sticky',
    top:"0",
    zIndex:'1',
    width:'100%'
    
   
  
    }}>
      <div  style={{
        // width:"50%",
        // backgroundColor:'yellow',
        display:'flex',
        gap:"1rem",
        justifyContent:'center',
        alignItems:'center'
        // padding:"0.5rem"


      }}>
     
        <img src={auth?.currentUser?.photoURL} alt="photourl"
        style={{width:"20%",height:"90%", borderRadius:"50%"}} />
        <h3>{auth?.currentUser?.displayName}</h3>
      </div>

      <div 
      style={{
      
        // backgroundColor:'blue',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:"1rem",
        // padding:"0.5rem"


      }}>
     {location.pathname === '/blogs' &&  <Link to={"/addblog"} type="button" class="btn btn-warning" >
  Add Blog
</Link>}

     {location.pathname !== '/blogs' &&  <Link to={"/blogs"} type="button" class="btn btn-warning" >
 Back To Blogs
</Link>}





        <h3>{auth?.currentUser?.email}</h3>
        <button
        onClick={signOut}
        type="button" class="btn btn-danger" >
log out
</button>
      </div>
    </div>
        
  )
}

export default Navbar