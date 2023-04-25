import { useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";

import "./global.css";

export interface IList {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [list, setList] = useState<IList[]>([
    {
      id: "teste",
      title: "teste",
      isCompleted: true,
    },
    {
      id: "teste2",
      title: "teste",
      isCompleted: false,
    },
  ]);

  function addList(listTitle: string) {
    setList([
      ...list,
      {
        id: crypto.randomUUID(),
        title: listTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteListById(listId: string) {
    const newList = list.filter((list) => list.id !== listId);
    setList(newList);
  }

  function toggleListCompletedById(listId: string) {
    const newList = list.map((list) => {
      if (list.id === listId) {
        return {
          ...list,
          isCompleted: !list.isCompleted,
        };
      }
      return list;
    });
    setList(newList);
  }

  return (
    <div>
      <Header onAddList={addList} />
      <List
        list={list}
        onDelete={deleteListById}
        onComplete={toggleListCompletedById}
      />
    </div>
  );
}

export default App;
