import React from "react";
import { Helmet } from "react-helmet";
import { withTrans } from "../i18n/withTrans";
import Header from "./index/Header";
import Footer from "./index/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Cees Jol</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Master Student Computer Science and Web Developer, based in Delft, the Netherlands"
        />
        <meta
          name="keywords"
          content="Cees Jol, Computer Science, Delft, developer, web developer, React, Vue, HTML, JavaScript"
        />
        <meta name="author" content="Cees Jol"></meta>
      </Helmet>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default withTrans(Layout);
