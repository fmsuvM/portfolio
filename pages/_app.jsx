import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';

import Navigator from '../components/Navigator';
import Footer from '../components/Footer';

const Layout = (props) => (
  <div>
    <Navigator />
    {props.children}
    <Footer />
  </div>
)

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    )
  }
}