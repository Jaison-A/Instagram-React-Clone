import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Stories() {
  const navigate = useNavigate();
  const [tot, setTot] = useState(0);
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/stories")
      .then((res) => res.json())
      .then((data) => {
        setStories(data);
        setTot(data.length);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="story d-flex">
      {stories.length > 0 ? (
        stories.map((story) => (
          <div
            className="mx-1"
            key={story.id}
            onClick={() => {
              navigate(`/story/${story.id}/${tot}`);
            }}
          >
            <div className="gradient-border ">
              <img
                className="story-dp rounded-circle"
                src={story.user.profilePic}
                alt="story img"
              />
            </div>
            <p className="text-truncate " style={{ width: "50px" }}>
              {story.user.username}
            </p>
          </div>
        ))
      ) : (
        <p>Loading stories...</p>
      )}
    </div>
  );
}

export default Stories;
