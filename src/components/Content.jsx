import React from 'react';

function Content({theme, userData}) {
  return (
    <div className="content-main" data-theme={theme}>
      <div className="profile-section">
        <div className="profile-img">
          <img src={`${userData.avatar}`} alt="" />
        </div>
        <div className="top">
          <div className="title">
            <h1>{userData.name ? userData.name : 'GitHub User'}</h1>
            <h2>{userData.user ? userData.user : 'n/a'}</h2>
          </div>
          <div className="date">
            <p>
              Joined:{' '}
              {userData.date ? userData.date.substring(0, 10) : 'unknown'}
            </p>
          </div>
        </div>
      </div>
      <div className="bio">
        <h2>Bio</h2>
        <p>{userData.bio ? userData.bio : 'No bio available'}</p>
      </div>
      <div className="stats">
        <div className="stats-content">
          <div className="repos">
            <h2 className="responsive-h2">Repos</h2>
            <p className="responsive-p">
              {userData.repos ? userData.repos : '0'}
            </p>
          </div>
          <div className="followers">
            <h2 className="responsive-h2">Followers</h2>
            <p className="responsive-p">
              {userData.followers ? userData.followers : '0'}
            </p>
          </div>
          <div className="following">
            <h2 className="responsive-h2">Following</h2>
            <p className="responsive-p">
              {userData.following ? userData.following : '0'}
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-one">
          <div className="location">
            <p className="footer-p">
              <i className="fa-solid fa-location-dot"></i>
              {userData.location ? userData.location : 'Unavaiable'}
            </p>
          </div>
          <div className="twitter">
            <p className="footer-p">
              <i class="fa-brands fa-twitter"></i>
              {userData.twitter ? userData.twitter : 'Unavaiable'}
            </p>
          </div>
        </div>
        <div className="footer-two">
          <div className="website">
            <p className="footer-p">
              <i class="fa-solid fa-desktop"></i>
              {userData.website ? userData.website : 'Unavaiable'}
            </p>
          </div>
          <div className="workplace">
            <div className="footer-p">
              <i class="fa-solid fa-building"></i>
              <p>{userData.company ? userData.company : 'Unavaiable'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
