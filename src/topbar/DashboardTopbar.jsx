import { Link } from "react-router-dom"
import "./topbar.css"
export default function TopBar() {
  return (
    <div className="top__bar">
      <span className="logo">MY BLOG</span>
      <ul className="nav__list">
      <Link className="link"to ="/write">
        <li className="nav__item">ADDPOST</li>
      </Link>
      <Link className="link"to ="/profile">
        <li className="nav__item">PROFILE</li>
        </Link>
        <Link className="link"to ="/home">
        <li className="nav__item">LOGOUT</li>
        </Link>
      </ul>
    </div>
  )
}
