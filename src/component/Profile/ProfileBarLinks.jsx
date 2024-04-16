// eslint-disable-next-line react/prop-types
export default function ProfileBarLinks({ showType, setShowType }) {
  return (
    <div className="profile-bar">
      <button style={{ backgroundColor: showType === 'profile' ? '#0700dd' : null }} onClick={() => setShowType('profile')}>
        PROFILE
      </button>
      <button style={{ backgroundColor: showType === 'contact' ? '#0700dd' : null }} onClick={() => setShowType('contact')}>
        CONTACT
      </button>
      <button style={{ backgroundColor: showType === 'tech' ? '#0700dd' : null }} onClick={() => setShowType('tech')}>
        TECHNOLOGY
      </button>
    </div>
  );
}
