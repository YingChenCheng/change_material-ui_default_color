import React, { useState } from 'react';
import { Card } from 'reactstrap';

import PageOne from './Pages/pageOne.js';
import PageTwo from './Pages/pageTwo.js';

export default function Pages(props){
  const [page, setPage] = useState(0);
	const { isLoading } = props;
	
  const nextPage = () => {
		setPage(page + 1);
  };
  const previousPage = () => {
		setPage(page - 1);
  };
  
  return (
    <Card>
			{page === 0 && (<PageOne nextPage={nextPage}/>)}
			{page === 1 && (<PageTwo isLoading={isLoading} previousPage={previousPage}/>)}
    </Card>
  );
}
