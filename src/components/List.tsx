import { IList } from '../App';
import styles from './List.module.css'
import { TodoList } from './TodoList';


interface Props {
  list: IList[];
}

export function List({ list }: Props) {
  const listQuantity = list.length;
  const completedList = list.filter((todoList) => todoList.isCompleted).length;

  return(
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
          <TodoList key={todoList.id} todoList={todoList} />
        ))}
      </div>
    </section>
  );
}