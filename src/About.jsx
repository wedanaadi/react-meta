import React from 'react'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <>
      <Helmet>
        <title>AboutPage</title>
        <meta name="description" content="ini meta desc About" />
        <link rel="canonical" href="/about" />
        <meta property="og:site_name" content="test.com/about" />
        <meta property="og:title" content="og AboutPage" />
        <meta property="og:description" content="ini meta og desc AboutPage" />
        <meta
          property="og:image"
          itemprop="image"
          content="https://media.istockphoto.com/id/1356162580/photo/rear-view-of-young-couple-holding-hands-and-looking-out-to-the-sea.jpg?b=1&s=170667a&w=0&k=20&c=fgMSr0Mj0kSJAAU7sYuguEXsWsClT0Frzod3YsIQkqY="
        />
        <meta property="og:type" content="article" />
        <meta property="og:updated_time" content="1440432930" />
        <meta property="og:url" content="/about"></meta>
      </Helmet>
      <p>About Page</p>
    </>
  )
}

export default About