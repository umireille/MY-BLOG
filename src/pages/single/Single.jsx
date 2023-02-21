import "./single.css"
import "./singleP.css"
import{useParams} from "react-router-dom";


export default function Single({blogs}) {
const{blogId} =useParams();
const single =blogs.find((blog)=>blog._id===blogId);
  return (
 
    <div className="single">
        <div className="singlePost">
      <div className="singlePostWrapper">

    <img src={single?.image} alt={single?.title}
    className="singlePostImg" />
       <h1 className="singlePostTitle">
        {single?.title}</h1>
         
         <p className="singlePostDesc">{single?.description}</p>
      </div>
      
    </div>
    <div className="comment">
<form>
<label>leave your comment </label><br/><br/>
<textarea 
 type="text"
 cols="20"
 rows="10"
 style={{padding:'5px',borderRadius:'5px',width:'25vw'}} /> 
 <br/><br/>
 <button class="add" style={{padding:'10px', borderRadius:'5px',backgroundColor:'teal',cursor:'pointer',width:'10vw',color:'white'}} >comment</button>
</form>
    </div>
    </div>
 
  )
}
