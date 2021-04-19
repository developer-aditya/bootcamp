import React from 'react';
import image from '../public/image/background.jpg';

const Home = () => {
	return (
		<div style={showcase} className='valign-wrapper'>
			<div
				className='showcase-inner center-align white-text'
				style={showcaseInner}
			>
				<h2>Find a Coding Bootcamp</h2>
				<p className='flow-text' style={{ marginBottom: '1rem' }}>
					Find, rate and read reviews on coding bootcamps
				</p>
				<form>
					<div className='row'>
						<div className='col s6'>
							<div className='input-group'>
								<input
									type='text'
									name='distance'
									placeholder='Distance From'
									className='white-text'
								/>
							</div>
						</div>
						<div className='col s6'>
							<div className='input-group'>
								<input
									type='text'
									name='pincode'
									placeholder='Enter Pincode'
									className='white-text'
								/>
							</div>
						</div>
					</div>
					<button
						type='submit'
						className='btn waves-effect cyan submit-btn'
					>
						<i class='fas fa-search'></i> Find Bootcamps
					</button>
				</form>
			</div>
		</div>
	);
};
const showcase = {
	position: 'relative',
	width: '100%',
	minHeight: '91.5vh',
	background: `url('${image}') no-repeat center top/cover`,
};

const showcaseInner = {
	zIndex: '2',
	padding: '2rem',
	margin: 'auto',
	borderRadius: '5px',
	background: 'rgba(0, 0, 0, 0.4)',
};

export default Home;
