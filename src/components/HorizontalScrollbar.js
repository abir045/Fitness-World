import React, { useContext } from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  // subscribe to visibility context
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <p onClick={() => scrollPrev()}>
      <img src={LeftArrowIcon} alt="left arrow" />
    </p>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <p onClick={() => scrollNext()}>
      <img src={RightArrowIcon} alt="left arrow" />
    </p>
  );
};

//  receiving props from SearchExercises component
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => {
        return (
          <div
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
          >
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </div>
        );
      })}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
