const Button = ({ text }) => {
  return (
    <button className="border-2 border-white text-white font-normal my-1 hover:bg-primary-500 hover:text-primary-100 hover:border-primary-500 py-1 px-3 mx-10 rounded-full shadow transition ease-out duration-300">
      {text}
    </button>
  );
};

export default Button;
