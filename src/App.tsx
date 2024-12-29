import { useEffect, useState } from "react";
import Main from "./components/Main";
import Details from "./components/Details";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  function handleToggleDetails() {
    setShowDetails(!showDetails);
  }

  useEffect(() => {
    async function fetchData(date = "2023-05-15") {
      const API_KEY = "zNQuDfAU23p8vXmybPXKyNCneKIEr8CACuQUDtAB";
      const url = date
        ? `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
        : `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setData(apiData);
        console.log(apiData);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log("An unknown error happened!");
        }
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loading-state">
          <i className="fa fa-gear"></i>
        </div>
      )}
      {showDetails && (
        <Details data={data} onToggleDetails={handleToggleDetails} />
      )}
      {data && !showDetails && (
        <Footer
          data={data}
          showDetails={showDetails}
          onToggleDetails={handleToggleDetails}
        />
      )}
    </>
  );
}

export default App;
