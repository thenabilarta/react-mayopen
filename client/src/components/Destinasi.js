import React, {useEffect} from 'react';
import {gsap, TimelineLite} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import data from './data';
gsap.registerPlugin(ScrollTrigger);

function Destinasi(props) {
  console.log(props.match.params.id);

  let obj = data.find((o) => o.id === props.match.params.id);
  console.log(obj);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let tl = new TimelineLite({delay: 0.3});

  useEffect(() => {
    tl.from('.container2', {yPercent: 100});
    tl.from('.container3', {yPercent: 100});
    tl.from('.container4', {yPercent: 100});
    tl.from('.container5', {yPercent: 100});
    tl.from('.container6', {yPercent: 100});
    tl.from('.container7', {yPercent: 100});

    ScrollTrigger.create({
      animation: tl,
      trigger: 'main',
      markers: true,
      pin: true,
      start: 'top top',
      end: '+=5000',
      scrub: true,
      toggleActions: 'restart complete reverse reset',
    });
  });

  return (
    <div className="destinasi">
      <header>
        <div className="top">
          <a href="/">
            <img
              src="https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/logo.png"
              alt=""
            />
          </a>
          <h1>{obj.destinasi}</h1>
        </div>
        <div className="bottom">
          <h3>{obj.kota}</h3>
        </div>
      </header>
      <main className="main" style={{height: '100vh', position: 'relative'}}>
        {obj.day.map((data, index) => (
          <div className={data.classname} key={index}>
            <div className="top">
              <h3>{data.day}</h3>
            </div>
            <div className="middle">
              <img
                style={{position: 'absolute', maxHeight: '30vh', opacity: '.4'}}
                src={data.image1}
                alt=""
              />
              <p>{data.departure}</p>
            </div>
            <div className="bottom">
              <img
                style={{position: 'absolute', maxHeight: '30vh', opacity: '.4'}}
                src={data.image2}
                alt=""
              />
              <p>{data.arrival}</p>
            </div>
          </div>
        ))}
      </main>
      <div className="detail">
        <h3>Detail Perjalanan</h3>
        <p>{obj.detail}</p>
        <p>{obj.biaya}</p>
      </div>
    </div>
  );
}

export default Destinasi;
