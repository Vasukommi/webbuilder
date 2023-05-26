import React from 'react';

const Image = () => {
  return (
    <div>
      <picture>
        <source media="(min-width: 650px)" srcSet="https://ecomposer.app/images/placeholder.png" />
        <source media="(min-width: 465px)" srcSet="https://ecomposer.app/images/placeholder.png" />
        <img src="https://ecomposer.app/images/placeholder.png" alt="Flowers" style={{ width: 'auto' }} />
      </picture>
    </div>
  );
};

export default Image;
