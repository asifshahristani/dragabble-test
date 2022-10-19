import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import img from "../asset/Pixley-Middle-School.png";
import block1 from "../asset/Building 01/01-01.png";
import block2 from "../asset/Building 01/01-02.png";
import block3 from "../asset/Building 01/01-03.png";
import block4 from "../asset/Building 01/01-04.png";
import block5 from "../asset/Building 01/01-05.png";
import block6 from "../asset/Building 01/01-06.png";
import block7 from "../asset/Building 01/01-07.png";
import block8 from "../asset/Building 01/01-08.png";

const img_array = [
  { id: 1, img: block1, x: 0, y: 0 },
  { id: 2, img: block2, x: 0, y: 0 },
  { id: 3, img: block3, x: 0, y: 0 },
  { id: 4, img: block4, x: 0, y: 0 },
  { id: 5, img: block5, x: 0, y: 0 },
  { id: 6, img: block6, x: 0, y: 0 },
  { id: 7, img: block7, x: 0, y: 0 },
  { id: 8, img: block8, x: 0, y: 0 },
];

const Map = () => {
  const [positions, setPositions] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);

  const nodeRef = useRef(null);

  useEffect(() => {
    const existingDivPositions = JSON.parse(
      localStorage.getItem("map__positions__brett")
    );
    setPositions(existingDivPositions);
    setHasLoaded(true);
  }, []);

  function handleStop(e, data) {
    let dummyPositions = { ...positions };
    const itemId = e.target.id;
    dummyPositions[itemId] = {};
    dummyPositions[itemId]["x"] = data.x;
    dummyPositions[itemId]["y"] = data.y;
    setPositions(dummyPositions);
    localStorage.setItem(
      `map__positions__brett`,
      JSON.stringify(dummyPositions)
    );
  }

  if (!hasLoaded) return null;

  return (
    <div className="map__container">
      <img
        src={img}
        alt=""
        style={{ objectFit: "contain", height: "inherit", width: "inherit" }}
      />

      <div className="map__overlay__layer">
        {img_array.map((record) => (
          <Draggable
            defaultPosition={
              positions === null
                ? { x: 0, y: 0 }
                : !positions[record.id]
                ? { x: 0, y: 0 }
                : { x: positions[record.id].x, y: positions[record.id].y }
            }
            position={null}
            key={record.id}
            nodeRef={nodeRef}
            onStop={handleStop}
          >
            <div
              ref={nodeRef}
              style={{ display: "inline-block", cursor: "move" }}
            >
              <img
                id={record.id}
                src={record.img}
                alt=""
                height={20}
                className="img__item"
              />
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default Map;
