import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/customButton/customButton.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './signIn.styles.scss';

class signIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			console.log(error);
		}
		this.setState({
			email: '',
			password: ''
		});
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>J'ai déjà un compte</h2>
				<span>Connectez-vous avec votre email et votre password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						required
						handleChange={this.handleChange}
						label="Email"
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						required
						handleChange={this.handleChange}
						label="Password"
					/>
					<div className="buttons">
						<CustomButton type="submit">Connexion</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Connexion avec Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default signIn;
