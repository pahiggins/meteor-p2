import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      App
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});