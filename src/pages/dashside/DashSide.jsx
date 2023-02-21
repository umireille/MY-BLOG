import "./dashside.css"
import { Link } from "react-router-dom"
export default function DashSide() {
  return (
    <div className="dashside">
        <ul className="dash_list">
        
        <Link className="link"to ="/write">
        <li className="dash_item">ADDPOST</li>
        </Link>
        <Link className="link"to ="/charts">
        <li className="dash_item">CHARTS</li>
        </Link>
        <Link className="link"to ="/login">
        <li className="dash_item">LOGOUT</li>
        </Link>
        </ul>
      
    </div>
  )
}
