const Toggle = ({ text, isChecked, toggleChecked }) => {
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          className="sr-only peer"
          type="checkbox"
          checked={isChecked}
          onChange={toggleChecked}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-white dark:text-gray-300">
          {text}
        </span>
      </label>
    </>
  );
};

export default Toggle;
