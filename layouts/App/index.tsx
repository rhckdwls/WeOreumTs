import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Haeder from '@layouts/Haeder';

const Landing = loadable(() => import('@pages/Landing'));
const LogIn = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Workspace = loadable(() => import('@layouts/Workspace'));
const OreumRoom = loadable(() => import('@pages/OreumRoom'));
const SearchOreum = loadable(() => import('@pages/SearchOreum'));
const DetailOreum = loadable(() => import('@pages/DetailOreum'));
const DetailOreumRoom = loadable(() => import('@pages/DetailOreumRoom'));
const OreumRoomCreate = loadable(() => import('@pages/OreumRoomCreate'));

function App() {
  return (
    <>
      <Haeder />
      <Switch>
        <Redirect exact path="/" to="/landing" />
        <Route path="/landing" component={Landing} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/oreum" component={OreumRoom} />
        <Route exact path="/oreumcreate" component={OreumRoomCreate} />
        <Route path="/oreum/:id" component={DetailOreumRoom} />
        <Route exact path="/searchoreum" component={SearchOreum} />
        <Route path="/searchoreum/:id" component={DetailOreum} />
        <Route path="/workspace/:workspace" component={Workspace} />
      </Switch>
    </>
  );
}

export default App;
