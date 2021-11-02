import React from 'react';
import { Viewer,Designer } from '@grapecity/activereports-react';
import '@grapecity/activereports/styles/ar-js-ui.css';
import '@grapecity/activereports/styles/ar-js-viewer.css';

function Report() {


  return (
    <div className="demo-app" style={{ height: '800px'}} >
    <Viewer report={{ Uri: 'Untitled.rdlx-json' }} /> 
      <h1>ADS</h1>
    </div>
  );
}

export default Report;