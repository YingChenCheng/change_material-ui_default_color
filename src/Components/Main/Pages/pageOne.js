import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import theme from '../../../theme'

export default function PageOne(props) {
	const { isLoading, nextPage } = props;

	return (
    <div style={{height:'80vh', width:'90vw'}}>
      <div style={{paddingBottom:5}}>
        <p style={{color:theme.palette.secondary.main}}>Page1</p>
				<IconButton disabled>
					<NavigateBeforeIcon/>
				</IconButton>
        <IconButton
					aria-label="next"
					type="submit"
					onClick={nextPage}
					disabled={isLoading}>
					<NavigateNextIcon style={{color:theme.palette.primary.main}}/>
				</IconButton>
		</div>
		</div>
	);
}