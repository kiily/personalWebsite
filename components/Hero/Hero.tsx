import React from 'react';
import classes from './Hero.module.scss';
import VideoComponent from '../VideoComponent/VideoComponent';

const videoUrl = 'assets/hero.mp4';

const Hero = () => {
  return (
    <article className={classes.heroContainer}>
      <section className={classes.videoContainer}>
        <VideoComponent src={videoUrl} autoPlay={true} />
      </section>
    </article>
  );
};

export default Hero;
