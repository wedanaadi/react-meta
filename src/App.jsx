import React from "react";
import { Helmet } from "react-helmet-async";

const App = () => {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="ini meta desc HomePage" />
        <link rel="canonical" href="/" />
        <meta property="og:site_name" content="test.com" />
        <meta property="og:title" content="HomePage" />
        <meta property="og:description" content="ini meta desc HomePage" />
        <meta
          property="og:image"
          itemprop="image"
          content="https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
        />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1440432930" />
      </Helmet>
      <p>Home Page</p>
    </>
  );
};

export default App;
