import React, { useState } from "react";
import AddTools from "./AddTools";
import Map from "./Map";
import SideTools from "./SideTools";

const AppLayout = () => {
  const [rects, setRects] = useState([]);

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
        <SideTools rects={rects} />
        <Map rects={rects} />
      </div>
    </div>
  );
};

export default AppLayout;
