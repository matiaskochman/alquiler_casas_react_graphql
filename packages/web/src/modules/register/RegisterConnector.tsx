import * as React from "react";
import { RegisterController } from "@airbnb/controller";

import { RegisterView } from "./ui/RegisterView";

// container -> view
// container -> connector(for native and js) -> view
// controller -> connector -> view

export class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <RegisterController>
        {({ submit }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
