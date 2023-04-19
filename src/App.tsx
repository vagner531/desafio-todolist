import { Header } from "./components/Header";
import { Form } from "./components/Form";

import "./global.css";

import styles from './App.module.css'
import { Progress } from "./components/Progress";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Form />
      <Progress />
    </div>
  );
}

export default App;
