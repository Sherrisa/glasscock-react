import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Investment from './pages/Investment.js';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact.js';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/investment" component={Investment} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
