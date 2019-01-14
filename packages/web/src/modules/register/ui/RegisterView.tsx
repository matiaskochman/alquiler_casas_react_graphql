import * as React from "react";
import * as AntD from "antd";
import { withFormik, FormikErrors, FormikProps, Field, Form } from "formik";
import { validUserSchema } from "@airbnb/common";
import { InputField } from "src/modules/shared/InputField";

 const { Form: AntForm, Icon, Button, Checkbox } = AntD;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    // const { handleSubmit } = this.props;
    return (
      <Form
        // onSubmit={handleSubmit}
        // tslint:disable-next-line:jsx-no-multiline-js
        style={{
          display: "flex"
        }}
      >
        <div
          className="login-form"
          // tslint:disable-next-line:jsx-no-multiline-js
          style={{
            display: "flex",
            margin: "auto",
            flexDirection: "column",
            width: 700
          }}
        >
          <Field
            name="email"
            type="email"
            // tslint:disable-next-line:jsx-no-multiline-js
            prefix={
              <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any}
            placeholder="Email"
            component={InputField}
          />
          <Field
            type="password"
            name="password"
            // tslint:disable-next-line:jsx-no-multiline-js
            prefix={
              <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any}
            placeholder="Password"
            component={InputField}
          />

          <AntForm.Item>
            <Checkbox>Remember me</Checkbox>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </AntForm.Item>
          <AntForm.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </AntForm.Item>
          <AntForm.Item>
            Or <a href="">login now!</a>
          </AntForm.Item>
        </div>
      </Form>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  validateOnChange: true,
  validateOnBlur: true,
  mapPropsToValues: () => ({ email: "", password: "" }),
  // tslint:disable-next-line:ban-comma-operator
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
