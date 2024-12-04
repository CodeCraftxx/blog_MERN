import { useContext } from "react";
import Search from "./Search";
import Card from "./Card/Card";
import { BlogContext } from "../../Context/BlogContext";

function ShowBlogs() {
  const { blogs, isLoading } = useContext(BlogContext);
  return (
    <div>
      <section className="mt-[100px] min-h-screen">
        <h1 className="text-4xl mb-4">
          {" "}
          <i>Blogs...</i>
        </h1>
        <Search />
        <div className="my-[3rem] grid lg:grid-cols-4 md:grid-cols-2 gap-3">
          {isLoading
            ? "Loading..."
            : blogs.map((blog) => (
                <Card
                  key={blog._id}
                  id={blog._id}
                  title={blog.title}
                  content={blog.content}
                  author={blog.author}
                  date={blog.createdAt}
                />
              ))}
        </div>
      </section>
    </div>
  );
}

export default ShowBlogs;
