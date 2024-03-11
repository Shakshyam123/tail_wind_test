import { useContext } from "react";
import GlobleContext from "../../Globalcontext";

function Home() {
  const contextvalue = useContext(GlobleContext);
  const { theme } = contextvalue;
  console.log(contextvalue.theme);
  return (
    <>
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
