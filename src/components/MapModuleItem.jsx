import Tippy from "@tippyjs/react";
import React from "react";
import MapModuleItemPopup from "./MapModuleItemPopup";

const MapModuleItem = ({ data }) => {
  return (
    <Tippy
      content={<MapModuleItemPopup />}
      interactive={true}
      delay={100}
      arrow={true}
      // placement=""
      animation="scale"
    >
      <img
        id={data.id}
        src={data.img}
        alt=""
        height={20}
        className="img__item"
      />
    </Tippy>
  );
};

export default MapModuleItem;
