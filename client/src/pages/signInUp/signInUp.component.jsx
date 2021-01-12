import React from 'react';

import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/signUp.component';
import './sign-in-and-sign-up.styles.scss';

const signInUpPage = () => (
	<div className="sign-in-and-sign-up">
		<SignIn />
		<SignUp />
	</div>
);

export default signInUpPage;
