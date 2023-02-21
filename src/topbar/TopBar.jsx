import { Link } from "react-router-dom"
import "./topbar.css"
export default function TopBar() {
  return (
    <div className="top__bar">
      <span className="logo">THE Blog</span>
      <ul className="nav__list">
      <Link className="link"to ="/home">
        <li className="nav__item">Home</li>
      </Link>
      <Link className="link"to ="/signup">
        <li className="nav__item">Signup</li>
        </Link>
        <Link className="link"to ="/login">
        <li className="nav__item">Login</li>
        </Link>
      </ul>
    </div>
  )
}
