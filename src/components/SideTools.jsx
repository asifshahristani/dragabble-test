import React, { useState } from "react";

const SideTools = ({ rects }) => {
  const [selectedRects, setSelectedRects] = useState([]);

  const handleOnCheckRect = (e, rect) => {
    if (e.target.checked) {
      const index = selectedRects.findIndex(
        (record) => record.name === rect.name
      );

      if (index === -1) {
        const newSelectedRects = [...selectedRects, rect];
        setSelectedRects(newSelectedRects);
      }
    } else {
      const index = selectedRects.findIndex(
        (record) => record.name === rect.name
      );

      if (index !== -1) {
        const newSelectedRects = [...selectedRects];
        newSelectedRects.splice(index, 1);
        setSelectedRects(newSelectedRects);
      }
    }
  };

  return (
    <div className="side-tools__container">
      {rects.map((rect) => (
        <div key={rect.name} className="side-tools__rect__items">
          <span>{rect.name}</span>

          {/* <span>s</span> */}
          <input
            type="checkbox"
            name={rect.name}
            id=""
            onChange={(e) => handleOnCheckRect(e, rect)}
          />
        </div>
      ))}

      <div>Selected Items Count: {selectedRects.length}</div>
    </div>
  );
};

export default SideTools;
