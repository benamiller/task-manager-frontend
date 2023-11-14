import Button from "./Button.jsx";
import Column from "./Column.jsx";
import { useState } from "react";

const Canvas = () => {
  const [tasksTodo, setTasksTodo] = useState([
    {
      id: "1",
      title: "First todo title",
      body: "First todo body",
    },
    {
      id: "2",
      title: "Second todo title",
      body: "Second todo body",
    },
    {
      id: "3",
      title: "Third todo title",
      body: "Third todo body",
    },
  ]);
  const [tasksInProgress, setTasksInProgress] = useState([
    {
      id: "4",
      title: "First in progress title",
      body: "First in progress body",
    },
    {
      id: "5",
      title: "Second in progress title",
      body: "Second in progress body",
    },
  ]);
  const [tasksDone, setTasksDone] = useState([
    {
      id: "6",
      title: "First done title",
      body: "First done body",
    },
  ]);
  const columns = [
    {
      id: "1",
      title: "Todo",
      tasks: tasksTodo,
    },
    {
      id: "2",
      title: "In Progress",
      tasks: tasksInProgress,
    },
    {
      id: "3",
      title: "Done",
      tasks: tasksDone,
    },
  ];

  const onDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
    console.log("THE TASKID GRABBED IS: " + taskId);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, droppedOnTaskId) => {
    console.log("THE DROPPED ON TASKID IS: " + droppedOnTaskId);
    const draggedTaskId = e.dataTransfer.getData("taskId");
    if (draggedTaskId === droppedOnTaskId) return;

    setTasksTodo((prevTasks) => {
      const draggedTaskIndex = prevTasks.findIndex(
        (task) => task.id === draggedTaskId,
      );
      const droppedOnTaskIndex = prevTasks.findIndex(
        (task) => task.id === droppedOnTaskId,
      );
      const newTasks = [...prevTasks];

      // Reorder tasks
      newTasks.splice(draggedTaskIndex, 1);
      newTasks.splice(droppedOnTaskIndex, 0, prevTasks[draggedTaskIndex]);

      return newTasks;
    });
  };

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
        <div className="flex flex-wrap bg-primary-500 w-full h-full rounded-lg">
          {columns.map((column) => (
            <Column
              title={column.title}
              tasks={column.tasks}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Canvas;
