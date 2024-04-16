import { useState } from 'react';
import Back from '../component/Back.jsx';
import DataDescription from '../component/Profile/DataDescription.jsx';
import Technology from '../component/Profile/Technology.jsx';
import Contact from '../component/Profile/Contact.jsx';

export default function MyProfile() {
  const [showType, setShowType] = useState('profile');

  const renderContent = () => {
    switch (showType) {
      case 'profile':
        return <DataDescription />;
      case 'contact':
        return <Contact />;
      case 'tech':
        return <Technology />;
      default:
        return null;
    }
  };
  const getButtonStyle = (type) => {
    return showType === type ? { backgroundColor: '#0700dd' } : null;
  };

  return (
    <div className="background-profile">
      <Back />
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
      <section className="profile">{renderContent()}</section>
    </div>
  );
}
