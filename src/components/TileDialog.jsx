import React, { useState } from "react";

const TileDialog = ({ task, isOpen, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [body, setBody] = useState(task.body);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="flex flex-col">
          <input
            type="text"
            className="mb-4 p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="p-2 border rounded"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button
            className="mt-4 p-2 border rounded bg-blue-500 text-white"
            onClick={() => onClose(title, body)}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default TileDialog;
