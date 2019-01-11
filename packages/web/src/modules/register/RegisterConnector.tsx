import * as React from "react";
import { RegisterView } from "./ui/RegisterView";

export class RegisterConnector extends React.PureComponent {
  handleSubmit = async (values: any) => {
    console.log(values);
    return null;
  };
  render() {
    return <RegisterView submit={this.handleSubmit} />;
  }
}

// container -> view
// container -> connector -> view
// controller -> connector -> view
