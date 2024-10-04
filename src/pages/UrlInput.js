import React, { useState } from "react";
import axios from "axios";

export default function UrlInput() {
  const [inputUrl, setInputUrl] = useState("");

  const handleUrl = (e) => {
    setInputUrl(e.target.value);
  };
  const shortenUrl = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/shorten", {
        url: inputUrl,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={shortenUrl}>
        <input
          type="text"
          name="name"
          value={inputUrl}
          onChange={handleUrl}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
