import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

const TileDialog = ({ project, title, open, handleOpen }) => {
  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog open={open} handler={handleOpen} size="xl">
        <DialogHeader>{title}</DialogHeader>
        <div className="bodyHeader flex justify-start items-start"></div>
        <p>{project}</p>
        <p>{project}</p>
        <p>{project}</p>
        <p>{project}</p>
        <p>{project}</p>
        <p>{project}</p>
        <p>{project}</p>
        <p>{project}</p>
        <p>{project}</p>
        <p>{project}</p>
        <p>{project}</p>
        <p>{project}</p>
        <p>{project}</p>
        <p>{project}</p>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Delete</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default TileDialog;
