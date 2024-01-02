import logo from './logo.svg';
import './App.css';
import MainHome from './Components/MainHome'
import {Link,Routes,Route, useNavigate} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Nav from './AuthComponent/Nav';
import Home from './AuthComponent/Home';
import NewPost from './AuthComponent/NewPost';
import PostPage from './AuthComponent/PostPage';
import EditPage from './AuthComponent/EditPage';
import About from './AuthComponent/About';
import Missing from './AuthComponent/Missing';
import Footer from './AuthComponent/Footer';
import { useEffect, useState } from 'react';
import {format} from 'date-fns';
import api from "./api/disp.js";
import useWindowSize from './hooks/useWindowSize.js';
import Documentaries from './AuthComponent/Documentaries.js';
import Hopeline from './AuthComponent/Hopeline.js';
import Resources from './AuthComponent/Resources.js';
function App() {
  const [disp,setDisp]=useState(false);
  const [posts,setPosts]=useState([])
  const [search,setSearch]=useState('');
  const [searchResult,setSearchResult]=useState([]);
  const [posttitle,setPosttitle]=useState('');
  const [postbody,setPostbody]=useState('');
  const [editTitle,setEditTitle]=useState('');
  const [editBody,setEditBody]=useState('');
  const {width}=useWindowSize();
   const navigate=useNavigate();
  
   useEffect(()=>{
   const filres=posts.filter((post)=>((post.body).toLowerCase()).includes(search.toLowerCase())||
   ((post.title).toLowerCase()).includes(search.toLowerCase()));

   setSearchResult(filres.reverse());
  },[posts,search])
  //rendered only single time
  useEffect(()=>{
    const fetchAPI=async ()=>{
      try{
        const response=await api.get("posts");
        console.log(response.data);
        setPosts(response.data);
      }
      catch(e){
        if(e.response){
          console.log(e.response.data);
          console.log(e.response.headers);
        }
         else   console.log(e.message);
      }
    }
    fetchAPI();
  },[])

  const handleEdit = async (id) => {
    console.log("hello");
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle,
    DateTime:datetime, body: editBody };
    try{
    const response = await api.put('/posts/'+id,updatedPost)
    setPosts(posts.map((post)=> post.id === id ? { ...response.data} : post));
    setEditTitle('');
    setEditBody('');
    navigate('/');
    } catch (e) {
    console.log(e.message);
    }
  }
async function handleSubmit(e){
e.preventDefault();
const id=posts.length ? posts[posts.length-1].id+1:1;
const datetime=format(new Date(),'MMMM dd, yyyy pp');
const newp={id,title:posttitle,DateTime:datetime,body:postbody};
const newpl=[...posts,newp];
try{
const response=await api.post("/posts",newp);
setPosts(newpl);
setPostbody('');
setPosttitle('');
}
catch(e){
  console.log(e.message);
}
  }
 
  return (
    
    <div className="App">
      {!disp &&
         <Routes>
         <Route path="/" element={<MainHome/>}/>
         <Route path="/login" element={<Login disp={disp} setDisp={setDisp}/>}/>
         <Route path="/signup" element={<Signup/>}/>
       </Routes>
      }
    {disp &&
          <div>
    
         
             <Nav
             search={search}
             setSearch={setSearch}
             />
            
       <Routes>
       <Route path="/" element={<Home search={search} setSearch= {setSearch} posts={searchResult}/>}/>
       <Route path="post" >
                   
          <Route index element={ <NewPost
          handleSubmit={handleSubmit}
          posttitle={posttitle}
          setPosttitle={setPosttitle}
          postbody={postbody}
          setPostbody={setPostbody}
          />}/>
          <Route path=":id" element={<PostPage  posts={posts}  />}/>
       
       </Route>
       <Route path="/edit/:id" element={<EditPage
       posts={posts}
       editTitle={editTitle}
       editBody={editBody}
       setEditBody={setEditBody}
       setEditTitle={setEditTitle}
       handleEdit={handleEdit}
       />}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/documentaries" element={<Documentaries/>}/>
       <Route path="/resources" element={<Resources/>}/>
       <Route path="/hopeline" element={<Hopeline/>}/>
       <Route path="*" element={<Missing/>}/>
       
       </Routes>
      
         
           </div>
      }
      
      
     
    </div>
  );
}

export default App;
