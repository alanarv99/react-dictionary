import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images) {
    console.log(props.images[0].src.landscape);

    return (
      <section className="Images">
        <div className="row">
          {props.images.map(function (image, index) {
            return (
              <div className="col-4">
                <a href={image.src.original} target="blank">
                  <img
                    src={image.src.portrait}
                    className="img-fluid"
                    key={index}
                    alt="Dictionary Image"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
