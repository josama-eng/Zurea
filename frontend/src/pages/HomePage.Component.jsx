import React from "react";
import BasicInfo from "../components/ourBasicInfo/Basic.Info";
import RandomComponents from "../components/category/Random.Components";
import Slide from "../components/homePageSLider/Slide";

function HomePageComponent() {
  return (
    <>
      <div>HomePage Component</div>
      <Slide />
      <RandomComponents />
      <BasicInfo />
    </>
  );
}

export default HomePageComponent;
