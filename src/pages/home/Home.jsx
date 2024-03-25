import { useContext } from "react";
import GlobleContext from "../../Globalcontext";
import { useTheme } from "../../store/useTheme";

function Home() {
  const contextvalue = useContext(GlobleContext);
  const { color, bgColor, setColor, setDefault } = useTheme();
  console.log(color);
  console.log(bgColor);
  const { theme } = contextvalue;
  console.log(contextvalue.theme);
  return (
    <>
      <button
        onClick={() => {
          setColor("white", "black");
        }}
      >
        change color
      </button>
      <button
        onClick={() => {
          setDefault();
        }}
      >
        Default
      </button>
      <div
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
        }}
        className=" h-full"
      >
        <h1>this is a home page</h1>
      </div>
    </>
  );
}
export default Home;
