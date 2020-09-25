const reviews = [
  {
    name: 'Dumasari',
    img:
      'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/dumasari.png',
    job: 'Pegawai BUMN',
    text:
      'Berkesan sekali dengan perjalanan mayopentrip, selain terjangkau, destinasi bisa di sesuaikan dan kita nyaman walau bawa orang tua yang sudah sepuh... maju terus yaa ',
  },
  {
    name: 'Maryani Masud',
    img:
      'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/maryani.png',
    job: 'Dokter',
    text:
      'Waktu ikut grup Jordan aqso palestina sangat berkesan dan kekeluargaan, fasilitasnya pun lengkap dan memuaskan',
  },
  {
    name: 'Irma',
    img: 'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/irma.png',
    job: 'ibu rumah tangga',
    text:
      'pokoknya happy bisa puas kebeberapa tempat Indah yang kayanya kalau pake travel ternama bisa mahal banget ... ',
  },
  {
    name: 'Sidiq Gandi',
    img: 'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/sidiq.png',
    job: 'ASN',
    text:
      'Saya senang. Seperti sedang berlibur bersama keluarga. Semuanya akrab. Penginapan bagus. Makanan enak. Destinasi lengkap dan berkualitas. Biaya murah. Jujur dan amanah.',
  },
  {
    name: 'Ajenk',
    img: 'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/ajenk.png',
    job: 'Karyawati',
    text:
      'Pernah ikut May Open Trip ke Cina di Maret 2018 dan UK-Ireland di Agustus 2019. Asik dan santuy. Moga bisa join trip ke Kanada, New Zealand, Afrika, Amerika Latin dll. Semangat terus buat bikin open trip ke destinasi keceh badai lainnya yaa...',
  },
  {
    name: 'Dewi',
    img: 'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/dewi.png',
    job: 'Ibu Rumah Tangga',
    text:
      'Sudah 3X liburan bareng mayopentrip Iran,China dan Rusia semua paketnya murah tapi bukan kaleng-kakengan semua fasilitasnya nyaman.Next trip utk liburan bareng mayopentrip lagi dong.',
  },
  {
    name: 'Tettri Vivi',
    img: 'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/tetri.png',
    job: 'Notaris',
    text: 'Maju teruuuss',
  },
  {
    name: 'Wartiyas Tuti',
    img: 'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/orang.png',
    job: 'traveler',
    text:
      'Traveling bersama mayopentrip -Menyenangkan, Berkesan, Kekeluargaan sehingga menambah saudara, Destinasi oce banget, Leadernya huebat, Harga Terjangkau, Mayopentrip ....',
  },
  {
    name: 'Adhe MH',
    img: 'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/orang.png',
    job: 'traveler',
    text:
      'Saya paling suka ikut Mayopentrip yg bookingan hotel nya oke semua dan destinasi wisatanya customize.',
  },
  {
    name: 'Asrie',
    img: 'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/asrie.png',
    job: 'traveler',
    text: 'Happy bareng Mayopentrip.',
  },
  {
    name: 'Liza Irvan',
    img: 'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/liza.png',
    job: 'traveler',
    text: 'Smg lebih baik lagi ...sukses selalu!',
  },
  {
    name: 'Marwati Widyamartana',
    img:
      'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/marwati.png',
    job: 'traveler',
    text:
      'Sdh 3x ikut mayopentrip..ke london-edinburgh-scandinavia, aussie-NZ dan moscow-st petersburg-kazan. So far semua berending happy..destinasi yg dipilih agak extraordinary..kluar dari pakem umum yg biasa mementingkan efisiensi jarak dan waktu. Justru itu yg bikin keinginan kita terakomodasi. Maju trs mayopentrip..insya Allah 2021 daftar lg...',
  },
  {
    name: 'Dr ivo fitrian SpOG',
    img: 'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/ivo.png',
    job: 'Dokter',
    text:
      'Perjalanan sama bu may luar biada seruuuu.. hotel enak,tempat wisata bagus2 dan yg pasti tempat belanja nya murce2.. bu may sebagai tpur leader sangat kopperatif selalu bertanya ke peserta kita mau nya bagaimana dan seperti apa tidak memaksakan kehendak.. dan soo pasti harga nya sangat murcee.. bisa dibandingkan dengan tour2 yg lain.. ahhhh ayooo kita jalan2 lagi bu.. tak sabar menanti trip2 ibu selanjutnya😘😘😘😘😘',
  },
  {
    name: 'Dian Saraswati',
    img: 'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/orang.png',
    job: 'Notaris',
    text: 'Ditunggu lg info jalan2nya ya..',
  },
  {
    name: 'Yani',
    img: 'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/yani.png',
    job: 'traveler',
    text: 'Lanjutkan.. Sy ikut 3 kali NZ, Rusia dan Canada.. pokoknya keren',
  },
  {
    name: 'Ida Farida',
    img: 'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/ida.png',
    job: 'Notaris',
    text:
      'Selama perjalanan tour bersama uni, sangat menyenangkan, kekeluargaan, mengikuti keingginan, mendengarkan dan masukan dr peserta tour , semua perjalanan menjadi berkesan dan uni sangat perhatian jika ada yg sakit dan berbagi makanan  uni juga sukai becanda, aku suka ikut tour uni, semoga uni sll sehat dan sll bs memandu kami tour keliling dunia Aamiin YRA love you uni may😘😘😘',
  },
  {
    name: 'Putiri Katili',
    img:
      'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/putiri.png',
    job: 'traveler',
    text:
      'Kapan nge-trip lagiii... Nyaman.....grup spt keluarga sendiri...flexible...tour leadernya kerennn....gabung yukkk....',
  },
  {
    name: 'Endang Widiastuti',
    img:
      'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/endang.png',
    job: 'Pengusaha',
    text:
      'Joint Mayopentrip pasti ketagihan, destinasi menarik dan complete (banyak), hotel berbintang, akrab sesama peserta krn bisa masak bareng, berbagi perbekalan, pasti puas...buruan cobain..enjoy your trip and excited experience',
  },
  {
    name: 'Kamu',
    img: 'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/orang.png',
    job: 'traveler',
    text:
      'Yuk ceritain kesan perjalanan kamu bersama mayopentrip ke berbagai penjuru dunia!',
  },
];

export default reviews;
