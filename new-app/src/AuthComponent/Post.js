import React from 'react';
import { Link } from 'react-router-dom';



const Post = ({post}) => {
   
  return (
    
   <div className='post' key={post.id}>
      <Link to={"/post/"+post.id}>
      <h>{post.title}</h>
      </Link>
      <p>{post.DateTime}</p>
      <p>
        {(post.body).length<=100 ? post.body : post.body.slice(0,100)+"..."}
      </p>
     
   </div>    
  )
}

export default Post