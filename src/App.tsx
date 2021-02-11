import React from 'react';
import './App.css';
import { LinkStatus, TextField, VNavigation } from 'otc-ui-component-library';

function App() {
  return (
    <div>
      TextField
      <TextField />
      <hr />
      <hr />
      VNavigation:
      <VNavigation
        links={[
          {
            label: 'Getting started',
            url: 'https://auspost.com.au',
          },
          {
            label: 'Transfer details',
            url: 'https://auspost.com.au',
          },
          {
            label: 'Sender details',
            url: 'https://auspost.com.au',
          },
          {
            label: 'Receiver details',
            status: LinkStatus.Active,
            url: 'https://auspost.com.au',
          },
          {
            label: 'Self-declared questions',
            url: 'https://auspost.com.au',
          },
          {
            label: 'Review & confirm',
            url: 'https://auspost.com.au',
          },
        ]}
      />
    </div>
  );
}

export default App;
