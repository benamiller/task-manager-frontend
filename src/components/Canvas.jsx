import Button from "./Button.jsx";

const Canvas = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-fuchsia-300 w-screen h-screen flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center min-w-min">
      <div className="flex justify-center md:justify-start items-center min-w-max">
        <ul className="text-center md:text-left">
          <li>
            <Button text="New Task" />
          </li>
          <li>
            <Button text="New Board" />
          </li>
        </ul>
      </div>
      <main className="flex justify-center items-center h-5/6 w-5/6">
        <div className="bg-primary-500 w-full h-full rounded-lg"></div>
      </main>
    </div>
  );
};

export default Canvas;
