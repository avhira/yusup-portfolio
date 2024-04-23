import { useState, useEffect } from 'react';

const ModalComponent = ({ formData, setFormData, showModal, setShowModal, errors }) => {
  const [confirm, setConfirm] = useState(false);

  const handleConfirm = () => {
    setConfirm(!confirm); // jadi true
  };

  const onClose = () => {
    setShowModal(false);
  };
  const renderModal = (header, content, backgroundColor) => (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" style={{ background: backgroundColor }} onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{header}</h2>
        {content}
      </div>
    </div>
  );

  const renderFormData = () => (
    <>
      {Object.entries(formData).map(([key, value], i) => (
        <div className="wrap-input" key={i}>
          <h4>{`${key}: ${value}`}</h4>
        </div>
      ))}
      <div className="modal-btn">
        <button onClick={handleConfirm}>Yeah</button>
      </div>
    </>
  );

  const renderErrors = () => (
    <>
      {Object.values(errors).map((err, i) => (
        <ul key={i}>
          <li>{err}</li>
        </ul>
      ))}
    </>
  );

  const ErrorObj = errors && Object.keys(errors).length > 0;

  const modalContent = ErrorObj ? renderErrors() : renderFormData();
  const header = ErrorObj ? 'Benerin dong cuy' : 'Are you sure want to send this data ?';
  const backgroundColor = ErrorObj ? '#ff0000' : '#002fff';

  useEffect(() => {
    if (confirm) {
      onClose();
      setConfirm(!confirm);
      console.log(confirm);
      console.log('Data dikirim:', formData); // kirim data
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirm]);
  return <div>{showModal && renderModal(header, modalContent, backgroundColor)}</div>;
};

export default ModalComponent;
