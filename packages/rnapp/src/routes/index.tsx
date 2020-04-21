import * as React from 'react';
import { NativeRouter, Route, Switch } from 'react-router-native';

import RegisterConnector from '../modules/RegisterConnector';

export const Routes = () => {
  return (
    <NativeRouter>
      <Switch>
        <Route exact={true} path="/" component={RegisterConnector} />
      </Switch>
    </NativeRouter>

  )
}