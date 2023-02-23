import React from "react";
import BasicInfoComponent from "./components/BasicInfoComponent";
import defaultHeadphones from "../../assets/images/headphones.png";
import defaultRocket from "../../assets/images/rocket.png";
import defaultWarranty from "../../assets/images/badge.png";

const BasicInfo = () => {
  return (
    <div className="basic-info-wrapper">
      <BasicInfoComponent
        img={defaultRocket}
        title="Free Shipping Worldwide"
        subtitle="Free Shipping in the world"
      />

      <BasicInfoComponent
        img={defaultHeadphones}
        title="24/7 Customer Support"
        subtitle="Service Support 24/7"
      />

      <BasicInfoComponent
        img={defaultWarranty}
        title="Best Quality Product"
        subtitle="Premium Quality Product"
      />
    </div>
  );
};

export default BasicInfo;
