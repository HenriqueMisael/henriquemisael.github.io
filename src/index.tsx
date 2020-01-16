import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { CV } from './model/CV';
import cvJson from './data/cv.json';
import Header from './components/Header';

const App: React.FC = () => {

  const cv = CV(cvJson);

  return (
    <div className="App">
      <Header personalInfo={cv.personal}/>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
