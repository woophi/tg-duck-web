import { retrieveLaunchParams } from '@tma.js/sdk-react';
import axios from 'axios';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const { initDataRaw } = retrieveLaunchParams();

const getPayment = () => {
  axios.post('http://192.168.0.143:3000/api/tg/shop/stars', null, {
    headers: {
      Authorization: `Bearer ${initDataRaw}`,
    },
  });
};

function App() {
  console.debug(initDataRaw);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={getPayment}>call api</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
