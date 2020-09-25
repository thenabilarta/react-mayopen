import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Testimoni(props) {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pekerjaan, setPekerjaan] = useState('');
  const [paketPerjalanan, setPaketPerjalanan] = useState('');
  const [foto, setFoto] = useState('');
  const [kesan, setKesan] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const variables = {
      nama: nama,
      email: email,
      pekerjaan: pekerjaan,
      paket: paketPerjalanan,
      foto: foto,
      kesan: kesan,
    };

    console.log(variables);

    axios
      .post('/api/testimoni/savetestimoni', variables)
      .then((response) => props.history.push('/'));
  };

  return (
    <div className="testimoni-page">
      <h3>Halaman Testimoni</h3>
      <Link to="/">
        <img
          src="https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/logo.png"
          alt=""
        />
      </Link>
      <form onSubmit={onSubmit}>
        <ul>
          <li>
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              name="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="pekerjaan">Pekerjaan</label>
            <input
              type="pekerjaan"
              name="pekerjaan"
              value={pekerjaan}
              onChange={(e) => setPekerjaan(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="paketPerjalanan">Paket Perjalanan</label>
            <select
              type="paketPerjalanan"
              name="paketPerjalanan"
              value={paketPerjalanan}
              onChange={(e) => setPaketPerjalanan(e.target.value)}
            >
              <option>Australia - Selandia Baru</option>
              <option>Eropa Barat</option>
              <option>Eropa Timur</option>
              <option>Kanada</option>
              <option>Timur Tengah</option>
              <option>Turki</option>
              <option>UK</option>
              <option>USA</option>
              <option>dan lain lain</option>
            </select>
          </li>
          <li>
            <label htmlFor="foto">Foto</label>
            <input
              type="file"
              name="foto"
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="kesan">Kesan</label>
            <textarea
              name="kesan"
              value={kesan}
              onChange={(e) => setKesan(e.target.value)}
            ></textarea>
          </li>
          <li>
            <button>Submit</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Testimoni;
