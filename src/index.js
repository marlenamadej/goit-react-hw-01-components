import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import user from './components/zad1Profile/user.json';
// import data from './components/zad2Statistic/data.json';
// import friends from './components/zad3Friends/friends.json';
// import transactions from './components/zad4Transaction/transactions.json';

import { App } from 'components/App';
import { Profile } from './components/zad1Profile/Profile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </App>
  </React.StrictMode>
);
