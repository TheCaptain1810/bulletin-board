import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increaseCount, getCount } from "../features/posts/postsSlice"

export default function Header() {

  const dispatch = useDispatch();
  const count = useSelector(getCount);

  return (
    <header>
        <h1><Link to="/" className="header" >Redux Blog</Link></h1>
        <nav>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="post" >Post</Link></li>
                <li><Link to="user" >Users</Link></li>
            </ul>
            <button onClick={() => dispatch(increaseCount())} >
              {count}
            </button>
        </nav>
    </header>
  )
}
