import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { updatePassword } from '../../actions/authAction';
import { connect } from 'react-redux';

const ChangePassword = ({ updatePassword }) => {
	const [current, setCurrent] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirm, setConfirm] = useState('');

	const submit = () => {
		if (current === '' || newPassword === '' || confirm === '') {
			console.log('Please Enter Details');
		} else if (/^\S{5,}\S$/.test(newPassword) === false) {
			console.log(
				'Password must be atleast 6 character Long without spaces',
			);
		} else if (confirm !== newPassword) {
			console.log('Password and Confirm Password do not match');
			setConfirm('');
		} else {
			updatePassword({ oldPassword: current, newPassword: newPassword });
			setCurrent('');
			setNewPassword('');
			setConfirm('');
		}
	};

	const comparePassword = (e) => {
		setConfirm(e.target.value);
		if (e.target.value !== newPassword) {
			e.target.style.color = 'red';
		} else {
			e.target.style.color = 'green';
		}
	};

	return (
		<div className='grey lighten-4 page-layout'>
			<div className='container'>
				<div className='row'>
					<div className='col s12 m2'></div>
					<div className='col s12 m8'>
						<Link
							to='/manageAccount'
							className='btn blue-grey darken-3 mt-0'
						>
							<i className='fas fa-arrow-circle-left'></i> Manage Account
						</Link>
						<div className='card'>
							<div
								className='card-title blue-grey darken-3 white-text'
								style={{ padding: '0.75rem 1.5rem' }}
							>
								Update Password
							</div>
							<div
								className='card-content'
								style={{ padding: '2rem 3rem 1rem 3rem' }}
							>
								<div
									className='input-field'
									style={{ marginBottom: '1.5rem' }}
								>
									<input
										id='current_password'
										type='text'
										value={current}
										onChange={(e) => {
											setCurrent(e.target.value);
										}}
									/>
									<label htmlFor='current_password'>
										Current Password
									</label>
								</div>

								<div
									className='input-field'
									style={{ marginBottom: '1.5rem' }}
								>
									<input
										id='new_password'
										type='password'
										value={newPassword}
										onChange={(e) => {
											setNewPassword(e.target.value);
										}}
									/>
									<label htmlFor='new_password'>New Password</label>
								</div>
								<div
									className='input-field'
									style={{ marginBottom: '1.5rem' }}
								>
									<input
										id='confirm_password'
										type='password'
										value={confirm}
										onChange={comparePassword}
									/>
									<label htmlFor='confirm_password'>
										Confirm Password
									</label>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col s3'></div>
							<div className='col s6'>
								<a
									href='#submit'
									className='btn light-blue waves-effect w-100'
									onClick={submit}
								>
									Update Password
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default connect(null, { updatePassword })(ChangePassword);
