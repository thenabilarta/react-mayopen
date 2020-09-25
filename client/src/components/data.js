const data = [
  {
    url:
      'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/amerika.jpg',
    country: '/destinasi/amerika',
    destinasi: 'Amerika Serikat',
    kota:
      'San Fransisco Los Angeles San Diego Las Vegas New York Boston Chicago',
    id: 'amerika',
    detail:
      "SAN FRANSISCO golden gate bridge fisherman wharf LOS ANGELES hollywood sign staples center SAN DIEGO balboa park LAS VEGAS bellagio hotel and casino grand canyon NEW YORK liberty's park brooklyn bridge times square CHICAGO millenium park boston harvard university",
    biaya:
      'Biaya 25jt++ sudah termasuk hotel, transportasi, tiket pesawat, makan, tiket ke balboa dan liberty park. Belum termasuk visa dan tip.',
    day: [
      {
        day: 'Day 1',
        departure: 'Jakarta',
        arrival: 'San Fransisco',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jakarta.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/sanfransisco.png',
        classname: 'container1',
      },
      {
        day: 'Day 2',
        departure: 'San Fransisco',
        arrival: 'Los Angeles',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/sanfransisco.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/losangeles.png',
        classname: 'container2',
      },
      {
        day: 'Day 3',
        departure: 'Los Angeles',
        arrival: 'San Diego',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/losangeles.png',
        image2: '',
        classname: 'container3',
      },
      {
        day: 'Day 4',
        departure: 'San Diego',
        arrival: 'Las Vegas',
        image1: '',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/lasvegas.png',
        classname: 'container4',
      },
      {
        day: 'Day 5',
        departure: 'Las Vegas',
        arrival: 'New York',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/lasvegas.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/newyork.png',
        classname: 'container5',
      },
      {
        day: 'Day 6',
        departure: 'New York',
        arrival: 'Chicago',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/newyork.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/chicago.png',
        classname: 'container6',
      },
      {
        day: 'Day 7',
        departure: 'Chicago',
        arrival: 'Jakarta',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/chicago.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jakarta.png',
        classname: 'container7',
      },
    ],
  },
  {
    url: 'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/ausnz.jpg',
    country: '/destinasi/ausnz',
    destinasi: 'Australia Selandia Baru',
    kota: 'Sydney Canberra Melbourne Christchruch Queenstown Auckland',
    id: 'ausnz',
    detail:
      'SYDNEY opera house sydney harbour bridge CANBERRA the parliament house MELBOURNE queen victoria market CHRISTCHRUCH christchruch grand mosque international artctic center QUEENSTOWN milford sound queenstown skyline mount cook lake wanaka te anau AUCKLAND hobbiton wellington',
    biaya:
      'Biaya 25jt++ sudah termasuk hotel, transportasi, tiket pesawat, makan, tiket ke milford sound dan skyline cable car. Belum termasuk visa dan tip.',
    day: [
      {
        day: 'Day 1',
        departure: 'Jakarta',
        arrival: 'Sydney',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jakarta.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/sydney.png',
        classname: 'container1',
      },
      {
        day: 'Day 2',
        departure: 'Sydney',
        arrival: 'Canberra',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/sydney.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/canberra.png',
        classname: 'container2',
      },
      {
        day: 'Day 3',
        departure: 'Canberra',
        arrival: 'Melbourne',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/canberra.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/melbourne.png',

        classname: 'container3',
      },
      {
        day: 'Day 4',
        departure: 'Melbourne',
        arrival: 'Christchruch',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/melbourne.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/christchruch.png',
        classname: 'container4',
      },
      {
        day: 'Day 5',
        departure: 'Christchruch',
        arrival: 'Queenstown',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/christchruch.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/queenstown.png',
        classname: 'container5',
      },
      {
        day: 'Day 6',
        departure: 'Queenstown',
        arrival: 'Auckland',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/queenstown.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/auckland.png',
        classname: 'container6',
      },
      {
        day: 'Day 7',
        departure: 'Auckland',
        arrival: 'Jakarta',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/auckland.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jakarta.png',
        classname: 'container7',
      },
    ],
  },
  {
    url:
      'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/eropabarat.jpg',
    country: '/destinasi/eropabarat',
    destinasi: 'Eropa Barat',
    kota: 'Milan Luzern Frankfurt Amsterdam Brussels Paris',
    id: 'eropabarat',
    detail:
      "MILAN duomo di milano san siro LUZERN luzern's lake mount titlis FRANKFURT frankfurt square koln volendam AMSTERDAM keukenhof atomium eiffel tower PARIS arc de triomphe muse de'louvre la valle village REIMS reim's cathedral luxemburg int'l airport",
    biaya:
      'Biaya 25jt++ sudah termasuk hotel, transportasi, tiket pesawat, makan, tiket ke keukenhof dan mount titlis. Belum termasuk visa dan tip.',
    day: [
      {
        day: 'Day 1',
        departure: 'Jakarta',
        arrival: 'Milan',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jakarta.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/milan.png',
        classname: 'container1',
      },
      {
        day: 'Day 2',
        departure: 'Milan',
        arrival: 'Luzern',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/milan.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/luzern.png',
        classname: 'container2',
      },
      {
        day: 'Day 3',
        departure: 'Luzern',
        arrival: 'Frankfurt',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/luzern.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/frankfurt.png',
        classname: 'container3',
      },
      {
        day: 'Day 4',
        departure: 'Frankfurt',
        arrival: 'Amsterdam',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/frankfurt.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/amsterdam.png',
        classname: 'container4',
      },
      {
        day: 'Day 5',
        departure: 'Amsterdam',
        arrival: 'Brussels',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/amsterdam.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/brussels.png',
        classname: 'container5',
      },
      {
        day: 'Day 6',
        departure: 'Brussels',
        arrival: 'Paris',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/brussels.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/paris.png',
        classname: 'container6',
      },
      {
        day: 'Day 7',
        departure: 'Paris',
        arrival: 'Jakarta',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/paris.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jakarta.png',
        classname: 'container7',
      },
    ],
  },
  {
    url:
      'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/eropatimur.jpg',
    country: '/destinasi/eropatimur',
    destinasi: 'Eropa Timur',
    kota: 'Munich Praha Brno Budapest Bratislava Vienna Hallstatt',
    id: 'eropatimur',
    detail:
      "MUNICH olimpia park marienplatz PRAHA prague castle charles bridge BUDAPEST hero's square szechenyi chain bridge spilberk castle BRATISLAVA bratislava castle michael's gate VIENNA schonbrunn palace saint stephen cathedral HALLSTATT hallstatt salt mine hallstatt lake",
    biaya:
      'Biaya 25jt++ sudah termasuk hotel, transportasi, tiket pesawat, makan, tiket ke hallsatt salt mine dan prague castle. Belum termasuk visa dan tip.',
    day: [
      {
        day: 'Day 1',
        departure: 'Jakarta',
        arrival: 'Munich',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jakarta.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/munich.png',
        classname: 'container1',
      },
      {
        day: 'Day 2',
        departure: 'Munich',
        arrival: 'Praha',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/munich.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/praha.png',
        classname: 'container2',
      },
      {
        day: 'Day 3',
        departure: 'Praha',
        arrival: 'Brno',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/praha.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/brno.png',
        classname: 'container3',
      },
      {
        day: 'Day 4',
        departure: 'Brno',
        arrival: 'Budapest',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/brno.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/budapest.png',
        classname: 'container4',
      },
      {
        day: 'Day 5',
        departure: 'Budapest',
        arrival: 'Bratislava',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/budapest.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/bratislava.png',
        classname: 'container5',
      },
      {
        day: 'Day 6',
        departure: 'Bratislava',
        arrival: 'Vienna',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/bratislava.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/vienna.png',
        classname: 'container6',
      },
      {
        day: 'Day 7',
        departure: 'Vienna',
        arrival: 'Jakarta',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/vienna.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jakarta.png',
        classname: 'container7',
      },
    ],
  },
  {
    url:
      'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/inggris.jpg',
    country: '/destinasi/inggris',
    destinasi: 'Britania Raya Irlandia',
    kota: 'London Manchester Edinburgh Belfast Galway Dublin Liverpool',
    id: 'inggris',
    detail:
      'LONDON big ben london eye london bridge MANCHESTER etihad stadium old trafford EDINBURGH york castle edinburgh castle GALWAY sea of galway belfast titanic museum DUBLIN dublin castle LIVERPOOL anfield the beatles museum trafalgar square',
    biaya:
      "Biaya 25jt++ sudah termasuk hotel, transportasi, tiket pesawat, makan, tiket ke old trafford dan the giant's causeway. Belum termasuk visa dan tip.",
    day: [
      {
        day: 'Day 1',
        departure: 'Jakarta',
        arrival: 'London',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jakarta.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/london.png',
        classname: 'container1',
      },
      {
        day: 'Day 2',
        departure: 'London',
        arrival: 'Manchester',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/london.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/manchester.png',
        classname: 'container2',
      },
      {
        day: 'Day 3',
        departure: 'Manchester',
        arrival: 'Edinburgh',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/manchester.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/edinburgh.png',
        classname: 'container3',
      },
      {
        day: 'Day 4',
        departure: 'Edinburgh',
        arrival: 'Galway',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/edinburgh.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/galway.png',
        classname: 'container4',
      },
      {
        day: 'Day 5',
        departure: 'Galway',
        arrival: 'Dublin',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/galway.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/dublin.png',
        classname: 'container5',
      },
      {
        day: 'Day 6',
        departure: 'Dublin',
        arrival: 'Liverpool',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/dublin.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/liverpool.png',
        classname: 'container6',
      },
      {
        day: 'Day 7',
        departure: 'Liverpool',
        arrival: 'Jakarta',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/liverpool.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jakarta.png',
        classname: 'container7',
      },
    ],
  },
  {
    url:
      'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/kanada.jpg',
    country: '/destinasi/kanada',
    destinasi: 'Kanada',
    kota: 'Vancouver Whistler Banff Calgary Montreal Ottawa Toronto',
    id: 'kanada',
    detail:
      'VANCOUVER whistler alberta BANFF banff national park banff hot springs CALGARY jasper national park MONTREAL old port montreal OTTAWA notre-dame parliament hill TORONTO niagara falls high park quebec city',
    biaya:
      'Biaya 25jt++ sudah termasuk hotel, transportasi, tiket pesawat, makan, tiket ke banff dan jasper national park. Belum termasuk visa dan tip.',
    day: [
      {
        day: 'Day 1',
        departure: 'Jakarta',
        arrival: 'Vancouver',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jakarta.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/vancouver.png',
        classname: 'container1',
      },
      {
        day: 'Day 2',
        departure: 'Vancouver',
        arrival: 'Banff',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/vancouver.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/banff.png',
        classname: 'container2',
      },
      {
        day: 'Day 3',
        departure: 'Banff',
        arrival: 'Calgary',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/banff.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/calgary.png',
        classname: 'container3',
      },
      {
        day: 'Day 4',
        departure: 'Calgary',
        arrival: 'Montreal',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/calgary.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/montreal.png',
        classname: 'container4',
      },
      {
        day: 'Day 5',
        departure: 'Montreal',
        arrival: 'Ottawa',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/montreal.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/ottawa.png',
        classname: 'container5',
      },
      {
        day: 'Day 6',
        departure: 'Ottawa',
        arrival: 'Toronto',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/ottawa.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/toronto.png',
        classname: 'container6',
      },
      {
        day: 'Day 7',
        departure: 'Toronto',
        arrival: 'Jakarta',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/toronto.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jakarta.png',
        classname: 'container7',
      },
    ],
  },
  {
    url:
      'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/timurtengah.jpg',
    country: '/destinasi/timurtengah',
    destinasi: 'Timur Tengah',
    kota: 'Amman Dead Sea Jerusalem Jerikho Betlehem Tel Aviv Petra Wadi Rum',
    id: 'timurtengah',
    detail:
      'AMMAN ashabul kahfi cave DEAD SEA mount nebo JERUSALEM dome of the rock western wall BETLEHEM jerikho hebron TEL AVIV jaffa tiberias PETRA wadi rum amman grand mosque',
    biaya:
      'Biaya 25jt++ sudah termasuk hotel, transportasi, tiket pesawat, makan, tiket ke petra dan western wall. Belum termasuk visa dan tip.',
    day: [
      {
        day: 'Day 1',
        departure: 'Jakarta',
        arrival: 'Amman',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jakarta.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/amman.png',
        classname: 'container1',
      },
      {
        day: 'Day 2',
        departure: 'Amman',
        arrival: 'Dead Sea',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/amman.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/deadsea.png',
        classname: 'container2',
      },
      {
        day: 'Day 3',
        departure: 'Dead Sea',
        arrival: 'Jerusalem',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/deadsea.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jerusalem.png',
        classname: 'container3',
      },
      {
        day: 'Day 4',
        departure: 'Jerusalem',
        arrival: 'Betlehem',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jerusalem.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/betlehem.png',
        classname: 'container4',
      },
      {
        day: 'Day 5',
        departure: 'Betlehem',
        arrival: 'Tel Aviv',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/betlehem.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/telaviv.png',
        classname: 'container5',
      },
      {
        day: 'Day 6',
        departure: 'Tel Aviv',
        arrival: 'Petra',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/telaviv.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/petra.png',
        classname: 'container6',
      },
      {
        day: 'Day 7',
        departure: 'Petra',
        arrival: 'Jakarta',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/petra.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jakarta.png',
        classname: 'container7',
      },
    ],
  },
  {
    url: 'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/turki.jpg',
    country: '/destinasi/turki',
    destinasi: 'Turki',
    kota: 'Istanbul Bursa Pamukkale Cappadocia',
    id: 'turki',
    detail:
      'ISTANBUL hagia sophia taksim topkapi palace BURSA uludag national park koza han grand mosque of bursa PAMUKKALE thermal pool CAPPADOCIA pigeon valley mount erciyes uchisar castle',
    biaya:
      'Biaya 20jt++ sudah termasuk hotel, transportasi, tiket pesawat, makan, tiket ke Hagia Sophia dan plaza Topkapi. Belum termasuk visa dan tip.',
    day: [
      {
        day: 'Day 1',
        departure: 'Jakarta',
        arrival: 'Istanbul',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jakarta.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/istanbul.png',
        classname: 'container1',
      },
      {
        day: 'Day 2',
        departure: 'Istanbul',
        arrival: 'Bursa',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/istanbul.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/bursa.png',
        classname: 'container2',
      },
      {
        day: 'Day 3',
        departure: 'Bursa',
        arrival: 'Pamukkale',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/bursa.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/pamukkale.png',
        classname: 'container3',
      },
      {
        day: 'Day 4',
        departure: 'Pamukkale',
        arrival: 'Cappadocia',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/pamukkale.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/cappadocia.png',
        classname: 'container4',
      },
      {
        day: 'Day 5',
        departure: 'Cappadocia',
        arrival: 'Jakarta',
        image1:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/cappadocia.png',
        image2:
          'https://mayopentrip-bucket.s3-ap-southeast-1.amazonaws.com/jakarta.png',
        classname: 'container5',
      },
    ],
  },
];

export default data;
