import { useState } from 'react';
import Back from '../component/Back';
import ProfileBarLinks from '../component/Profile/profileBarLinks';
import DataDescription from '../component/Profile/DataDescription';
import Technology from '../component/Profile/Technology';
import Contact from '../component/Profile/Contact';

export default function MyProfile() {
  const [showType, setShowType] = useState('profile');

  return (
    <div className="background-profile">
      <Back />
      <ProfileBarLinks showType={showType} setShowType={setShowType} />
      <section className="profile">{showType === 'profile' ? <DataDescription /> : showType === 'contact' ? <Contact /> : <Technology />}</section>
    </div>
  );
}
