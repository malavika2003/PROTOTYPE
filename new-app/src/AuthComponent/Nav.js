import React from 'react';
import { Link } from 'react-router-dom';


function Nav({search,setSearch}){
    return (
        <div className='Nav'>
            
            <div className="box2">
                <div className='b1 r'>Relief Media</div>
                <div className='b1'><Link to="/">Community chat</Link></div>
                <div className='b1'><Link to="/post">Create Post</Link></div>
                <div className='b1'><Link to="/about">Profile</Link></div>
                <div className='b1'><Link to="/documentaries">Documentaries</Link></div>
                <div className='b1'><Link to="/resources">Resources</Link></div>
                <div className='b1'><Link to="/hopeline">Hopeline</Link></div>
            </div>
        </div>
    );
}
export default Nav;