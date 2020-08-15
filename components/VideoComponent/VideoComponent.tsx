import React from 'react';

type VideoProps = {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  type?: string;
  muted?: boolean;
};
const VideoComponent: React.FC<VideoProps> = ({
  src,
  type = 'video/mp4',
  autoPlay = false,
  loop = true,
  muted = true,
}) => {
  return (
    <video height="3000" autoPlay={autoPlay} loop={loop} muted={muted}>
      <source src={src} type={type} />
    </video>
  );
};

export default VideoComponent;
