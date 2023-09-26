// import ReactDOM from 'react-dom'
import { App } from './App'
// import { createRoot } from 'react-dom';

// const root = createRoot(document.getElementById('root')); // Замените 'root' на ID вашего корневого элемента
// root.render(<App />);

//  ReactDOM.render(<App />, document.getElementById('root'))

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);