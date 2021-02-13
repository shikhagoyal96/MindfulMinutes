import React from 'react';
import MediaQuery from 'react-responsive';
import Container from 'react-bootstrap/Container';

export default function Leap() {
    return (
      <>
        <div id="leap" style={{backgroundColor:"pink", height:"500px"}}>
          <div className="section1" style={{float:"left", width:"30%",margin:'6% 0% 6% 10%'}}>
            <h1
              style={{
                float:"left",
                color: 'black',
                marginTop: '0',
                paddingTop: '10%',
                marginLeft: '10%',
                fontFamily: 'DMSans-Bold',
                fontSize: '100px'
              }}
            >
              Leap
            </h1>
            <h2 
              style={{
                float:"left",
                color: 'black',
                marginTop: '0',
                marginLeft: '20%',
                fontFamily: 'DMSans-Bold',
                fontSize: '40px'
              }}
            >
              Another step forward
            </h2></div>
            <div id="section2"
              style={{
                backgroundColor:'black',
                width:'0.5%',
                height: '300px',
                float: 'left',
                marginTop: '85px'
              }}
            ></div>
            <div id="section3">
              <h3 
                style={{
                  float:"left",
                  color: 'black',
                  marginTop: '85px',
                  marginLeft: '2%',
                  fontFamily: 'DMSans-Bold',
                  fontSize: '20px'
                }}
              >
                The Latest<br/>
                EDITOR'S PICK
              </h3>
            </div> 
          </div> 
          
          <div style={{margin: '4% 6%'}}>
            <div>
              <h3 style={{fontSize: '28px'}}>ALL ARTICLES</h3> 
              <p style={{fontSize: '26px'}}>Take an innovative look into the world of mental health, personal development and well-being.</p>
            </div>

            <div id='part1' style={{width: '40%'}}>
                <h4>hgcdkgf</h4>
            </div>

            {/* <div id='part2'>
                <h4>ghgdcjhsdbj</h4>
            </div> */}

            <div>

            </div>
          </div>

          <div></div>

          
        </>
    );
}
