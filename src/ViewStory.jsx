import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ViewStory() {
  const { id, total } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/stories/${id}`)
      .then((res) => res.json())
      .then((data) => setStory(data))
      .catch((err) => console.log(err));
  }, [id]);
  if (id < 1 || id > total) {
    navigate("/");
  }
  return (
    <div>
      {/* {story && <p>{story.user.username}</p>} */}
      {story ? (
        <div className="d-flex justify-content-center align-items-center">
          <Link to={`http://localhost:5173/story/${Number(id) - 1}/${total}`}>
            <i className="bi bi-arrow-left-circle-fill"></i>
          </Link>
          <img className="vh-100" src={story.storyImage} alt="Story" />
          <Link to={`http://localhost:5173/story/${Number(id) + 1}/${total}`}>
            <i className="bi bi-arrow-right-circle-fill"></i>
          </Link>
        </div>
      ) : (
        <p>Loading story...</p>
      )}
    </div>
  );
}

export default ViewStory;
