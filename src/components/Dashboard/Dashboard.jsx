import DashboardHeader from "../../header/DashboardHeader"
import "./dashboard.css"
import axios from 'axios';
import {useState,useEffect} from 'react';
import { useForm } from "react-hook-form";

import DashSide from "../../pages/dashside/DashSide"

export default function Dashboard ({blogs}){
  const [selected, setSelected] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      title: selected?.title,
      description: selected?.description,
    },
  });
  const [modal, setModal] = useState(false);

  const handleDelete = async (id) => {
    try {
      await axios({
        method: "DELETE",
        url: `https://blogapi12.onrender.com/api/v1/blog/${id}`,
        headers: {
          "content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      window.location.reload(true);
    } catch (error) {
      console.log(error.response);
    }
  };
  const getSingleBlog = async (id) => {
    const selectedBlog = blogs.find((blog) => blog._id === id);
    setSelected(selectedBlog);
    // reset();
    console.log(selectedBlog);
  };
  useEffect(() => {
    reset(selected);
  }, [selected]);


  const onSubmit = async ({ image, title, description }) => {
    console.log("submit");
    try {
      const formData = new FormData();
      formData.append("image", image[0]);
      formData.append("title", title);
      formData.append("description", description);
      await axios.patch(
        `https://blogapi12.onrender.com/api/v1/update/${selected._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert( "Post updated successfully ", "Ok", {
        timeout: 2000,
      });
      setTimeout(() => {
        window.location.reload(true);
      }, 3000);
    } catch (error) {
      console.log(error.response);
    }
   
  };



    return (
        <div className="dash">

<DashboardHeader/>

<DashSide/>

<div className="blogs container">
      {blogs.map((blog) =>{
       return(

     <table cellSpacing="2" cellPadding="2" className="tbl">
      <tr>
      <td className="img">
        
    <img  
    src={blog.image}
    alt="" className ="img-p"
    /></td>
  <td className="ttl"> 
<span className="postTitle">{blog.title}</span></td> 
<td><i className="singlePostIcon fa-sharp fa-solid fa-pen-to-square" onClick={() => {
                    getSingleBlog(blog._id);
                    setModal(true);
                  }} ></i>
       <i className="singlePostIcon fa-sharp fa-solid fa-trash"   onClick={() => {
                    if (
                      window.confirm("Are you sure you want to delete this?")
                    ) {
                      handleDelete(blog._id);
                    }
                  }}>
       </i></td>

    

    </tr>
    </table>
   
      ) 
    })}
    </div>
    <div className="update" style={{ backgroundColor:'white', width:'40vw', borderRadius:'10px', padding:'30px',display: !modal? "none": "block",marginLeft:'6px'}}>
   <form className="update-form" style={{position:"absolute",left: "700px", top:"900px",display: !modal? "none": "block"}}>
         <h1>EDIT POST</h1>
          <div className="blog-form-control">
            <label style={{padding:'10px',textAlign:'center'}}>Title</label><br/>
            <input type="text" {...register("title")}  style={{padding:'10px',borderRadius:'10px',width:'30vw'}}/>
          </div>
          <div className="blog-form-control">
            <label>Description</label><br/>
            <textarea
              type="text"
              cols="20"
              rows="10"
              {...register("description")}
              style={{padding:'10px',borderRadius:'10px',width:'30vw'}}/>
          </div>
          <div className="blog-form-control">
            <label>Image</label>
            <input type="file" {...register("image")}   style={{padding:'5px',borderRadius:'5px',width:'30vw'}}/>
          </div>
          <div className="modal-footer">
            <button style={{padding:'5px', borderRadius:'5px',backgroundColor:'lightblue',cursor:'pointer',margin:'12px'}}
            onClick={handleSubmit(onSubmit)}>UPDATE</button>
            <button
              className="add"
              style={{padding:'5px', borderRadius:'5px',backgroundColor:'teal',cursor:'pointer'}}
              onClick={() => {
                setModal(false);
              }}
            >
              CANCEL
            </button>
          </div>

   </form>
    
   </div>
   
     
   



  
</div>      
    )
}
