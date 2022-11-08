import React, { useState } from "react";
import AddTools from "./AddTools";
import Map from "./Map";
import SideTools from "./SideTools";

const AppLayout = () => {
  const [rects, setRects] = useState([]);
  const [groups, setGroups] = useState([]);
  const [hiddenGroups, setHiddenGroups] = useState([]);

  function handleOnAddGroup(group) {
    const groupMembers = [...group.members];

    let newRects = [...rects];
    newRects = newRects.map((rect) => {
      const newRect = { ...rect };
      const index = groupMembers.findIndex(
        (member) => member.name === rect.name
      );

      if (index !== -1) newRect.group = group.name;

      return newRect;
    });

    setRects(newRects);
    setGroups((pre) => [...pre, group]);
  }

  function handleGroupVisibilityToggle(group, index) {
    const newGroup = { ...group };

    if (newGroup.visible) {
      setHiddenGroups((pre) => [...pre, group.name]);
    } else if (!newGroup.visible && hiddenGroups.length > 0) {
      const newHiddenGroups = [...hiddenGroups];
      const groupIndex = newHiddenGroups.findIndex(
        (groupName) => groupName === newGroup.name
      );

      if (groupIndex !== -1) {
        newHiddenGroups.splice(groupIndex, 1);
        setHiddenGroups(newHiddenGroups);
      }
    }

    newGroup.visible = !newGroup.visible;
    const newGroups = [...groups];
    newGroups[index] = newGroup;
    setGroups(newGroups);
  }

  function getRectsToPrint() {
    if (hiddenGroups.length === 0) return rects;

    let newRects = [...rects];
    newRects = newRects.filter((rect) => {
      const index = hiddenGroups.findIndex(
        (groupName) => groupName === rect.group
      );
      return index === -1 ? true : false;
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
          onGroupVisibilityToggle={handleGroupVisibilityToggle}
        />
        <Map rects={getRectsToPrint()} />
      </div>
    </div>
  );
};

export default AppLayout;
