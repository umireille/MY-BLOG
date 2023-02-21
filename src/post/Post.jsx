import "./post.css"
import img2 from "../img/place.jpg"

import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
    <img className="postImg" 
    src={img2}
    alt=""
    />
    <div className="postInfo">
        <div className="postCats">

        </div>
<span className="postTitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>

    </div>
    <p className="postDesc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas ad illo eos quaerat, eveniet sapiente accusantium similique itaque recusandae quidem id reiciendis, debitis maxime veritatis quasi, nobis repellat aliquam.
    </p>
   
    <button className="postReadButton">
    <Link to="/single">Readmore</Link> </button>
    </div>
  ); 
}

