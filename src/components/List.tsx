import { IList } from "../App";
import styles from "./List.module.css";
import svgClipBoard from "../assets/Clipboard.svg";
import { TodoList } from "./TodoList";

interface Props {
  list: IList[];
  onDelete: (listId: string) => void;
  onComplete: (listId: string) => void;
}

export function List({ list, onDelete, onComplete }: Props) {
  const listQuantity = list.length;
  const completedList = list.filter((todoList) => todoList.isCompleted).length;

  return (
    <section className={styles.list}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{listQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluidas</p>
          <span>
            {completedList} de {listQuantity}
          </span>
        </div>
      </header>
      <div className={styles.listTodo}>
        {list.map((todoList) => (
          <TodoList
            key={todoList.id}
            todoList={todoList}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
        {list.length <= 0 && (
          <section className={styles.empty}>
            <img src={svgClipBoard} alt="" />
            <div>
              <p>
                Você ainda não tem tarefas cadastradas
              </p>
              <span>Crie tarefas e organize
                seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
