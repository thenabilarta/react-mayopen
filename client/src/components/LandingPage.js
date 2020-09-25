import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import data from './data';
import reviews from './reviews';

function LandingPage() {
  const [current, setCurrent] = useState(0);
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');
  const [menu, setMenu] = useState(false);

  function currentPlus() {
    setCurrent(current + 1);
    if (current > reviews.length - 2) {
      setCurrent(0);
    }
  }

  function currentMinus() {
    setCurrent(current - 1);
    if (current < 1) {
      setCurrent(reviews.length - 1);
    }
  }

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const kirimpesan = useRef(null);
  const toKirimPesan = () => scrollToRef(kirimpesan);

  const testimoni = useRef(null);
  const toTestimoni = () => scrollToRef(testimoni);

  const kenapa = useRef(null);
  const toKenapa = () => scrollToRef(kenapa);

  const paket = useRef(null);
  const toPaket = () => scrollToRef(paket);

  const onSubmit = (e) => {
    e.preventDefault();

    const variables = {
      nama: nama,
      email: email,
      pesan: pesan,
    };

    console.log(variables);

    function clearInput() {
      setNama('');
      setEmail('');
      setPesan('');
    }

    axios
      .post('/api/pesan/savepesan', variables)
      .then((response) => clearInput());
  };

  return (
    <div className="landing-page">
      <nav>
        <div className="top">
          <div className="logo">
            <img
              src="https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/logo.png"
              alt=""
            />
          </div>
          <div className="icon">
            <i className="fas fa-bars" onClick={() => setMenu(!menu)}></i>
          </div>
        </div>
        <div
          className="bottom"
          style={menu ? {display: 'block'} : {display: 'none'}}
        >
          <div className="menu">
            <ul>
              <li onClick={toPaket}>Paket Wisata</li>
              <li onClick={toKenapa}>Kenapa Kami?</li>
              <li onClick={toTestimoni}>Testimoni</li>
              <li onClick={toKirimPesan}>Kontak Kami</li>
            </ul>
          </div>
        </div>
      </nav>
      <header>
        <h1>Explore the World</h1>
      </header>
      <main>
        <h2 ref={paket}>Tempat Wisata Pilihan</h2>
        <div className="main-image">
          {data.map((data, index) => (
            <Link
              style={{textDecoration: 'none'}}
              to={data.country}
              key={index}
            >
              <div
                className="image"
                style={{
                  background: `url(${data.url})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: '250px',
                  width: '500px',
                  margin: '2rem',
                }}
              >
                <p>{data.destinasi}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="video-container">
          <h2>Dokumentasi Video</h2>
          <video
            controls
            src="https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/videoplayback.mp4"
          ></video>
        </div>
        <div className="kenapa" ref={kenapa}>
          <div className="top">
            <h2>Kenapa Kami</h2>
          </div>
          <div className="bottom">
            <div className="left">
              <i className="fas fa-mosque"></i>
              <h3>Muslim Friendly</h3>
              <p>
                May Opentrip memudahkan peserta Muslim untuk melaksanakan
                kewajiban selama diperjalanan
              </p>
            </div>
            <div className="middle">
              <i className="fas fa-money-bill-wave"></i>
              <h3>Harga Terjangkau</h3>
              <p>
                May Opentrip memiliki harga paket yang jauh lebih terjangkau
                dibanding perusahaan travel lainnya.
              </p>
            </div>
            <div className="right">
              <i className="fas fa-thumbs-up"></i>
              <h3>Terpercaya</h3>
              <p>
                May Opentrip selalu memastikan peserta perjalanan untuk terus
                merasa aman dan nyaman
              </p>
            </div>
          </div>
        </div>
        <div className="jumlah-customer">
          <h2>Jumlah Customer</h2>
          <p>
            Sebagai grup travel baru, Mayopentrip telah memberangkatkan lebih
            dari 20 grup dengan total lebih dari 300 peserta
          </p>
        </div>
        <div className="testimoni" ref={testimoni}>
          <h2>Testimoni</h2>
          <h3>
            <i
              className="kurang fas fa-chevron-left"
              onClick={currentMinus}
            ></i>
            {reviews[current].name}
            <i
              className="tambah fas fa-chevron-right"
              onClick={currentPlus}
            ></i>
          </h3>
          <img src={reviews[current].img} alt="" />
          <p>{reviews[current].job}</p>
          <h5>{reviews[current].text}</h5>

          <p>
            Pernah pergi bersama Mayopentrip? Isi testimoni{' '}
            <Link
              style={{textDecoration: 'none', color: 'black'}}
              to="/testimoni"
            >
              disini
            </Link>
          </p>
        </div>
        <div className="kirim-pesan" ref={kirimpesan}>
          <h2>Kirim Pesan ke Kami</h2>
          <form onSubmit={onSubmit}>
            <ul>
              <li>
                <label htmlFor="nama">Nama:</label>
                <input
                  type="text"
                  name="nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="pesan">Pesan:</label>
                <textarea
                  name="pesan"
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                ></textarea>
              </li>
              <li>
                <button>Kirim</button>
              </li>
            </ul>
          </form>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
