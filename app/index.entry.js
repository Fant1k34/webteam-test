import 'reset-css';
import './exterrnal-libs/layout/index.css'
import fallbackStylesheetUrl from '!!file-loader!./exterrnal-libs/layout/layout-without-css-vars.css';
import { supportsCssVars, createLink } from './exterrnal-libs/layout/utils';
import './index.entry.pcss';
import './exterrnal-libs/breakpoints/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { LandingPage } from "./src/components";

if (!supportsCssVars()) {
  createLink(fallbackStylesheetUrl);
}

document.addEventListener('DOMContentLoaded', () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<LandingPage />);
});
