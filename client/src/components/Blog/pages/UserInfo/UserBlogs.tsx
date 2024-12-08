import { useContext } from "react";
import Card from "../Home/Card/Card";
import { UserContext } from "../../Context/UserContext";
import moment from 'moment';

function UserBlogs() {
  const { userBlogs, isLoading } = useContext(UserContext);
  return (
    <div className="w-full">
      <h1 className="text-xl font-medium">My Blogs</h1>
      <div className="my-[3rem] grid lg:grid-cols-2 md:grid-cols-1 gap-3">
          {isLoading
            ? "Loading..."
            : userBlogs.map((blog) => (
                <Card
                  key={blog._id}
                  id={blog._id}
                  title={blog.title}
                  content={blog.content}
                  author={blog.author}
                  date={moment(blog.createdAt).format('ll')}
                />
              ))}
        </div>
    </div>
  )
}

export default UserBlogs