const BarBtn = ({ setShowType, getButtonStyle }) => {
  return (
    <div className="profile-bar">
      <button style={getButtonStyle('profile')} onClick={() => setShowType('profile')}>
        PROFILE
      </button>
      <button style={getButtonStyle('contact')} onClick={() => setShowType('contact')}>
        CONTACT
      </button>
      <button style={getButtonStyle('tech')} onClick={() => setShowType('tech')}>
        TECHNOLOGY
      </button>
    </div>
  );
};

export default BarBtn;
