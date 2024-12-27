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
  function goNext(){
    if(nextValid) {
      return(
          <>
            <button className='page-link' onClick={
              () => {
                Props.paginate(Props.history[Props.currPageNum + 1], Props.currPageNum + 1)
              }
            }>Next</button>
          </>
      )
    }
  }

  function goPrevious() {
    if(prevValid) {
      return(
          <>
            <button className='page-link' onClick={
              () => {
                Props.paginate(Props.history[Props.currPageNum - 1], Props.currPageNum - 1)
              }
            }>Previous</button>
          </>
      )
    }
  }
  return(
      <div className='pagination justify-content-md-center'>
        {goPrevious()}
        {goNext()}
      </div>
  )
}

export default Pagination