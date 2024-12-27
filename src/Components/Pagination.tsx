import React from 'react';

function Pagination(Props: {history: Array<string>, currPage: number}) {
  return(
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
  )
}

export default Pagination