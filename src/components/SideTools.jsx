import React, { useState } from "react";
import { toast } from "react-toastify";

const SideTools = ({ rects, groups, onAddGroup }) => {
  const [selectedRects, setSelectedRects] = useState([]);
  // const [showGroupForm, setShowGroupForm] = useState(false);
  const [name, setName] = useState("");

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

  function handleAddGroup() {
    const index = groups.findIndex((group) => group.name === name);
    if (index !== -1)
      toast.error("Please add a unique name, name: " + name + " already used");

    onAddGroup({ name, members: [...selectedRects], visible: true });
    setSelectedRects([]);
    setName("");
  }

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

      <div className="side-tools__group__form">
        {/* {!showGroupForm && (
          <button
            type="button"
            className="btn btn-primary"
            disabled={selectedRects.length === 0}
            onClick={() => setShowGroupForm(true)}
          >
            + Group
          </button>
        )} */}

        {selectedRects.length !== 0 && (
          <div style={{ margin: "1rem 0" }}>
            <input
              type="text"
              className="add-tools__input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button
              type="button"
              className="btn btn-primary my-1"
              disabled={selectedRects.length === 0}
              onClick={handleAddGroup}
            >
              Add Group
            </button>
          </div>
        )}

        {groups.length > 0 && (
          <div>
            {groups.map((group) => (
              <div className="side-tools__group__item">
                <span>{group.name}</span>
                <span>{group.members.length}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideTools;
