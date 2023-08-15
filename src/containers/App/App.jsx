import React from 'react';
import styles from './App.module.css';

import { getApiResourse } from '../../utils/network.js';

getApiResourse();

function App() {
  return (
    <h1 className={styles.header}>Hello</h1>
  );
}

export default App;
