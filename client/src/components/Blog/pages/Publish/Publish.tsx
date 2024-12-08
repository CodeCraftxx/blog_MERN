import { useContext, useState } from "react";
import { BlogContext } from "../../Context/BlogContext";
import { UserContext } from "../../Context/UserContext";

type Blog = {
  title: string;
  content: string;
  author: string;
  email: string;
};
function Publish() {
  const { postBlog } = useContext(BlogContext);
  const { user } = useContext(UserContext);
  const labelStyle = "font-semibold text-gray-800 block mb-2";
  const inputStyle = "border border-black px-4 py-2 rounded-full w-full";
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePublish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const blog: Blog = { title, content, author: `${user.first} ${user.last}`, email: user.email };
    postBlog(blog);
    setTitle("");
    setContent("");
  };
  const handleCancel = () => {
    window.history.back();
  };
  return (
    <div className="px-[50px] w-screen min-h-screen  overscroll-x-none">
      <div className="lg:w-1/2 md:w-2/3 mx-auto py-[100px]">
        <h1 className="text-4xl mb-[3rem]">Your Blog</h1>
        <form onSubmit={handlePublish} onReset={handleCancel}>
          <div className="mb-4">
            <label className={labelStyle} htmlFor="blog-title">
              Title
            </label>
            <input
              className={inputStyle}
              type="text"
              name="blog-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className={labelStyle} htmlFor="blog-content">
              Content
            </label>
            <textarea
              className="border border-black px-4 py-2 w-full rounded-lg"
              rows={5}
              name="blog-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className={labelStyle} htmlFor="blog-author">
              Author
            </label>
            <p className={inputStyle}>{user.first} {user.last}</p>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-black text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-900"
              type="submit"
            >
              Publish
            </button>
            <button
              className="px-4 py-2 rounded-lg mt-4 hover:border hover:border-black hover:ease-in duration-100"
              type="reset"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Publish;
