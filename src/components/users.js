import React from "react";
import "./user.css";
const Users = ({ user }) => {
  if (!user) {
    return null;
  }
  return (
    <div className="user">
      <div className="personal-info">
        <div className="img">
          <img src={user.avatar_url} alt="img" width="300px" height="300px" />
        </div>
        <h1 className="name">{user.name}</h1>
        <p className="bio">{user.bio}</p>
      </div>
      <div className="gth-info">
        <div className="infos">
          <div className="info">
            <h4>
              <b>Repository: </b>
              {user.public_repos}
            </h4>
          </div>
          <div className="info">
            <h4>Followers: {user.followers}</h4>
          </div>
          <div className="info">
            <h4>Following: {user.following}</h4>
          </div>
          <div className="info">
            <h4>Date Created: {user.created_at}</h4>
          </div>
        </div>

        <a href={user.html_url}>
          <button>Visit </button>
        </a>
      </div>
    </div>
  );
};

export default Users;
