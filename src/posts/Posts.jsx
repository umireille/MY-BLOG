import "./posts.css"
import "./post.css"
 
import { Link } from "react-router-dom";
export default function Posts({blogs}) {

  console.log(blogs)
  return (
   
    <div className="posts_container">
      {blogs.map((blog) =>{
       return(


    <div className="posts">
      <div className="post">
    <img className="postImg" 
    src={blog.image}
    alt=""
    />
    <div className="postInfo">
        <div className="postCats">

        </div>
        <Link to={`${blog._id}`}><span className="postTitle" style={{color:"lightblue",textDecoration:"none"}}>{blog.title}</span></Link>

    </div>
    <p className="postDesc">{blogs.description}  </p>
    <div className="postDescEdit">

    </div>
    <button className="postReadButton" >
    <Link to={`${blog._id}`}>Readmore</Link> </button>
    </div>
   
    </div>
      ) 
    })}
  
    </div>


  )
}
 