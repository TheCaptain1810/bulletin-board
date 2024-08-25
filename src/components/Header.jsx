import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <h1><Link to="/" className="header" >Redux Blog</Link></h1>
        <nav>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="post" >Post</Link></li>
            </ul>
        </nav>
    </header>
  )
}
