import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInUp from './pages/signInUp/signInUp.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	unsuscribeFormAuth = null;

	componentDidMount() {

		const { setCurrentUser } = this.props;

		this.unsuscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapshot) => {
					setCurrentUser({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
					});
				});
      }
      setCurrentUser(userAuth);
      console.log(this.state);
		});
	}

	componentWillUnmount() {
		this.unsuscribeFormAuth();
	}

	render() {
		return (
			<div className="App">
				<Header/>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInUp />} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setCurrentUser: user => dispatch(setCurrentUser(user))
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.user.currentUser,
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
