// index.tsx
// Ensure the import uses a file extension so the browser can fetch the module when using in-browser transforms.
import React from "react";
import ReactDOM from "react-dom/client";
// Was: import App from './App';
import App from './App.tsx';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
