// name=src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Temporary mount test: renders a simple message to verify Vite/React mount works.
// If this displays on your deployed site, the runtime + build are fine and the problem is inside App or its imports.
const root = createRoot(document.getElementById('root')!);
root.render(
  <div style={{padding:40, fontFamily: 'system-ui, sans-serif'}}>
    <h1 style={{margin:0}}>DEV MOUNT OK</h1>
    <p style={{marginTop:8}}>If you see this, React mounted correctly. The issue is inside App or its imports.</p>
  </div>
);
