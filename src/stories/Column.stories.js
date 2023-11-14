import Column from "../components/Column";

export default {
  title: "Board/Column",
  component: Column,
  tags: ["autodocs"],
  paramaters: {
    layout: "fullscreen",
  },
};

export const Primary = {
  args: {
    title: "Column title",
    tasks: [
      {
        title: "I am a title",
        body: "I am a test body",
      },
      {
        title: "I am a second test title",
        body: "I am a second test body",
      },
    ],
  },
};
