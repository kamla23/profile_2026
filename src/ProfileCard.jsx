import myPhoto from "./assets/k.jpg";

function ProfileCard() {
  return (
    <div className="card">
      <div className="profile-img">
        <img src={myPhoto} alt="profile" />
      </div>

      <h2>
        FirstName
        <br />
        LastName
      </h2>
      <p className="role">SEO Expert</p>

      <div className="stats">
        <div>
          <h3>1k</h3>
          <p>Following</p>
        </div>
        <div>
          <h3>8k</h3>
          <p>Followers</p>
        </div>
        <div>
          <h3>500</h3>
          <p>Posts</p>
        </div>
      </div>

      <div className="buttons">
        <button>Send Message</button>
        <button>Follow Request</button>

      </div>
    </div>
  );
}
export default ProfileCard;
