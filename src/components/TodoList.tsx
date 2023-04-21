import { Trash } from 'phosphor-react';
import styles from './TodoList.module.css'
import { IList } from '../App';

interface Props {
  todoList: IList;
}

export function TodoList({todoList}: Props) {
  return (
    <div className={styles.todoList}>
      <button className={styles.checkList}>
        <div />
      </button>
      <p>
        {todoList.title}
      </p>
      <button className={styles.buttonDelete}>
      <Trash size={23} />
      </button>
    </div>
  );
}
