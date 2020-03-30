import React from 'react';

function SinglePage() {
  const commonStyle = {
    height: '100vh',
    width: '100vw',
    paddingTop: '5.5vh',
    paddingBottom: '5.5vh'
  };
  return(
    <>
      <div id='me_page' className="card-header" style={{...commonStyle, backgroundColor: '#fefbd8'}}>Me</div>
      <div id='projects_page' className="card-header" style={{...commonStyle, backgroundColor: '#80ced6'}}>Projects</div>
      <div id='awards_page' className="card-header" style={{...commonStyle, backgroundColor: '#d5f4e6'}}>Awards</div>
      <div id='social_page' className="card-header" style={{...commonStyle, backgroundColor: '#f18973'}}>Social</div>
    </>
  )
}

export default SinglePage;
