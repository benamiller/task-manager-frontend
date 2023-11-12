import Toggle from "../components/Toggle";

export default {
  title: "Board/Toggle",
  component: Toggle,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const Primary = {
  args: {
    text: "Toggle Me!",
    isChecked: false,
    toggleChecked: () => console.log("Toggled"),
  },
};
