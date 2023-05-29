import React from 'react';

type HeadingProps = {
  content: string;
  styles?: React.CSSProperties;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading: React.FC<HeadingProps> = ({ content, styles, tag }) => {

  const RenderHeadingElement = (): JSX.Element => {
    switch (tag) {
      case 'h1':
        return <h1 style={styles} >{content}</h1>;
      case 'h2':
        return <h2 style={styles} >{content}</h2>;
      case 'h3':
        return <h3 style={styles} >{content}</h3>;
      case 'h4':
        return <h4 style={styles} >{content}</h4>;
      case 'h5':
        return <h5 style={styles} >{content}</h5>;
      case 'h6':
        return <h6 style={styles} >{content}</h6>;
      default:
        return <h1 style={styles} >{content}</h1>;
    }
  };

  return <RenderHeadingElement />;
};

export default Heading;
