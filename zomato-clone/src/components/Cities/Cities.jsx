import React from "react";
import "./Cities.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Cities = () => {
  return (
    <div className="cities">
      <h1>
        Popular localities in and around <span>Amritsar</span>
      </h1>
      <div className="cityContainer">
        <div className="city">
          <div className="cityLeft">
            <h3>Pizzeria</h3>
            <span>Ranjit Avenue</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Sosha</h3>
            <span>B Block</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Sarovar Portico</h3>
            <span>C Block</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Hyaat Regency</h3>
            <span>Airport Road</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Regenta</h3>
            <span>Chehrata</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Golden Temple</h3>
            <span>Old Amritsar</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Prahalad Nagar</h3>
            <span>181 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>C G Road</h3>
            <span>94 Places</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>See more</h3>
          </div>
          <div className="icon">
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;