import { Trash } from 'phosphor-react';
import styles from './TodoList.module.css'
import { IList } from '../App';

interface Props {
  todoList: IList;
  onDelete: (listId: string) => void;
}

export function TodoList({ todoList, onDelete }: Props) {
  return (
    <div className={styles.todoList}>
      <button className={styles.checkList}>
        <div />
      </button>
      <p>
        {todoList.title}
      </p>
      <button className={styles.buttonDelete} onClick={() => onDelete(todoList.id)}>
      <Trash size={23} />
      </button>
    </div>
  );
}
