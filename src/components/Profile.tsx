import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/leonardo2000almeida.png" alt="Leonardo Almeida" />
      <div>
        <strong>Leonardo Almeida</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          level 1
        </p>
      </div>
    </div>
  )
}