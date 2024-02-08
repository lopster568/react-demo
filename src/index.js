import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import MemoExample from './components/MemoExample';
import ContextExample1 from './components/useContext/contextExample1';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ContextExample2 from './components/useContext/contextExample2';
import ReducerExample from './components/ReducerExample';
import FetchExample from './components/FetchExample';
import EffectExample1 from './components/useEffect/EffectExample1';
import EffectExample2 from './components/useEffect/EffectExample2';
import EffectExample3 from './components/useEffect/EffectExample3';
import RefExample1 from './components/useRef/RefExample1';
import RefExample2 from './components/useRef/RefExample2';
import RefExample3 from './components/useRef/RefExample3';
import Context from './components/useContext/context';
import Effect from './components/useEffect/effect';
import Ref from './components/useRef/ref';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import CartRedux from './components/cartReduxExample';
import CheckoutPage from './components/CheckoutPage';
import { PersistGate } from 'redux-persist/integration/react';
import AxiosExample from './components/axios/axiosExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate persistor={persistor} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />

            <Route path="/ref">
              <Route path="" element={<Ref />} />
              <Route path="1" element={<RefExample1 />} />
              <Route path="2" element={<RefExample2 />} />
              <Route path="3" element={<RefExample3 />} />
            </Route>

            <Route path="/effect"  >
              <Route path='' element={<Effect />} />
              <Route path="1" element={<EffectExample1 />} />
              <Route path="2" element={<EffectExample2 />} />
              <Route path="3" element={<EffectExample3 />} />
            </Route>

            <Route path="/context" >
              <Route path='' element={<Context />} />
              <Route path="1" element={<ContextExample1 />} />
              <Route path="2" element={<ContextExample2 />} />
            </Route>

            <Route path="/memo" element={<MemoExample />} />
            <Route path="/reducer" element={<ReducerExample />} />
            <Route path="/fetch" element={<FetchExample />} />
            <Route path="/cart" element={<CartRedux />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
