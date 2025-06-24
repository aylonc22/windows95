import './Iframe.scss';

export const IframeApp = ({ src = "https://www.google.com", title = "Web Explorer" }) => {
  return (
    <div className="iframe-app">
      <iframe src={src} title={title} frameBorder="0" allowFullScreen />
    </div>
  );
};
