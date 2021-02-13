import React, { Component } from 'react';
import Slider from 'react-slick';
import aashna from '../images/aashna.png';
import adisha from '../images/adisha.png';
import bharvi from '../images/bharvi.png';
import darshil from '../images/darshil.png';
import isha from '../images/isha.png';
import ishita from '../images/ishita.png';
import kavisha from '../images/kavisha.png';
import naba from '../images/naba.png';
import nikki from '../images/nikki.png';
import niyati from '../images/niyati.png';
import priya from '../images/priya.png';
import radhika from '../images/radhika.png';
import raj from '../images/raj.png';
import riya from '../images/riya.png';
import samiksha from '../images/samiksha.png';
import shalin from '../images/shalin.png';
import tirth from '../images/tirth.png';
import veda from '../images/veda.png';
import vedanshi from '../images/vedanshi.png';
import vivek from '../images/vivek.png';
import yasha from '../images/yasha.png';
import zeel from '../images/zeel.png';
import MediaQuery from 'react-responsive';
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
    };
    const settingsMobile = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
    };
    return (
      <div>
        <MediaQuery minDeviceWidth={1024}>
          <Slider {...settings}>
            <div>
              <img src={aashna} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={adisha} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={bharvi} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={darshil} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={isha} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={ishita} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={kavisha} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={naba} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={nikki} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={niyati} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={priya} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={radhika} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={raj} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={riya} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={samiksha} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={shalin} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={tirth} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={veda} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={vedanshi} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={vivek} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={yasha} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={zeel} className="monkpics" alt="monk" />
            </div>
          </Slider>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1023.9}>
          <Slider {...settingsMobile}>
            <div>
              <img src={aashna} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={adisha} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={bharvi} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={darshil} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={isha} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={ishita} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={kavisha} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={naba} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={nikki} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={niyati} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={priya} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={radhika} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={raj} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={riya} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={samiksha} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={shalin} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={tirth} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={veda} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={vedanshi} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={vivek} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={yasha} className="monkpics" alt="monk" />
            </div>
            <div>
              <img src={zeel} className="monkpics" alt="monk" />
            </div>
          </Slider>
        </MediaQuery>
      </div>
    );
  }
}
