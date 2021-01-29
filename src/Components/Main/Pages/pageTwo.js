import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import theme from '../../../theme'

export default function PageTwo(props) {
  const { isLoading, previousPage } = props;

  return (
    <div style={{height:'80vh', width:'90vw'}}>
      <div style={{paddingBottom:5}}>
        <p style={{color:theme.palette.secondary.main}}>Page2</p>
        <IconButton
          aria-label="back"
          type="submit"
          onClick={previousPage}
          disabled={isLoading}>
          <NavigateBeforeIcon style={{color:theme.palette.primary.main}}/>
        </IconButton>
        <IconButton disabled>
          <NavigateNextIcon/>
        </IconButton>
			</div>
    </div>
  );
}