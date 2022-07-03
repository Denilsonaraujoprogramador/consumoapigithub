import React, {useState} from 'react';
import GithubImage from './githubimage1.jpg'
import './App.css';

function App() {
  const [search, setSearch] = useState();
  const [userData, setUserData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(userResponse => setUserData(userResponse));
  }

  console.log(userData)

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input
            type="text"
            className="form-control"
            required
            value={search}
            onChange={handleChange}
            />
            <span clasName="input-group-btn">
              <button type="submit" className="btn btn-success">
                search
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        {!userData && (
          <img
            src={GithubImage}
            className="responsive rounded-circle"
            alt=""
            heigth="200px"
          />
        )}
        {userData && (
          <div>
            <img
              src={userData.avatar_url}
              className="responsive rounded-circle"
              alt=""
              heigth="50px"
            />
            <h2 className="pt-4">
              <a href="https://github.com/Denilsonaraujoprogramador" terget="_new">
                {userData.name}
              </a>
            </h2>
            <h3>{userData.location}</h3>
            <p>
              <a href={userData.blog} terget="_new" className="text-infom">
                {userData.blog}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
