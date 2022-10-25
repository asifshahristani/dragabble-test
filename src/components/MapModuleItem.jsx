// import Tippy from "@tippyjs/react";
import React from "react";
import toast from "react-hot-toast";
// import MapModuleItemPopup from "./MapModuleItemPopup";

const MapModuleItem = ({ data }) => {
  return (
    // <Tippy
    //   content={<MapModuleItemPopup />}
    //   interactive={true}
    //   delay={100}
    //   arrow={true}
    //   // placement=""
    //   animation="scale"
    // >
    <img
      id={data.id}
      src={data.img}
      alt=""
      height={20}
      className="img__item"
      onClick={() => {
        toast(data.name, {
          // icon: "👏",
          duration: 1000,
        });
      }}
    />
    // </Tippy>
  );
};

export default MapModuleItem;
