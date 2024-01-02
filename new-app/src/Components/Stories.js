import React, { useState } from 'react'
import storie from '../api/storie'
import { IoMdShareAlt } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from 'react-router-dom';
const Stories = () => {
    const [story,setStory]=useState(storie);
    
  return (
     <div className='home-s'>
         <h>Read some of the stories</h>
         <div className='home-stories'>
           {story.map((st)=>{
            return (<div key={st.id} className='home-story'>
                  <section>
                    <img src={st.image}/>
                    <div><p>{st.name}</p>
                    <p>{st.title}</p></div>
                    
                  </section>
                  <main>
                     {st.story}
                  </main>
                  <section className='home-story-opt'>
                      <button><Link to="/signup"><MdOutlineMessage/></Link></button>
                      <button><Link to="/signup"><IoMdShareAlt /></Link></button>
                  </section>
            </div>)
           })}
         </div>
     </div>
  )
}

export default Stories