import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function NavBar() {
  const liStyle = "hover:text-black";
  return (
    <div>
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold"><Link to="/">CodeCraft</Link></h1>
        <ul className="flex gap-[4rem]  text-gray-700 ">
          <li className={liStyle}><Link to="/">Home</Link></li>
          <li className={liStyle}><Link to="/publish">Publish</Link></li>
          <li className={liStyle}><Link to="/my-blogs">My blogs</Link></li>
        </ul>
        <div>
          <FontAwesomeIcon className="bg-gray-500 text-gray-300 p-2 rounded-full cursor-pointer" icon={faUser} />
        </div>
      </nav>
    </div>
  )
}

export default NavBar