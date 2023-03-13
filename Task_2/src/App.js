import { useState } from "react";
import axios from "axios";
function App() {
  const [result, setResult] = useState([]);
  const handleClick = (event) => {
    event.preventDefault();
    axios.get("https://api.github.com/users").then(res => {
      console.log(res.data);
      setResult(res.data);
    })
      .catch(err => {
        alert("Something went wrong!")
      })

  };

  return (
    <div className="App">
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="/">
          <img style={{ width: 50, height: 50 }} src="https://cdn-icons-png.flaticon.com/128/3449/3449746.png" alt="Logo" /> Around the World
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar">
          <button
            className="btn btn-primary" type="button"
            onClick={handleClick}
          >
            Get Users
          </button>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="col justify-content-center">
          {result.map((item) => (
            <div className="col-lg-6">
              <div
                className="card mr-2 mt-5 text-black bg-white p-1 shadow-lg rounded border border-dark"
                style={{ maxWidth: "100%" }}
              >
                <div className="row no-gutters">
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.id}</h5>
                      <p className="card-text">
                        <b>Login name: </b> {item.login}
                      </p>
                      <p className="card-text">
                        <b>URL: </b> {item.url}
                      </p>
                      <p className="card-text">
                        <b>Node id: </b> {item.node_id}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
