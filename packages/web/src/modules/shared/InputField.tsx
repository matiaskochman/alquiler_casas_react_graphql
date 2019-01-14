import * as React from "react";
import { FieldProps } from "formik";
import { Form, Input } from "antd";

/*
  <div>
    <input type="text" {...field} {...props} />
    {touched[field.name] &&
      errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
*/

export const InputField: React.SFC<FieldProps<any> & {}> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];
  return (
    <Form.Item
      help={errorMsg}
      // tslint:disable-next-line:jsx-no-multiline-js
      validateStatus={errorMsg ? "error" : undefined}
    >
      <Input {...field} {...props} />
    </Form.Item>
  );
};
