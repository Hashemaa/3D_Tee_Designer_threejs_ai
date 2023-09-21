import { useSnapshot } from "valtio";

import state from "../store";
import { getContrastingColor, preventWhiteColor } from "../config/helpers";

const CustomButton = ({ id, type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: preventWhiteColor(snap.color),
        textShadow: "0px 0px 0px rgba(0, 0, 0, 1)",
      };
    } else if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    }
  };

  const onHover = () => {
    if (type === "outline") {
      return {
        backgroundColor: (document.getElementById(
          `${id}`
        ).style.backgroundColor = snap.color),

        color: (document.getElementById(`${id}`).style.color =
          getContrastingColor(snap.color)),
      };
    }
  };

  const offHover = () => {
    if (type === "outline") {
      return {
        backgroundColor: (document.getElementById(
          `${id}`
        ).style.backgroundColor = document.body.style.backgroundColor),
        borderWidth: (document.getElementById(`${id}`).style.borderWidth =
          "1px"),
        borderColor: (document.getElementById(`${id}`).style.borderColor =
          snap.color),
        color: (document.getElementById(`${id}`).style.color =
          preventWhiteColor(snap.color)),
      };
    }
  };

  return (
    <button
      id={id}
      className={`px-2 py-1.5 flex-1 rounded-md shadow ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
      onMouseEnter={onHover}
      onMouseLeave={offHover}
    >
      {title}
    </button>
  );
};

export default CustomButton;
