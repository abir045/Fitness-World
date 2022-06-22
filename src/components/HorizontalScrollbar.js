import React, { useContext } from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import WorkoutCard from "./WorkoutCard";

const LeftArrow = () => {
  // subscribe to visibility context
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <p className="flex-col cursor-pointer z-99" onClick={() => scrollPrev()}>
      <img src={LeftArrowIcon} alt="left arrow" />
    </p>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <p className="flex-col cursor-pointer z-99" onClick={() => scrollNext()}>
      <img src={RightArrowIcon} alt="left arrow" />
    </p>
  );
};

//  receiving props from SearchExercises component
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => {
        return (
          <div
            className="gap-10"
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
          >
            {isBodyParts ? (
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <WorkoutCard workout={item} />
            )}
          </div>
        );
      })}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
