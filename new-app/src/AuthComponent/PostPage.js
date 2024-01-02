import React, { useState } from 'react';
import {useParams,Link} from 'react-router-dom';
import { IoMdShareAlt } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
function PostPage({posts}){
    const {id}=useParams();
    const [comment,setComment]=useState(false);
    const post=posts.find(post=>(post.id).toString()===id);
    return (
    <div>
      
     <main>
        <div className="post" >
            {post && 
            <>
            <h>{post.title}</h>
            <p>{post.DateTime}</p>
            <p>{post.body}</p>
            <button onClick={()=>setComment(!comment)}><IoMdShareAlt/></button>
            <Link to={"/edit/"+post.id}><button><MdOutlineMessage /></button></Link>
            {comment &&
              <div className='comment' key={post.id}><input type="text"  placeholder='Add a comment'></input><button>Add</button></div> 
            }
            </>

            }
            {
            !post &&
            <h>Post not found</h>
            }
        </div>
     </main>
    </div>
    );
}
export default PostPage;