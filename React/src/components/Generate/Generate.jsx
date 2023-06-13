import React, { useState } from "react";
import { storage, database } from "../../appwrite/appwriteConfig";
import "./Generate.css";
import { v4 as uuidv4 } from "uuid";

function Generate() {
  const [imageFile, setImageFile] = useState(null);

  function handleImageChange(event) {
    setImageFile(event.target.files[0]);
  }
  function handleImageUpload() {
    if (!imageFile) {
      alert("Please select an image to upload");
      return;
    }

    // Upload file to Appwrite storage
    const promise = storage.createFile(
      "Image-AI",
      uuidv4(),
      document.getElementById("imageInput").files[0]
    );

    promise.then(
      function (response) {
        console.log(response); // Success
        alert("Image uploaded successfully!");
      },
      function (error) {
        console.log(error); // Failure
        alert("Failed to upload image");
      }
    );
  }
  const [audioFile, setAudioFile] = useState(null);

  function handleAudioChange(event) {
    setAudioFile(event.target.files[0]);
  }
  function handleAudioUpload() {
    if (!audioFile) {
      alert("Please select an audio to upload");
      return;
    }

    // Upload file to Appwrite storage
    const promise = storage.createFile(
      "Audio-AI",
      uuidv4(),
      document.getElementById("audioInput").files[0]
    );

    promise.then(
      function (response) {
        console.log(response); // Success
        alert("Audio uploaded successfully!");
      },
      function (error) {
        console.log(error); // Failure
        alert("Failed to upload audio");
      }
    );
  }

  const [chatFile, setChatFile] = useState(null);

  function handleChatChange(event) {
    setChatFile(event.target.files[0]);
  }
  function handleChatUpload() {
    if (!chatFile) {
      alert("Please select an chat to upload");
      return;
    }

    // Upload file to Appwrite storage
    const promise = storage.createFile(
      "Chat-AI",
      uuidv4(),
      document.getElementById("chatInput").files[0]
    );

    promise.then(
      function (response) {
        console.log(response); // Success
        alert("Audio uploaded successfully!");
      },
      function (error) {
        console.log(error); // Failure
        alert("Failed to upload audio");
      }
    );
  }

  const [personalityTraits, setPersonalityTraits] = useState([]);
  const [newTrait, setNewTrait] = useState("");

  function removePersonalityTrait(index) {
    const updatedTraits = personalityTraits.filter((_, i) => i !== index);
    setPersonalityTraits(updatedTraits);
  }

  function addPersonalityTrait() {
    if (newTrait.trim() !== "") {
      setPersonalityTraits([...personalityTraits, newTrait.trim()]);
      setNewTrait("");

      // Store the personality trait in the Appwrite database
      const promise = database.createDocument(
        "Personality-AI",
        "Traits-AI",
        uuidv4(),
        {
          trait: personalityInput.trim(),
        }
      );

      promise.then(
        function (response) {
          console.log(response); // Success
        },
        function (error) {
          console.log(error); // Failure
          alert("Failed to store the personality trait");
        }
      );
    }
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
            <button className="generate-button" onClick={handleImageUpload}>
              Upload
            </button>
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
            <button className="generate-button" onClick={handleAudioUpload}>
              Upload
            </button>
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
            <button className="generate-button" onClick={handleChatUpload}>
              Upload
            </button>
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
                onChange={(event) => setNewTrait(event.target.value)}
                onKeyUp={(event) => {
                  if (event.key === "Enter") {
                    addPersonalityTrait();
                  }
                }}
              />
              {/* <button className="generate-button" onClick={handleUpload}>
                Upload
              </button> */}
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
