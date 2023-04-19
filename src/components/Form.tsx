import styles from "./Form.module.css";
import { PlusCircle } from 'phosphor-react'

export function Form() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />

      <footer>
        <button type="submit">
          Criar
          <PlusCircle size={23} />
        </button>
      </footer>
    </form>
  );
}
