import { useState } from 'react';
import Back from '../component/Back.jsx';
import DataDescription from '../component/Profile/DataDescription.jsx';
import Technology from '../component/Profile/Technology.jsx';
import Contact from '../component/Profile/Contact.jsx';

export default function MyProfile() {
  const [showType, setShowType] = useState('profile');

  return (
    <div className="background-profile">
      <Back />
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
      <section className="profile">{showType === 'profile' ? <DataDescription /> : showType === 'contact' ? <Contact /> : <Technology />}</section>
    </div>
  );
}
