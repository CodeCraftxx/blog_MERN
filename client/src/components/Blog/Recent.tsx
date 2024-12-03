type Props = {
  bgColor: string
  buttonStyle: string
}
function Recent({bgColor,buttonStyle}: Props) {
  return (
    <div className={`lg:row-span-2 sm:col-span-1 w-full ${bgColor} p-5 rounded-lg flex flex-col justify-between`}>
      <h2 className="lg:text-xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vero
        commodi distinctio reprehenderit assumenda delectus ipsa enim impedit a
        dolorum, debitis repellendus eveniet consectetur nisi consequuntur
        officia quam ab iure?
      </h2>
      <button className={`border-2 ${buttonStyle} px-4 py-2 rounded-md mt-5 lg:w-1/2`}>
        Read More{" "}
      </button>
    </div>
  );
}

export default Recent;
