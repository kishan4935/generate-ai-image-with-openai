import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  const configuration = new Configuration({
    apikey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      promt: "say this is a test",
      n: 1,
      size: "1024x1024",
    });
    console.log(res.data.data[0].url);
  };

  return (<div>
    <button onclick={generateImage}>Generate an Image</button>
  </div>);
  
}

export default App;
