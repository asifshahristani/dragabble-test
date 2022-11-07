import React, { useState } from "react";
import AddTools from "./AddTools";
import Map from "./Map";
import SideTools from "./SideTools";

const AppLayout = () => {
  const [rects, setRects] = useState([]);
  const [groups, setGroups] = useState([]);

  function handleOnAddGroup(group) {
    const groupMembers = [...group.members];

    let newRects = [...rects];
    newRects = newRects.filter((rect) => {
      const index = groupMembers.findIndex(
        (member) => member.name === rect.name
      );
      return index === -1 ? true : false;
    });

    setRects(newRects);
    setGroups((pre) => [...pre, group]);
  }

  function getRectsToPrint() {
    let newRects = [...rects];
    groups.forEach((group) => {
      if (group.visible) {
        newRects = [...newRects, ...group.members];
      }
    });

    return newRects;
  }

  return (
    <div>
      {/* <div>
        <Toaster position="top-center" />
      </div> */}
      <AddTools
        rects={rects}
        onAddRect={(newRect) => setRects([...rects, newRect])}
      />

      <div className="main-part__container">
        <SideTools
          rects={rects}
          groups={groups}
          onAddGroup={handleOnAddGroup}
        />
        <Map rects={getRectsToPrint()} />
      </div>
    </div>
  );
};

export default AppLayout;
