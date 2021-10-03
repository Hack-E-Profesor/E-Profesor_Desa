const ButtonPrimary = (props) => {
  return (
    <button
      className="bg-purple-700 px-2 py-2 rounded hover:bg-opacity-75"
      {...props}>
      {props.text}
    </button>
  );
};

export default ButtonPrimary;
