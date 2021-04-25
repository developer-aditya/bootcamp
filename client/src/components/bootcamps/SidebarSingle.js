import React from 'react';
import { Link } from 'react-router-dom';

function SidebarSingle() {
	return (
		<React.Fragment>
			<img
				width='100%'
				src='https://source.unsplash.com/user/erondu/1600x900'
				className='materialboxed'
				alt='bootcamp-img'
			/>
			<div className='card blue-grey darken-3 white-text center-align'>
				<div className='card-content'>
					<p className='flow-text'>
						Average Rating
						<span className='light-blue right white-text valign-wrapper rating'>
							8.8
						</span>
					</p>

					<div style={{ padding: '2rem 1rem' }}>
						<Link
							to='/singleBootcamp/readReview'
							className='btn waves-effect blue-grey lighten-1 white-text side-btn'
						>
							<i className='far fa-comments'></i> Read Reviews
						</Link>
						{/* Show only for normal users not even publisher */}
						<Link
							to='/singleBootcamp/writeReview'
							className='btn waves-effect blue-grey lighten-5 blue-grey-text modal-trigger side-btn'
						>
							<i className='fas fa-pen'></i> Write A Review
						</Link>
						<a
							href='#website'
							className='btn waves-effect light-blue white-text  side-btn'
						>
							<i className='fas fa-globe'></i> Visit Website
						</a>
					</div>
				</div>
			</div>
			<div className='card '>
				<div className='card-content'>
					<ul className='collection with-header'>
						<li className='collection-header center blue-grey-text'>
							<p className='flow-text'>Features</p>
						</li>
						<li className='collection-item'>
							Housing{' '}
							<span className='secondary-content'>
								<i className='fas fa-check'></i>
							</span>
						</li>
						<li className='collection-item'>
							Job Assistance{' '}
							<span className='secondary-content'>
								<i className='fas fa-check'></i>
							</span>
						</li>
						<li className='collection-item'>
							Job Guarantee{' '}
							<span className='secondary-content'>
								<i className='fas fa-times red-text'></i>
							</span>
						</li>
						<li className='collection-item'>
							Accepts GI Bill{' '}
							<span className='secondary-content'>
								<i className='fas fa-times red-text'></i>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
}

export default SidebarSingle;
