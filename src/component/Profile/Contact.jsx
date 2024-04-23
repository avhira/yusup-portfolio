import { useState } from 'react';
import { validateFormData } from '@/data/validateFormData.js';
import ModalComponent from '../ModalComponent';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    console.log('ini submit');

    if (Object.keys(validationErrors).length === 0) {
      setShowModal(true);
      setErrors({});
    } else {
      setShowModal(true);
      setErrors(validationErrors);
    }
  };
  return (
    <div className="contact-wrap ">
      <h2>Kontak Kami</h2>
      <form onSubmit={handleSubmit} className="animate__animated animate__fadeInUp">
        <div>
          <label htmlFor="name">Nama :</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name..." />
          {errors.name && <span style={{ color: '#ff0000' }}>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email..." />
          {errors.email && <span style={{ color: '#ff0000' }}>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="message">Pesan :</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Message..."></textarea>
          {errors.message && <span style={{ color: '#ff0000' }}>{errors.message}</span>}
        </div>
        <button type="submit">kirim</button>
      </form>
      <ModalComponent formData={formData} setFormData={setFormData} showModal={showModal} setShowModal={setShowModal} errors={errors} />
    </div>
  );
};

export default Contact;
