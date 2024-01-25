import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import EffectExample1 from './components/EffectExample1';
import EffectExample2 from './components/EffectExample2';
import EffectExample3 from './components/EffectExample3';
import RefExample1 from './components/RefExample1';
import RefExample2 from './components/RefExample2';
import RefExample3 from './components/RefExample3';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CallbackExample from './components/CallbackExample';
import MemoExample from './components/MemoExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ref">
          <Route path="1" element={<RefExample1 />} />
          <Route path="2" element={<RefExample2 />} />
          <Route path="3" element={<RefExample3 />} />
        </Route>
        <Route path="/effect">
          <Route path="1" element={<EffectExample1 />} />
          <Route path="2" element={<EffectExample2 />} />
          <Route path="3" element={<EffectExample3 />} />
        </Route>
        <Route path="/callback" element={<CallbackExample />} />
        <Route path="/memo" element={<MemoExample />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
