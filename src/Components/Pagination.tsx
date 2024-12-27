import React from 'react';

function Pagination(Props: {history: Array<string>, currPageNum: number, paginate:(a: string, b: number) => void}) {
  let prevValid = true;
  let nextValid = true;

  if (Props.currPageNum === 0) {
    prevValid = false;
  }

  if (Props.history.at(Props.currPageNum + 1) === undefined) {
    nextValid = false;
  }

  return(
      <div className='pagination justify-content-md-center'>
        <button disabled={!prevValid} onClick={
          () => {Props.paginate(Props.history[Props.currPageNum - 1], Props.currPageNum - 1)}
        }>Previous</button>
        <button disabled={!nextValid} onClick={
          () => {Props.paginate(Props.history[Props.currPageNum + 1], Props.currPageNum + 1)}
        }>Next</button>
      </div>
  )
}

export default Pagination