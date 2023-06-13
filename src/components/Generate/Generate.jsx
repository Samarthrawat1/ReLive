import React, { useState } from "react";
import "./Generate.css";

function Generate() {
  const [imageFile, setImageFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [chatFile, setChatFile] = useState(null);
  const [personalityTraits, setPersonalityTraits] = useState([]);
  const [newTrait, setNewTrait] = useState("");

  function handleImageChange(event) {
    setImageFile(event.target.files[0]);
  }

  function handleAudioChange(event) {
    setAudioFile(event.target.files[0]);
  }

  function handleChatChange(event) {
    setChatFile(event.target.files[0]);
  }

  function handleNewTraitChange(event) {
    setNewTrait(event.target.value);
  }

  function addPersonalityTrait() {
    if (newTrait.trim() !== "") {
      setPersonalityTraits([...personalityTraits, newTrait.trim()]);
      setNewTrait("");
    }
  }

  function removePersonalityTrait(index) {
    const updatedTraits = personalityTraits.filter((_, i) => i !== index);
    setPersonalityTraits(updatedTraits);
  }

  // const Generate = () => {
  return (
    <div className="Generate">
      <div className="left-g">
        <hr />
        <div>
          <span className="stroke-text">Generate Your</span>
          <span>Loved</span>
        </div>
        <div>
          <span>Ones In The Form Of</span>
          <span className="stroke-text">Avatars</span>
        </div>
      </div>
      <div className="right-g">
        <div className="blur generate-blur"></div>
        {/* <form action="" className="generate-container">
          <input
            type="file"
            title="Upload Image"
            id="img"
            onChange="pressed("
          />
          <label htmlFor="img">Upload Image</label>
          <input
            type="file"
            title="Upload Image"
            id="img"
            onChange="pressed("
          />
          <label htmlFor="img">Upload Image</label>
          <input
            type="file"
            title="Upload Image"
            id="img"
            onChange="pressed("
          />
          <label htmlFor="img">Upload Image</label>
        </form> */}
        <div className=".generate-container">
          <div className="form-input">
            <label className="label-name" htmlFor="imageInput">
              Choose Image:
            </label>
            <input
              className="input-btn"
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div className="form-input">
            <label className="label-name" htmlFor="audioInput">
              Choose Audio:
            </label>
            <input
              className="input-btn"
              type="file"
              id="audioInput"
              accept="audio/*"
              onChange={handleAudioChange}
            />
          </div>

          <div className="form-input">
            <label className="label-name" htmlFor="chatInput">
              Upload Chats:
            </label>
            <input
              className="input-btn"
              type="file"
              id="chatInput"
              accept=".txt"
              onChange={handleChatChange}
            />
            <p className="input-instruction">Export the chat as a .txt file.</p>
          </div>

          <div className="form-input">
            <label className="label-name" htmlFor="personalityInput">
              Personality Traits:
            </label>
            <div className="personality-input">
              <input
                className="input-btn-personality"
                type="text"
                id="personalityInput"
                placeholder="Type a word and press enter"
                value={newTrait}
                onChange={handleNewTraitChange}
                onKeyUp={(event) => {
                  if (event.key === "Enter") {
                    addPersonalityTrait();
                  }
                }}
              />
              <div className="personality-tags">
                {personalityTraits.map((trait, index) => (
                  <div className="tag" key={index}>
                    {trait}
                    <span
                      className="remove"
                      onClick={() => removePersonalityTrait(index)}
                    >
                      &times;
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="input-instruction">
              Any personality trait like old, sweet, etc.
            </p>
          </div>
          <button className="btn btn-g">Generate</button>
        </div>
      </div>
    </div>
  );
}
export default Generate;
