import React from 'react'
import {
  FaHome,
  FaBookReader,
  FaPhone,
  FaWindowMaximize,
  FaInstagramSquare,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaCode,
  FaLaptop,
  FaMarker,
} from 'react-icons/fa'

export const links = [
  {
    id: 1,
    text: 'home',
    icon: <FaHome />,
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    icon: <FaBookReader />,
    url: '/about',
  },
  {
    id: 3,
    text: 'Experience',
    icon: <FaWindowMaximize />,
    url: '/experience',
  },
  {
    id: 4,
    text: 'contact',
    icon: <FaPhone />,
    url: '/contact',
  },
]
export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/nst17/',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://github.com/andinianst93',
    icon: <FaGithub />,
  },
  {
    id: 4,
    url: 'https://www.instagram.com/andin1anst/?hl=en',
    icon: <FaInstagramSquare />,
  },
]
export const services = [
  {
    id: 1,
    icon: <FaCode />,
    title: 'web development',
    text: 'Front-end web development untuk website seperti blog pribadi, profil perusahaan, dan website sejenis lainnya.',
  },
  {
    id: 2,
    icon: <FaLaptop />,
    title: 'SEO',
    text: 'Menawarkan jasa SEO untuk riset keyword, mengoptimasi on-page dan off-page, memperbaiki dan mengidentifikasi permasalahan technical SEO, audit, dan pelaporan.',
  },
  {
    id: 3,
    icon: <FaMarker />,
    title: 'SEO Content Writer',
    text: 'Menawarkan jasa menulis artikel SEO untuk website media atau blog pribadi. Topiknya bisa film, finansial, teknologi, dan otomotif.',
  },
]

export const works = [
  {
    id: '1',
    order: 5,
    title: 'SEO Specialist',
    dates: 'September 2021 - Maret 2022',
    duties: [
      'Membuat dan mengeksekusi strategi SEO berdasarkan Google Analytics dan Search Console.',
      'Menulis dan mengedit artikel yang SEO-friendly.',
      'Melakukan audit dan pelaporan bulanan.',
      'Mengidentifikasi dan menyelesaikan permasalahan technical SEO untuk meningkatkan crawlability and indexablity dengan bekerja sama dengan tim developer.',
    ],
    company: 'CekPremi',
  },
  {
    id: '2',
    order: 4,
    title: 'SEO Specialist',
    dates: 'Januari 2022 - sekarang',
    duties: ['philipmulyana.com (Apr 2022 - Jun 2022)'],
    company: 'Freelance',
  },
  {
    id: '3',
    order: 3,
    title: 'SEO Specialist',
    dates: 'Desember 2019 - Mei 2022',
    duties: [
      'Berupaya mempertahankan trafik organik dengan memberikan keyword potensial kepada content writer.',
      'Membuat dan mengeksekusi strategi SEO berdasarkan Google Analytics dan Search Console.',
      'Memberikan ide untuk konten dan menghasilkan trafik berdasarkan Google Trends.',
      'Menulis dan mengedit artikel yang SEO-friendly.',
      'Melakukan audit dan pelaporan bulanan.',
      'Mengidentifikasi dan menyelesaikan permasalahan technical SEO seperti membuat sitemap, robots.txt,  meta robots, membuat site structure., schema mark-up (JSON-LD), dan meningkatkan crawlability and indexablity dengan bekerja sama dengan tim developer.',
    ],
    company: 'Sushi.id',
  },

  {
    id: '4',
    order: 2,
    title: 'SEO Content Writer',
    dates: 'Januari 2019 - April 2019',
    duties: [
      'Melakukan riset keyword.',
      'Membuat tiga artikel SEO per hari',
      'Melakukan peliputan',
    ],
    company: 'JalanTikus',
  },
  {
    id: '5',
    order: 1,
    title: 'Media Relations & SEO Content Writer',
    dates: '2017 - 2019',
    duties: [
      'Media monitoring.',
      'Meliput dan membuat press release.',
      'SEO Content Writer untuk MNC Update.',
    ],
    company: 'MNC Media',
  },
]
