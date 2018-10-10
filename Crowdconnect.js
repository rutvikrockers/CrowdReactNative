import React from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import Login from './components/Login'
import Dashboard from './components/Dashboard';

export default class Crowdconnect extends React.Component {

    render(){
        return(
           
            <Router>
            <Scene key="root">
              <Scene key="login"
                component={Login}
                  animation='fade'
                hideNavBar={true}
                initial={true}
              />
              <Scene key="dashboard"
                component={Dashboard}
                animation='fade'
                hideNavBar={true}
              />
            </Scene>
          </Router>
   
        );
    }
}