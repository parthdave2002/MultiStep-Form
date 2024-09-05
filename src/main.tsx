import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { Provider } from "react-redux";
import { configureStore } from "./Store";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={configureStore({})}>
          <App />
    </Provider>
  </StrictMode>,
)
