import myFile from '@/data/cv.pdf';

export default function DownladCv({ text, img }) {
  const downloadFile = () => {
    const url = myFile;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'cv.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={downloadFile}>
      <span>{text}</span>
      <img src={img} />
    </button>
  );
}
