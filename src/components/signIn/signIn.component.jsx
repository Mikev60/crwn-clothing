import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/customButton/customButton.component';
import './signIn.styles.scss';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

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
		const { emailSignInStart } = this.props;
		emailSignInStart(email, password);
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
		const { googleSignInStart } = this.props;
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
						<CustomButton type="submit"> Connexion </CustomButton>
						<CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
							Utiliser compte Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		googleSignInStart: () => dispatch(googleSignInStart()),
		emailSignInStart: (email,password) => dispatch(emailSignInStart({email, password}))
	}
}

export default connect(null, mapDispatchToProps)(signIn);
