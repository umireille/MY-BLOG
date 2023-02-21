import "./write.css"

import DashboardHeader from "../../header/DashboardHeader"
import DashSide from "../dashside/DashSide"
import {useForm} from "react-hook-form";
import axios from "axios";

export default function Write() {
const {register,handleSubmit,reset}=useForm();
const onSubmit =async (data) =>{

  const formData = new FormData();
  // formData.append("name",data.name);
  formData.append("title",data.title);
  formData.append("description",data.description);
  formData.append("image",data.image[0]);
  console.log(data);

  try{
    await axios.post("https://blogapi12.onrender.com/api/v1/postBlog",formData, {
      headers:{
        "content-Type":"multipart/form-data",
Authorization:`Bearer ${localStorage.getItem("token")}`

      }
    }); 
      
      alert("post successfully");
      reset();
    }
catch (error){
  console.log(error.response)
}
  }

  return (
    <>
    <DashboardHeader/>
<DashSide/>
    <div className="write">
     
     <form className="writeForm" onSubmit={handleSubmit(onSubmit)}>
<div className="writeFormGroup">
   
    <input type="text" name="title" placeholder="Title" className="writeInput" {...register("title")} autoFocus={true}/><br/><br/>
    </div>
<div className="writeFormGroup">
    <textarea placeholder="tell your story ...." typeof="text" name="description" className="writeInput writeText"  {...register("description")}>
    
    </textarea><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    <div className="writeFormGroup">
    <label htmlFor="fileInput">
    
    </label><br/><br/><br/>
    <input type="file" id="fileInput" name="image" {...register("image")} />
</div>
<button className="writeSubmit" type="submit">NEW POST</button>
     </form>
    </div>
    </>
  )
}
