const Tile = ({ text }) => {
  return (
    <div className="text-fuchsia-500">
      <p>{text}</p>
      <form className="flex justify-center items-center">
        <label for="isComplete">Complete</label>
        <input
          type="checkbox"
          id="isComplete"
          name="isComplete"
          value="isComplete"
        />
        <label for="isHidden">Hide</label>
        <input type="checkbox" id="isHidden" name="isHidden" value="isHidden" />
      </form>
    </div>
  );
};

export default Tile;
