import { PlusCircle } from 'phosphor-react'
import todoLogo from '../assets/Logo.png'

import styles from './Header.module.css'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onAddList: (listTitle: string) => void;
}

export function Header({ onAddList }: Props) {
  const [title, setTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddList(title);
    setTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return(
    <header className={styles.header}>
      <img src={todoLogo} alt="" />

      <form className={styles.newForm} onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        onChange={onChangeTitle}
        value={title}
        />
        <button type="submit">
          Criar
          <PlusCircle size={23} />
        </button>
      </form>
    </header>
  )
}