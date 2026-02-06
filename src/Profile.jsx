import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [followers, setFollowers] = useState([]);
  // const [unFollow, setUnFollow] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/profile")
      .then((data) => setProfile(data.data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8000/followers")
      .then((data) => {
        setFollowers(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  /*handling the changinging event
    ...  IS SEPERATOR FUNCTION
    must write this  CALLBACK function in ({}) else wont work
      */
  function handleOnChange(e) {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  /*
    updating the values in db
    using PUT methed for updating
    */
  const handleUpdate = async () => {
    axios
      .put("http://localhost:8000/profile", profile)
      .then(console.log("updated"))
      .catch((err) => console.log(err));
  };

  const handleUnFollow = async (id) => {
    axios
      .delete(`http://localhost:8000/followers/${id}`)
      .then(() => {
        alert("Unfollowed");
        setFollowers((prev) => prev.filter((f) => String(f.id) !== String(id)));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="m-5">
      {profile && (
        <div>
          <img src={profile.profilePic} className="profile rounded-circle" />
          <h5>{profile.username}</h5>
          <input
            type="text"
            name="username"
            value={profile.username}
            className="form-control my-3"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="profilePic"
            value={profile.profilePic}
            className="form-control my-3"
            onChange={handleOnChange}
          />
          <button onClick={handleUpdate} className="btn btn-primary my-3">
            Update
          </button>
        </div>
      )}
      <h3>Following:</h3>
      {followers.length > 0 ? (
        followers.map((follower) => (
          <div key={follower.id} className="d-flex my-2">
            {follower.username}
            <button
              onClick={() => handleUnFollow(follower.id)}
              className="btn btn-primary ms-auto"
            >
              UnFollow
            </button>
          </div>
        ))
      ) : (
        <div> Loading followers</div>
      )}
    </div>
  );
}
export default Profile;
