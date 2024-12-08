import { faShare, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import ButtonSocial from "./ButtonSocial";
import ProfilePublish from "../Home/Card/ProfilePublish";
import { useContext } from "react";
import { BlogContext } from "../../Context/BlogContext";

function Blog() {
  const { readBlog } = useContext(BlogContext);
  return (
    <div className="px-[50px] w-screen min-h-screen  overscroll-x-none">
      {readBlog.map((blog) => (
        <div key={blog._id} className="lg:w-1/2 md:w-2/3 mx-auto py-[100px]">
          <h1 className="sm:text-6xl text-4xl leading-normal mb-5">
            {blog.title}
          </h1>
          <ProfilePublish author={blog.author} date={blog.createdAt} />

          <div className="my-[2.5rem]">
            <p>{blog.content}</p>
          </div>

          <div className="flex gap-4">
            <ButtonSocial text="Like" fontIcon={faThumbsUp} />
            <ButtonSocial text="Share" fontIcon={faShare} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
