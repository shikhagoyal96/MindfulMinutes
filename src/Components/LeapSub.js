import React, {Component} from 'react';
//import MediaQuery from 'react-responsive';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import article1 from '../images/article-1.jpg';
import Grid from '@material-ui/core/Grid';
import Footer from '../Components/Footer';

class Leap extends Component {
  render(){
    return (
      <>
        <div id="leap" style={{backgroundColor:"pink", height:"500px"}}>
          <Container>
            <Row>
              <Col xs={4}>
                <h1 style={{
                  color: 'black',
                  marginTop: '0',
                  paddingTop: '120px',
                  // marginLeft: '-100px',
                  fontFamily: 'DMSans-Bold',
                  fontSize: '80px'
                  }}
                >Leap
                </h1>
                <h2 
                  style={{
                    color: 'black',
                    marginTop: '0',
                    marginLeft: '-70px',
                    fontFamily: 'DMSans-Bold',
                    fontSize: '40px'
                  }}
                >Another step forward
                </h2>
                </Col>
                <Col xs={1}>
                  <div id="section2"
                    style={{
                      backgroundColor:'black',
                      width:'5px',
                      height: '350px',
                      float: 'left',
                      marginTop: '85px'
                  }}
                ></div>
              </Col>
              <Col xs={6}>
                <div>
                  <h3 
                    style={{
                      color: 'black',
                      marginTop: '85px',
                      marginLeft: '-40px',
                      fontFamily: 'DMSans-Bold',
                      fontSize: '20px'
                    }}
                  >
                    The Latest<br/>
                    EDITOR'S PICK
                  </h3>
                </div> 
              </Col>              
            </Row>
          </Container>
        </div>  

        <div style={{margin: '4% 6% 0% 6%'}}>
          <h3 style={{fontSize: '28px'}}>ALL ARTICLES</h3> 
          <p style={{fontSize: '26px'}}>Take an innovative look into the world of mental health, personal development and well-being.</p>
        </div> 

        <div>
        <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={1}>
          <Grid item xs={5}>
          <ul className="list-unstyled" style={{marginTop: "-100px"}}>
                <Media as="li">
                  <img
                    width={70}
                    height={70}
                    className="mr-3"
                    src={article1}
                    alt="Generic placeholder"
                  />
                  <Media.Body>
                    <h3>S1E1: The Beginning</h3>
                    <p style={{fontSize: '1rem'}}>
                    My legs ache with every stride I take, sweat trickles off my forehead and forms a pool on my back, but there's no way I can stop running. They're after me, had been for a while yet I don’t know why or who they are. All I know is at this moment, I am running away from a group of people -men and women- speeding towards me in a black jeep carrying rifles. I have been sprinting for the past two minutes, trying to find a place to stop and catch my breath to figure out what to do next. My head begins to pound and my lack of breath can be felt throughout the rest of my body, as I lose the energy to keep going. I need to take a break. If I collapse right now they’ll still get me. I enter a dark and solemn part of town that I have never been in before, all in haste to get away. I quickly slip into a long and dark alley in hopes that they drive right by it. I’m surprised that I can continue to go so fast even after so long, but as soon as I take one look back and see them go right past the alley, I bump into something hard and the impact sends me falling backwards onto the solid concrete.
                    I groan softly and hold my forehead in pain. “What are you running like that for?” A deep and rough voice calls out, so rough as though it hasn’t been used in days.
                    I snap upright and stare at the source of the voice - an old man wearing baggy, ripped up clothes that were hidden by a thin black robe that smelled horrendous. He scratched his long grey beard and bent down. He couldn't be younger than 60.
                    “Well, kid? What’s wrong with ya? Can't you see where you're going.”
                    “T-these people broke into my house, asking me a whole bunch of questions and demanding I come with them so I bolted out the back door, and they been after me in their car since. I swear I’m telling the truth, I-i don’t know what to do.”
                    The man looks at me, really looks at me in a way that sends a chill down my spine. Suddenly his eyes become wide,  his mouth gapes to form an O, and a finger is pointed at me.
                    “You're one of them."
                    I stare at him in utter confusion, rubbing my now sore back as I leaned against the brick wall for support.
                    “What are you talking about? One of who?" He blows out a breath of disbelief.
                    "You're one of the Immune. I can’t believe it.” He said as he continues to look me up and down in astonishment.
                    "Immune? Immune to what?"
                    I don’t make the mistake not to peek out the alley momentarily to see if they were coming back for me. This guy clearly isn't one to be having a conversation with. I need to get somewhere safe. But where? I run my hand through my hair, struggling to think of a plan.
                    "Look kid, about 125 years ago, incurable plagues took over. They affected so many people around the world, almost everyone -different mental illnesses, physical issues you name it. A couple years later we found out there was a group of 5 very special individuals out there that weren't affected by any of it. They were resistant to it all, and they're what people called the Immunes. They're the reason a cure was found, the saviours. Our saviours. Reluctantly, they agreed to let the government test them. It turned out they were privy to various types of genetic mutations within them, their blood allowing these antibodies to thrive leaving them immune to the plague. It was amazing. And you… you’re one of them. 125 years later… it’s still possible after all.”
                    He smiles -one full of missing teeth - and starts pacing back in forth in excitement. Ok so he’s crazy. Get out here right now.
                    Without a second thought, I sprint out of the alley, not daring to look back.   I stop a couple blocks down and pull out my phone. Who do I go to? Who do I trust enough? I scroll to find the name I was looking for and text a friend, asking him to stay the night. I can’t risk going back home. Not tonight at least. The phone buzzes in my hand and I look down to see a reply of agreement. Analyzing the distance to his place, I break into a sprint again. Hyperaware of every step I take, the stress begins to eat away at me and I fail to understand my own thoughts as I run faster than I ever have before. I slow down to a jog when I see a familiar apartment building a couple yards away, and allow a soft smile of relief to wrench its way onto my face. I relax for a moment and reach for the silver handle but my hand never gets a chance to make contact with the smooth metal. A bag is thrown over my head, and as I start to thrash, I feel my arms and legs being restrained with strong muscle. I feel myself being carried off, and not too long after, I am thrown onto a leather seat. Before I could properly register the feel of the cool leather and the smell of gunpowder, I feel a hard hit to my head knocking me out.
                    …
                    I slowly feel myself drift to consciousness and the feeling of a pounding against my skull is like a haze clouding over my senses. I manage to lift my arms and put my hands to my temple to feel a light plastic stuck to my forehead. A bandage? I flutter my eyes open and look down to see myself in a bed, don with a light blue hospital gown. I tilt my head to the side only to realize there are at least a dozen tubes attached to my arm. Following the path of the tubes with my eyes, I stop only to realize I’m hooked up to about 5 different machines. What the hell is going on. I struggle to sit myself up, using all my physical strength and brainpower to figure out where I am; when a male voice startles me.
                    “Finally. You’re up. Well, welcome to the Nexus."
                    </p>
                  </Media.Body>
                </Media>
          </ul>
          </Grid>
          <Grid item xs={1}>
            <div id="part2"
                  style={{
                    backgroundColor: 'lightgrey',
                    width:'1%',
                    height: '400px',
                    marginTop: '40px'                    
                  }}
                ></div>
          </Grid>
          <Grid item xs={4}>
          {/* <div id='part3' style={{width:'60%'}}> */}
                  <div style={{marginTop: "-80px"}}>
                    <button style={{backgroundColor:'pink', borderRadius: '10px', borderColor: 'pink', margin: '0% 2% 2% 0%'}}>captured</button>
                    <button style={{backgroundColor:'pink', borderRadius: '10px', borderColor: 'pink', margin: '0% 2% 2% 0%'}}>ontherun </button>
                    <button style={{backgroundColor:'pink', borderRadius: '10px', borderColor: 'pink'}}>scaredforlife</button><br/>

                    <button style={{backgroundColor:'pink', borderRadius: '10px', borderColor: 'pink', margin: '0% 2% 2% 0%'}}>whoandwhy</button>
                    <button style={{backgroundColor:'pink', borderRadius: '10px', borderColor: 'pink', margin: '0% 2% 2% 0%'}}>nexus</button>
                    <button style={{backgroundColor:'pink', borderRadius: '10px', borderColor: 'pink'}}>intro</button>
                  </div><br/>
                  <div
                    style={{
                      backgroundColor: 'lightgrey',
                      width:'100%',
                      height: '2%'
                    }}
                  ></div>
                  <br/>
                  <div>
                    <h4>NEWSLETTER SIGN UP</h4>
                    <p>Sign up for our weekly newsletter to stay up to date with the blogs, etc., etc.,</p>
                    <button className="signbtn" name="signup" style={{
                      backgroundColor:'lightgrey',
                      borderColor: 'none'
                    }}>Sign Me Up</button>
                  </div>
                {/* </div> */}
          </Grid>
        </Grid>
        </div> 
        <Footer style={{marginTop: '4%'}}></Footer>
      </>
    );
  }
}

export default Leap
