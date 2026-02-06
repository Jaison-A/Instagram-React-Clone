import axios from "axios";
import React, { useEffect, useState } from "react";

function Suggestions() {
  const [profile, setProfile] = useState(null);
  const [follower, setFollower] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const makeFollow = (id) => {
    setFollower((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  useEffect(() => {
    fetch("http://localhost:8000/profile")
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:8000/suggestions")
      .then((data) => data.json())
      .then((data) => setSuggestions(data))
      .catch((err) => console.log(err));
  }, []);
  const handleFollowing = (id, username, profilePic) => {
    axios
      .post("http://localhost:8000/followers", {
        userId: id,
        username: username,
        profilePic: profilePic,
      })
      .then(() => alert("Followed"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="suggestions m-4 w-75">
        {profile ? (
          <div className="d-flex">
            <img
              className="dp rounded-circle"
              src={profile.profilePic}
              alt="Profile img"
            />
            <h5>{profile.username}</h5>
            <small className="text-primary ms-auto">Switch</small>
          </div>
        ) : (
          <div>Loading...</div>
        )}

        <div className="d-flex">
          <p>Suggested for you</p>
          <b className="ms-auto">See All</b>
        </div>

        {suggestions.length > 0 ? (
          <div>
            {suggestions.map((suggestion) => (
              <div key={suggestion.id}>
                <div className="d-flex">
                  <img
                    className="dp rounded-circle"
                    src={suggestion.profilePic}
                    alt="Profile img"
                  />
                  <h5>{suggestion.username}</h5>
                  <span
                    onClick={() => {
                      makeFollow(suggestion.id);
                      handleFollowing(
                        suggestion.id,
                        suggestion.username,
                        suggestion.profilePic,
                      );
                    }}
                    className="ms-auto text-primary"
                  >
                    {follower[suggestion.id] ? "Following" : "Follow"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
export default Suggestions;
