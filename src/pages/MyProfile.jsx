import { useState } from 'react';
import Back from '@/component/utilities/Back.jsx';
import DataDescription from '@/component/Profile/DataDescription.jsx';
import Technology from '@/component/Profile/Technology.jsx';
import Contact from '@/component/Profile/Contact.jsx';
import BarBtn from '@/component/Profile/BarBtn';

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
      <BarBtn setShowType={setShowType} getButtonStyle={getButtonStyle} />
      <section className="profile">{renderContent()}</section>
    </div>
  );
}
