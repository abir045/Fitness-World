import React from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

//  receiving props from SearchExercises component
const HorizontalScrollbar = ({ data, bodypart, setBodyPart }) => {
  return (
    <ScrollMenu>
      {data.map((item) => {
        return (
          <div
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
          >
            <BodyPart item={item} />
          </div>
        );
      })}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
