import React, { useState } from "react";

const AddTools = ({ rects, onAddRect }) => {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [name, setName] = useState("");
  const [isAddFormShown, setIsAddFormShown] = useState(false);

  const handleAdd = () => {
    onAddRect({ height: +height, width: +width, name, x: 0, y: 0 });
    reset();
  };

  const handleCancel = () => {
    reset();
  };

  const reset = () => {
    setIsAddFormShown(false);
    setHeight("");
    setWidth("");
    setName("");
  };

  return (
    <div className="add-tools__container">
      {!isAddFormShown && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setIsAddFormShown(true)}
        >
          Add Rectangle
        </button>
      )}

      {isAddFormShown && (
        <div>
          <input
            type="text"
            className="add-tools__input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            className="add-tools__input"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            className="add-tools__input"
            placeholder="Width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          &nbsp; &nbsp;
          <button type="button" className="btn btn-primary" onClick={handleAdd}>
            Add
          </button>
          &nbsp; &nbsp;
          <button type="button" className="btn" onClick={handleCancel}>
            cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTools;
