import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";
import ProfilePublish from "./ProfilePublish";
import { useContext, useState } from "react";
import { BlogContext } from "../../../Context/BlogContext";
import { BorderColorOutlined, MoreVert } from "@mui/icons-material";
import { UserContext } from "../../../Context/UserContext";
import axios from "axios";
import { Button } from "@mui/material";
import AlertDelete from "./AlertDelete";

type Props = {
  id: string;
  title: string;
  content: string;
  author: string;
  date?: string;
  email: string;
};
function Card({ id, title, content, author, date, email }: Props) {
  const { readMore, fetchBlogs } = useContext(BlogContext);
  const { user } = useContext(UserContext);
  const [isClick, setIsClick] = useState(false);
  const [alertDelete, setAlertDelete] = useState(false);
  const url = "http://localhost:3000/api/blogs/";

  const handleDelete = (id: string) => {
    axios
      .delete(`${url}delete/${id}`)
      .then((res) => {
        console.log(res.data.message);
        fetchBlogs();
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  const handleChoiceDelete = (choice: boolean) => {
    if (choice === true) {
      handleDelete(id);
      setAlertDelete(false);
    } else if (choice === false) {
      setAlertDelete(false);
    }
  };

  return (
    <div className="flex flex-col justify-between h-60 shadow py-[1.2rem] px-[1.5rem] border rounded-lg relative">
      <div>
        <h2 className="sm:text-2xl text-xl mb-2 truncate-title">{title}</h2>
        <p className="text-gray-700 text-sm truncate-text">{content}</p>
        <div className="absolute bottom-16 left-4 text-blue-600 hover:text-blue-700 ">
          <button className="mt-5 hover:me-1" onClick={() => readMore(id)}>
            Read More
          </button>
          <FontAwesomeIcon
            className="ms-2 hover:ms-3 cursor-pointer"
            icon={faArrowRight}
          />
        </div>
      </div>
      {/* Cambiar diseño despues si no me gusta */}
      {user.email === email && (
        <div className="block">
          <MoreVert
            className="absolute top-6 right-1 text-gray-700 cursor-pointer"
            onClick={() => setIsClick(!isClick)}
          />
          {isClick && (
            <div className="absolute top-12 right-5 text-gray-100 cursor-pointer bg-black shadow rounded px-4">
              <div className="flex gap-1 items-center hover:text-gray-300 pt-3 pb-1  rounded-t">
              <Button variant="contained">
                  Edit
                <BorderColorOutlined
                  sx={{ fontSize: "17px", marginLeft: "5px" }}
                />
                </Button>
              </div>
              <div className="hover:text-red-700 text-red-500 pb-3 pt-2  rounded-b ">
                <Button variant="outlined" color="error" onClick={() => setAlertDelete(true)}>
                  Delete
                </Button>
              </div>
              {alertDelete && <AlertDelete show={alertDelete} setDelete={(choice) => handleChoiceDelete(choice)}/>}
            </div>
          )}
        </div>
      )}

      <ProfilePublish author={author} date={date} />
    </div>
  );
}

export default Card;
