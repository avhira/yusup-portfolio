import { useState } from 'react';
import Back from '../component/Back';
import DataDescription from '../component/Profile/DataDescription';
import Technology from '../component/Profile/Technology';
import Contact from '../component/Profile/Contact';

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
