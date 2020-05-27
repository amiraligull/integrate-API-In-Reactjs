/** @format */

import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  const image = props.images.map(({ id, urls, description }) => {
    return (
      <div>
        <img key={id} src={urls.regular} alt={description} />
      </div>
    );
  });
  return <div className="imageList">{image}</div>;
};
export default ImageList;
