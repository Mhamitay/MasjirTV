import React from 'react';

interface ImageSlideProps {
  url: string;
  title?: string;
  description?: string;
  showTitle?: boolean;
  showDescription?: boolean;
}

const ImageSlide: React.FC<ImageSlideProps> = ({ url, title, description, showTitle = true, showDescription = true }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center bg-black overflow-hidden">
      <img
        src={url}
        alt={title || 'Slide Image'}
        className="absolute inset-0 w-full h-full object-fill"
        style={{ maxHeight: '100%', maxWidth: '100%' }}
      />
      {(showTitle && title) && (
        <div className="absolute top-8 left-8 bg-black/60 text-white text-3xl font-bold px-6 py-3 rounded-xl drop-shadow-lg">
          {title}
        </div>
      )}
      {(showDescription && description) && (
        <div className="absolute bottom-8 left-8 bg-black/50 text-white text-lg px-6 py-3 rounded-xl drop-shadow-md">
          {description}
        </div>
      )}
    </div>
  );
};

export default ImageSlide;
