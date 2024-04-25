import { useState } from 'react';
import { validateFormData } from '@/data/validateFormData.js';
import ModalComponent from '@/component/ModalComponent';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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

    if (Object.keys(validationErrors).length === 0) {
      setShowModal(true);
      setErrors({});
    } else {
      setShowModal(true);
      setErrors(validationErrors);
    }
  };
  const ErrorSpan = (nameOfError) => <span style={{ color: '#ff0000' }}>{nameOfError}</span>;

  return (
    <>
      <div className="contact-wrap">
        <h2>Kontak Kami</h2>
        <form onSubmit={handleSubmit} className="animate__animated animate__fadeInUp">
          <div>
            <label htmlFor="name">Nama :</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name..." />
            {errors.name && ErrorSpan(errors.name)}
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email..." />
            {errors.email && ErrorSpan(errors.email)}
          </div>
          <div>
            <label htmlFor="subject">Subjek Email :</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subjek Email..." />
            {errors.subject && ErrorSpan(errors.subject)}
          </div>
          <div>
            <label htmlFor="message">Pesan :</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Message..."></textarea>
            {errors.message && ErrorSpan(errors.message)}
          </div>
          <button className="btn" type="submit">
            kirim
          </button>
        </form>
        <ModalComponent formData={formData} setFormData={setFormData} showModal={showModal} setShowModal={setShowModal} errors={errors} />
      </div>
    </>
  );
};

export default Contact;
