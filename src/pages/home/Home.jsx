import Header from "../../header/Header"
import Posts from "../../posts/Posts"

import TopBar from "../../topbar/TopBar"
import "./home.css"
 import Footer from "../footer/Footer" 
  export default function Home({blogs}) {
    return (
      <>
       <TopBar/>
       <Header />
      <div className="home">
       <Posts blogs={blogs}/> 
      
      </div>
      <Footer/>
      </>
    )
  };
  