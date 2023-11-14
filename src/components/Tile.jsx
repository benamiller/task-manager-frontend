import Toggle from "./Toggle";

const Tile = ({ id, title, body, onDragStart, onDragOver, onDrop }) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, id)}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, id)}
      className="group my-2 text-white w-80 h-20 bg-slate-700 flex flex-wrap justify-start items-start rounded-md border-solid border-2 border-slate-700 hover:border-slate-600 hover:cursor-grab focus-within:ring focus-within:ring-violet-300"
    >
      <div className="my-2 mx-1 text-slate-300 flex flex-nowrap justify-start items-center project text-sm">
        <svg
          className="h-6 m-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
          ></path>
        </svg>
        <p className="text-sm mx-2 select-none hover:cursor-default">
          {title.trim().length < 42
            ? title
            : title.substring(0, 38).trim() + "..."}
        </p>
        <svg
          className="hidden group-hover:block h-6 hover:cursor-pointer"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          ></path>
        </svg>
      </div>

      <span className="basis-full h-0"></span>

      <div className="mx-2 title text-md">
        <p className="mb-4 select-none hover:cursor-pointer hover:underline">
          {body.trim().length < 40
            ? body
            : body.substring(0, 36).trim() + "..."}
        </p>
      </div>
    </div>
  );
};

export default Tile;
