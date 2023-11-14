import Tile from "./Tile";
import { useEffect, useState } from "react";

const Column = ({ title, tasks, onDragStart, onDragOver, onDrop }) => {
  return (
    <>
      <main className="mx-3 my-2 p-2 bg-primary-100 rounded-lg">
        <div className="text-black">{title}</div>
        {tasks.map((task) => {
          return (
            <Tile
              key={task.id}
              id={task.id}
              title={task.title}
              body={task.body}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
            />
          );
        })}
      </main>
    </>
  );
};

export default Column;
