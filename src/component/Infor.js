import React from "react";
import { Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
const Infor = () => {
  return (
    <Container>
      <div className="main">
        <h1>
          <span className="PNG">
            PNG <span className="to">to</span>
          </span>{" "}
          <span className="JPG">JPG</span>
        </h1>

        <div className="dropD">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Language
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">English</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Espanol</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Français</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Indonesia</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Español</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Deutsch</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Urdu</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Hindi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="detail">
        <p>
          This free online tool converts your PNG images to JPEG format,
          applying proper compression methods. Unlike other services, this tool
          does not ask for your email address, offers mass conversion and allows
          files up to 50 MB.
        </p>
        <hr />
        <div className="detail2">
          <p className="paragraph1">
            <h4>1</h4> <hr />
            Click the UPLOAD FILES button and select up to 20 .png images you
            wish to convert. You can also drag files to the drop area to start
            uploading.
          </p>
          <p className="paragraph2">
            <h4>2</h4> <hr />
            Take a break now and let our tool upload your files and convert them
            one by one, automatically choosing the proper compression parameters
            for every file.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Infor;
