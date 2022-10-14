import React from "react";
import { Container } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import { createWorker } from "tesseract.js";
const CrtdData = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [textResult, setTextResult] = useState("");

  const worker = createWorker();

  const convertImageToText = useCallback(async () => {
    if (!selectedImage) return;

    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const { data } = await worker.recognize(selectedImage);
    setTextResult(data.lines);
  }, [selectedImage, worker]);

  useEffect(() => {
    if (selectedImage) {
      convertImageToText();
    }
  });

  const handleChangeImg = (e) => {
    if (e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    } else {
      setSelectedImage(null);
      setTextResult("");
    }
  };
  return (
    <Container>
      <div className="App">
        
        <div className="input-wrapper">
          <label htmlFor="upload">Upload file</label>
          <input
            type="file"
            id="upload"
            accept="image/*"
            onChange={handleChangeImg}
          />
        </div>
        <div className="result">
          {selectedImage && (
            <div className="box-image">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="selectedImage"
              />
            </div>
          )}
          {textResult && (
            <div className="box-p">
              {textResult.map((line, index) => {
                return <p key={index}>{line.text}</p>;
              })}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CrtdData;
