import { CheckCircle, Trash } from "phosphor-react";
import styles from "./TodoList.module.css";
import { IList } from "../App";

interface Props {
  todoList: IList;
  onDelete: (listId: string) => void;
  onComplete: (listId: string) => void;
}

export function TodoList({ todoList, onDelete, onComplete }: Props) {
  return (
    <div className={styles.todoList}>
      <button
        className={styles.checkList}
        onClick={() => onComplete(todoList.id)}
      >
        {todoList.isCompleted ? (
          <CheckCircle size={23} weight="fill" />
        ) : (
          <div />
        )}
      </button>
      <p className={todoList.isCompleted ? styles.textCompleted : ""}>
        {todoList.title}
      </p>
      <button
        className={styles.buttonDelete}
        onClick={() => onDelete(todoList.id)}
      >
        <Trash size={20} />
      </button>
    </div>
  );
}
