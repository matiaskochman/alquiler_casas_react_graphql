import * as React from "react";
import { RegisterController } from "@airbnb/controller";

import { RegisterView } from "./ui/RegisterView";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <RegisterController>
        // tslint:disable-next-line:jsx-no-multiline-js
        {({ submit }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
