import React, { useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom'

const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout=()=>{
        localStorage.clear();
        navigate('/signup');
    }

    return (
        <div className='header'>
            <ul className='nav-ul'>
                <li><Link to="/">Home</Link></li>
                 <li><Link to="/addPhoto">Add Photo</Link></li>   
                <li><Link to="/allPhotos">All Photos</Link></li>
                <li><Link to="/addFav">Favourite</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                {/* <li>{ auth ? <Link  onClick={logout} to="/signup">Logout</Link> : 
                <Link to="/signup">SignUp</Link>}</li>
                <li><Link to="/login">Login</Link></li> */}
                {
                    auth ?<li><Link  onClick={logout} to="/signup">Logout</Link></li>
                    :<>
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    </>
                }
            </ul>
        </div>
    )
}
export default Nav;