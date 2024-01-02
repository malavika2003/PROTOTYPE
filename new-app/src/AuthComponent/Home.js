import React from 'react';
import Feed from './Feed'
import { Link } from 'react-router-dom';
function Home({posts,search,setSearch}){

    return (
        <main className='Home'>
            <form className="box1" onSubmit={(e)=>e.preventDefault()}>
                
                <input 
                id="search"
                type="text" 
                placeholder='Search Post' 
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
                />
                
            </form>
            <Link to="/post">Want to upload your own stories of recovery</Link>
            {<Feed posts={posts}/>}
           
        </main>
        
        );
}
export default Home;
