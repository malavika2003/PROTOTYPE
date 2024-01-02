import React from 'react';

function NewPost({handleSubmit,posttitle,setPosttitle,postbody,setPostbody}){
    return (
        <div className='postt'>
    <main className='create-post'>
        <h>Write your story of recovery / success</h>
        
        <form className='newpost' onSubmit={handleSubmit}>
            <label>Add Title</label>
            <br></br>
            <input 
            type="text"
            value={posttitle}
            onChange={(e)=>setPosttitle(e.target.value)}
            required
            />
            <br></br>
             <label>Add Post</label>
             <br></br>
            <textarea
            type="text"
            value={postbody}
            onChange={(e)=>setPostbody(e.target.value)}
            required
            />
            <br></br>
            <button>Post</button>
            
        </form>
       
    </main>
    </div>
    );
}
export default NewPost;