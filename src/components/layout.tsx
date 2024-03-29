import * as React from "react";
import { useStaticQuery, graphql, HeadFC } from "gatsby";
import NavBar from "./navbar";
import { Footer } from "./footer";
import "../style.css";
import Head from "./head";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Head />

      <NavBar />

      {children}
      <Footer />
    </>
  );
};

export default Layout;
