import Head from "next/head";
import React from "react";
import FirstPage from "../components/FirstPage";

import { observer, inject } from "mobx-react";

@inject('tasksManager')
@observer

export default class Home extends React.Component {

 
  render() {
    return (
      <>
        <Head>
          <title>Home</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <FirstPage />
      </>
    );
  }
}
