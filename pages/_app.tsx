import React from 'react';
import type { AppProps } from 'next/app';
import {
  ThemeProvider,
  createTheme,
  Arwes,
  SoundsProvider,
  createSounds,
} from 'arwes';

const mySounds = {
  shared: { volume: 1 }, // Shared sound settings
  players: {
    // The player settings
    click: {
      // With the name the player is created
      sound: { src: ['/sound/click.mp3'] }, // The settings to pass to Howler
    },
    typing: {
      sound: { src: ['/sound/typing.mp3'] },
      settings: { oneAtATime: true }, // The custom app settings
    },
    deploy: {
      sound: { src: ['/sound/deploy.mp3'] },
      settings: { oneAtATime: true },
    },
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={createTheme()}>
      <SoundsProvider sounds={createSounds(mySounds)}>
        <Arwes animate show>
          <Component {...pageProps} />
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
  );
};

export default MyApp;
