import React from 'react';
import App from 'next/app';
import { Provider } from 'mobx-react';
import {TasksManager} from '../stores/TasksManager'
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const font = "font-family: 'Ubuntu', sans-serif;";
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#ffc93c',
    },
    primary:{
      main:'#07689f',
    }
  },
  typography: {
    fontFamily:font,
  },
});

const tasksManager=new TasksManager()
const store = { tasksManager };

class CustomApp extends App {
  

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider {...store}>
                 <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                    </ThemeProvider>
            </Provider>
        );
    }


}

export default CustomApp;