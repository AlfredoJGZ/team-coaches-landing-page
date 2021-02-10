import React from "react"
import imageBackground from "../images/image-background.svg"
import testImage from "../images/Automatic_updates.png"

function Feature({ title, desc, img, styles }) {
  return (
    <div
      styles={{ oveflow: "hidden" }}
      className="container-xl feature-container my-4 py-4 d-flex flex-column flex-md-row"
    >
      <div className="col-md-5 d-flex flex-column justify-content-center align-items-center">
        <h3 className="fc-main-blue">Some cool text</h3>
        <h2 className="mt-2 col-md-10">{title}</h2>

        {desc !== undefined ? (
          <p className="col-12 col-md-10 mt-2">{desc}</p>
        ) : (
          <div className="d-flex justify-content-center flex-wrap">
            <div className="d-flex flex-column col-5 justify-content-center align-items-center">
              <img src={testImage} style={{ width: 100 + "%" }} />
              <p>Scheduling</p>
            </div>
            <div className="d-flex flex-column col-5 justify-content-center align-items-center">
              <img src={testImage} style={{ width: 100 + "%" }} />
              <p>Public profile</p>
            </div>
            <div className="d-flex flex-column col-5 justify-content-center align-items-center">
              <img src={testImage} style={{ width: 100 + "%" }} />
              <p>Notes</p>
            </div>
          </div>
        )}
      </div>
      <div className="image-container d-flex justify-content-center align-items-center position-relative">
        <img
          className="mt-2 mt-md-0 hide feature-image rounded"
          src={img}
          alt="Feature Image"
        />
      </div>
    </div>
  )
}

export default Feature
