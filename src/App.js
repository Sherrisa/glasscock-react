import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/Home';
import InvestmentPage from './pages/Investment.js';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact.js';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/investment" component={InvestmentPage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
