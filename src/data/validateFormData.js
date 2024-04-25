export const validateFormData = (data) => {
  const errors = {};
  if (!data.name.trim()) {
    errors.name = 'Nama harus diisi';
  }
  if (!data.email.trim()) {
    errors.email = 'Email harus diisi';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Email tidak valid';
  }
  if (!data.subject.trim()) {
    errors.subject = 'Subjek harus diisi';
  }
  if (!data.message.trim()) {
    errors.message = 'Pesan harus diisi';
  }
  return errors;
};

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
