import { useEffect, useState } from "react";
import Message from "./Message";
import "./styles.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUserLoggedIn(true);
  };

  useEffect(() => {
    console.log("Email has changed");
  }, [email]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="elon@spacex.com"
          value={email}
        />
        <input type="submit" value="Submit" />
      </form>
      <button
        onClick={(event) =>
          isUserLoggedIn ? setIsUserLoggedIn(false) : isUserLoggedIn
        }
      >
        Lougout
      </button>
      {isUserLoggedIn && <Message />}
    </div>
  );
}
