import { useState } from 'react';

import styles from './Progress.module.css'

export function Progress() {
  const [likeCount, setLikeCount] = useState(0);

  return(
    <div className={styles.progress}>
      <div className={styles.box}>
        <header>
          <div className={styles.tasksCreated}>
            <strong>Tarefas criadas</strong>
            <span>{likeCount}</span>
          </div>
          <div className={styles.tasksCompleted}>
            <strong>Tarefas criadas</strong>
            <span>{likeCount}</span>
          </div>
        </header>
      </div>
    </div>
  )
}