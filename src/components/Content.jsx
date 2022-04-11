import React from 'react';

function Content() {
  return (
    <div className="content-main">
      <div className="profile-section">
        <div className="profile-img"></div>
        <div className="top">
          <div className="title">
            <h1>Title</h1>
            <h2>username</h2>
          </div>
          <div className="date">
            <p>Joined April 10 2022</p>
          </div>
        </div>
      </div>
      <div className="bio">
        <h2>Bio</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quos
          iusto incidunt facere! Corporis rerum eveniet quas, laboriosam
          veritatis laborum eum eligendi atque est eos.
        </p>
      </div>
      <div className="stats">
        <div className="stats-content">
          <div className="repos">
            <h2 className="responsive-h2">Repos</h2>
            <p className="responsive-p">8</p>
          </div>
          <div className="followers">
            <h2 className="responsive-h2">Followers</h2>
            <p className="responsive-p">1234</p>
          </div>
          <div className="following">
            <h2 className="responsive-h2">Following</h2>
            <p className="responsive-p">55</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-one">
          <div className="location">
            <p className="footer-p">
              <i className="fa-solid fa-location-dot"></i> Vacouver
            </p>
          </div>
          <div className="twitter">
            <p className="footer-p">
              <i class="fa-brands fa-twitter"></i> @tyrell_io
            </p>
          </div>
        </div>
        <div className="footer-two">
          <div className="website">
            <p className="footer-p">
              <i class="fa-solid fa-desktop"></i> tyrellcurry.io
            </p>
          </div>
          <div className="workplace">
            <div className="footer-p">
              <i class="fa-solid fa-building"></i>
              <p>TenTree</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
