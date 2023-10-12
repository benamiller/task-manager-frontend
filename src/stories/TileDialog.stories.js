import TileDialog from "../components/TileDialog";

export default {
  title: "Board/TileDialog",
  component: TileDialog,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Primary = {
  args: {
    project: "Project Jonji",
    title: "Title it is",
    open: false,
    handleOpen: () => console.log("toggled"),
  },
};
