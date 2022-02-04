import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Users from "./components/users";
import bg from "./assets/github.svg";
function App() {
  const [isInput, setIsInput] = useState();
  const [err, setError] = useState(false);
  const [user, setUser] = useState();
  const [dfuser, setdfuser] = useState();
  const search = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${isInput}`);
      const data = await res.data;
      setUser(data);
      setError();
    } catch (e) {
      setError(e.message);
      setUser();
    }
  };
  useEffect(() => {
    const func = async () => {
      try {
        const res = await axios.get(
          `https://api.github.com/users/jonathandigay`
        );
        const data = await res.data;
        setdfuser(data);
        setError();
      } catch (e) {
        setError(e.message);
        setdfuser();
      }
    };
    func();
  });

  return (
    <div className="App">
      <header className="App-header">
        <h3> Github Users</h3>
      </header>
      <div className="search-seaction">
        <div className="search-form">
          <input
            type="text"
            placeholder="search github username.."
            onChange={(e) => setIsInput(e.target.value)}
          />
          <button onClick={search}>Search</button>
        </div>
      </div>
      {err && (
        <div className="err">
          <h3>Cant fetch username!!</h3>
        </div>
      )}

      <Users user={user ? user : dfuser} />

      <div className="gth-bg">
        <img src={bg} alt="img" />
      </div>
    </div>
  );
}

export default App;
