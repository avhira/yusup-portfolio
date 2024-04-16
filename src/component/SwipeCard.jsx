/* eslint-disable react/prop-types */
// SwipeCard.js
import TinderCard from 'react-tinder-card';

const SwipeCard = ({ profiles }) => {
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction);
    // Handle swipe action
  };

  return (
    <div className="wrap-card">
      {profiles.map((profile, i) => (
        <TinderCard key={i} onSwipe={onSwipe}>
          <div key={i} className="card">
            <div className="image_container">
              <img src={profile.image} alt={profile.title} />
            </div>
            <div className="title">
              <span>{profile.title}</span>
            </div>
            <a href={profile.link} className="cart-button" target="_blank" rel="noreferrer">
              <span>See More</span>
            </a>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default SwipeCard;
