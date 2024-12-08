import { Link, useNavigate} from "react-router-dom";
import { Avatar } from "@mui/material";
import stringAvatar from "./functions/stringAvatar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useContext } from "react";
import { UserContext } from "./Blog/Context/UserContext";
function NavBar() {
  const liStyle = "hover:text-black";
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <div>
      <nav className="px-[50px] lg:px-[120px] w-screen flex justify-between items-center">
        <h1 className="text-2xl font-semibold"><Link to="/">CodeCraft</Link></h1>
        <ul className="flex gap-[4rem]  text-gray-700 ">
          <li className={liStyle}><Link to="/">Home</Link></li>
          <li className={liStyle}><Link to="/publish">Publish</Link></li>
          <li className={liStyle}><Link to="/ranking">Ranking</Link></li>
        </ul>
        {/* Por el momento manejar esta lógica */}
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate('/my-account')}>
          <Avatar {...stringAvatar(`${user.first} ${user.last}`)} />
          <KeyboardArrowDownIcon color="action"/>
        </div>
      </nav>
    </div>
  )
}

export default NavBar