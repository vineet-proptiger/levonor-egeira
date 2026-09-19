import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://levonoregeirakollur.com'),
  title: 'Levonor Egeira Kollur | Luxury 3 BHK Flats in Hyderabad',
  description: "Discover Levonor Egeira in Kollur, Hyderabad. Premium 3 BHK luxury residences starting at ₹1.66 Cr with world-class amenities near ORR Exit 2.",
  alternates: {
    canonical: 'https://levonoregeirakollur.com/',
  },
  openGraph: {
    title: 'Levonor Egeira Kollur | Luxury 3 BHK Flats in Hyderabad',
    description: "Discover Levonor Egeira in Kollur, Hyderabad. Premium 3 BHK luxury residences starting at ₹1.66 Cr with world-class amenities near ORR Exit 2.",
    url: 'https://levonoregeirakollur.com/',
    siteName: 'Levonor Egeira',
    images: [
      {
        url: '/images/hero/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Levonor Egeira Near ORR Exit 2, Radial Rd. 7 Hyderabad',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Levonor Egeira Kollur | Luxury 3 BHK Flats in Hyderabad',
    description: "Discover Levonor Egeira in Kollur, Hyderabad. Premium 3 BHK luxury residences starting at ₹1.66 Cr with world-class amenities near ORR Exit 2.",
    images: ['/images/hero/banner.webp'],
  },
  icons: {
    icon: '/images/favicon/fav.webp',
  },
}

import SmoothScroll from '../components/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Levonor Egeira Near ORR Exit 2, Radial Rd. 7",
              "url": "https://levonoregeirakollur.com/",
              "logo": "https://levonoregeirakollur.com/images/logo/Logo.webp",
              "image": "https://levonoregeirakollur.com/images/hero/banner.webp",
              "description": "Levonor Egeira, Hyderabad's premium residential development in Near ORR Exit 2, Radial Rd. 7 offering 3 BHK luxury residences.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near ORR Exit 2, Radial Rd. 7, Kollur",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "502300",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 1.66 Crore Onwards",
              "sameAs": [
                "https://levonoregeirakollur.com/"
              ]
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
