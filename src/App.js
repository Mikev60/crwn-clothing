import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInUp from './pages/signInUp/signInUp.component.jsx';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super(); 

    this.state = {
      currentUser: null,
    }
  }

  unsuscribeFormAuth = null;

  componentDidMount() {
    this.unsuscribeFormAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user,
      })
    })
  }

  componentWillUnmount() {
    this.unsuscribeFormAuth();
  }

	render() {
		return (
			<div className="App">
				<Header currentUser={this.state.currentUser}/>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInUp} />
				</Switch>
			</div>
		);
	}
}

export default App;
