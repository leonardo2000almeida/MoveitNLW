import '../styles/global.css';
import { ChallengesContext,ChallengesProvider } from '../contexts/challengesContext';
import { useState } from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';

function MyApp({ Component, pageProps }) {
  const [level, setLevel] = useState(1);

  const levelUp = () => {
    setLevel(level + 1);
  }

  return (
      <Component {...pageProps} />
  )
}

export default MyApp
