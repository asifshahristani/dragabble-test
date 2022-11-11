import { Resizable } from "re-resizable";
import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import img from "../asset/Pixley-Middle-School.png";

const Map = ({ rects }) => {
  const [positions, setPositions] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isDraggerDisabled, setIsDraggerDisabled] = useState(false);

  // const nodeRef = useRef(null);
  const nodeRef1 = useRef(null);

  useEffect(() => {
    const existingDivPositions = JSON.parse(
      localStorage.getItem("map__positions__brett")
    );
    setPositions(existingDivPositions);
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    setIsDraggerDisabled(true);
    const draggerTimeout = setTimeout(() => {
      setIsDraggerDisabled(false);
    }, 500);

    return () => {
      clearTimeout(draggerTimeout);
    };
  }, [nodeRef1.current?.clientWidth, nodeRef1.current?.clientHeight]);

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
        {rects.map((record) => (
          <Draggable
            disabled={isDraggerDisabled}
            defaultPosition={
              positions === null
                ? { x: 0, y: 0 }
                : !positions[record.name]
                ? { x: 0, y: 0 }
                : { x: positions[record.name].x, y: positions[record.name].y }
            }
            position={null}
            key={record.name}
            nodeRef={nodeRef1}
            onStop={handleStop}
            bounds="parent"
            // className="test__popup__onhover"
          >
            <div ref={nodeRef1} className="map__resizeable__container">
              <Resizable
                // bounds="parent"
                defaultSize={{
                  height: record.height,
                  width: record.width,
                }}
                style={{
                  display: "inline-block",
                  cursor: "move",
                  backgroundColor: "rgba(108, 163, 245, 0.3)",
                }}
              ></Resizable>
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default Map;
