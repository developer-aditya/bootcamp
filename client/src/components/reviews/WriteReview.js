import React from 'react';

function WriteReview() {
	return (
		<div className='row'>
			<div className='col s12 l10'>
				<div className='card'>
					<div
						className='card-title blue-grey lighten-1 white-text'
						style={{ padding: '0.75rem 1.5rem' }}
					>
						Submit Your Review
					</div>
					<div className='card-content blue-grey-text'>
						<p>
							Attention! You must have attended and graduated this
							bootcamp to review
						</p>
						<form style={{ padding: '1rem 2rem' }}>
							<p>
								Rating: <span className='cyan-text'>8</span>
							</p>
							<div className='input-feild'>
								<input
									type='range'
									min='1'
									max='10'
									step='1'
									value='8'
									id='rating'
								/>
							</div>

							<div className='input-feild'>
								<label htmlFor='title'>Review title</label>
								<input type='text' name='title' id='title' />
							</div>

							<div className='input-feild'>
								<label htmlFor='review'>Your review</label>
								<textarea
									name='review'
									id='review'
									className='materialize-textarea'
								></textarea>
							</div>

							<div className='input-feild'>
								<button
									className='btn waves-effect cyan modal-close'
									type='submit'
									name='action'
									style={submit}
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

const submit = {
	width: '100%',
	textTransform: 'capitalize',
	fontSize: '1.5rem',
	height: '3.25rem',
	borderRadius: '5px',
	boxShadow: 'none',
	marginTop: '1rem',
};

export default WriteReview;
