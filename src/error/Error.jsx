import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Error() {
  // const [data, setData] = useState("");
  // async function test() {
  //   let a = await axios.get("http://localhost:5005/hello2");
  //   console.log(a.data);
  //   setData(a.data);
  // }
  const [dataName, setDataName] = useState("");
  async function like() {
    try {
      let cat = await axios.get("https://catfact.ninja/fact");
      console.log(cat.data);
      setDataName(cat.data);
    } catch (err) {
      console.log(err.massage);
    }
  }
  const [hello, setHello] = useState("");
  async function high() {
    const apple = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    console.log(apple.data);
    setHello(apple.data);
  }

  const [fish, setFish] = useState("");
  async function number() {
    try {
      const banana = await axios.get("https://api.publicapis.org/entries");
      console.log(banana.data);
      setFish(banana.data);
    } catch (err) {
      console.log(err.massage);
    }
  }
  const [image, setImage] = useState("");
  async function dogs() {
    try {
      const dog = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(dog.data);
      setImage(dog.data);
    } catch (error) {
      window.alert(error.message);
    }
  }
  function nepal() {
    return (
      <div>
        <h1 className="text-white bg-black">thisa is a country nepal</h1>
      </div>
    );
  }
  const [video, setVideo] = useState("");
  async function red() {
    try {
      const tiger = await axios.get("http://localhost:5002/effect");
      setVideo(tiger.data);
      console.log(tiger.data);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    number();
    nepal();
    // dogs();
    console.log("hello world");
  }, []);

  //this is a javascript promises

  // let myPromise = new Promise(function (mySolve, myReject) { this is always same
  //   let value = 0;

  //   if (value == 0) {
  //     mySolve("this statement is true");
  //   } else {
  //     myReject("the statement is false");
  //   }
  // });
  // myPromise.then(
  //   function (value) {
  //     console.log(value);
  //   },
  //   function (error) {
  //     console.log(error);
  //   }
  // );

  return (
    <div className="bg-slate-500">
      <div className="bg-slate-500 min-h-96">
        <NavLink
          to="*"
          className="text-5xl text-white font-extrabold text-center"
        >
          This page is error
        </NavLink>
      </div>
      <div>
        <button
          onClick={like}
          className="border-2 p-2 rounded-xl border-white bg-amber-400"
        >
          click me
        </button>
        <div className="text-white">{dataName.fact}</div>
        {dataName.length}
      </div>
      {/* <container>
        <p1>{dataName.name}</p1>
        <br />
        <p1>{dataName.class}</p1>
        <br />
        <p1>{dataName.roll}</p1>
        <br />
      </container> */}
      <button
        onClick={high}
        className="border-2 p-2 rounded-xl border-white bg-slate-700"
      >
        click me
      </button>
      <div className="text-white">
        {hello.setup}
        {hello.punchline}
      </div>
      <button
        onClick={number}
        className="border-2 p-2 rounded-xl border-white bg-slate-700"
      >
        click me
      </button>
      {fish.count}
      <button
        onClick={dogs}
        className="border-2 p-2 rounded-xl border-white bg-red-50"
      >
        dogs image
      </button>
      <img src={image.message} className="text-sm" />
      <button onClick={red}>click me</button>
      <iframe src={video.video} height="200px" width="500px"></iframe>
    </div>
  );
}
export default Error;
