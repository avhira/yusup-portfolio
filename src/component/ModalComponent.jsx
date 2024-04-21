import { useState, useEffect, useRef } from 'react';
import { modal } from 'tingle.js';
import 'tingle.js/dist/tingle.min.css';

const ModalComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalResult, setModalResult] = useState(null);
  const modalRef = useRef(null);

  const isModalInDOM = () => {
    return document.querySelector('.tingle-modal') !== null;
  };

  const handleOpenModal = () => {
    if (isModalInDOM()) {
      const existingModal = document.querySelector('.tingle-modal');
      existingModal.parentElement.removeChild(existingModal);
    }

    const myModal = new modal({
      footer: true,
    });

    myModal.setContent('<h1>Are you sure want to send it ?</h1>');

    myModal.addFooterBtn('Yes', 'tingle-btn tingle-btn--pull-right tingle-btn--primary', function () {
      setModalResult(true);
      handleCloseModal();
    });

    myModal.addFooterBtn('No', 'tingle-btn tingle-btn--pull-right tingle-btn--danger', function () {
      setModalResult(false);
      handleCloseModal();
    });

    myModal.open();
    setIsVisible(true);
    modalRef.current = myModal;
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      handleOpenModal();

      return () => {
        if (modalRef.current) {
          modalRef.current.close();
          modalRef.current.destroy();
          modalRef.current = null;
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  useEffect(() => {
    if (modalResult !== null) {
      console.log(`Hasil Modal: ${modalResult}`);
    }
  }, [modalResult]);

  return (
    <div>
      <button type="submit" onClick={handleOpenModal}>
        Kirim
      </button>
    </div>
  );
};

export default ModalComponent;
