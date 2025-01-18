import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const DressCodeGallery = ({ dressCodeImages }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
    {dressCodeImages.map((image, index) => (
      <div key={index} className="dress-code-image-container">
        <Zoom overlayBgColorEnd="rgba(0, 0, 0, 0.85)" transitionDuration={400}>
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
          />
        </Zoom>
      </div>
    ))}
  </div>
);

export default DressCodeGallery;