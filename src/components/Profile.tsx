import { useContext } from 'react';
import { ChallengesContext } from '../contexts/challengesContext';
import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/leonardo2000almeida.png" alt="Leonardo Almeida" />
      <div>
        <strong>Leonardo Almeida</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          {level}
        </p>
      </div>
    </div>
  )
}