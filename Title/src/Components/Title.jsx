import { useEffect } from "react";

const Title = ({ userName }) => {
  useEffect(() => {
    let interval = setInterval(() => {
      console.log("Fetching API...");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("UnMount");
      
    };
  }, []);

  return (
    <div>
      <h1>Welcome back, {userName}</h1>
    </div>
  );
};

export default Title;
