import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPage = ({posts,editTitle,editBody,setEditTitle,setEditBody,handleEdit}) => {
    const {id}=useParams();
    
    const epost=posts.find((post)=>(post.id).toString()===id);
    
    useEffect(()=>{
       if(epost){
        setEditBody(epost.body);
        setEditTitle(epost.title);
       }
    },[epost,setEditBody,setEditTitle])
    return (
        <main>
       {epost &&
        
        <div className='container'>
        <form className='newpost' onSubmit={(e)=>e.preventDefault()}>
        <label>Edit Title</label>
            <br></br>
            <input 
            type="text"
            value={editTitle}
            onChange={(e)=>setEditTitle(e.target.value)}
            required
            />
            <br></br>
             <label>Edit Body</label>
             <br></br>
            <textarea
            type="text"
            value={editBody}
            onChange={(e)=>setEditBody(e.target.value)}
            required
            />
            <br></br>
            <input type="submit"  onClick={()=>handleEdit(epost.id)}/>
            </form>
            </div>
       }
       {!epost && <h>Post not found</h>}
    </main>
    )
}

export default EditPage