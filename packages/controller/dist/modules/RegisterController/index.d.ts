import * as React from "react";
import { RegisterMutationVariables } from "src/operation-result-types";
interface Props {
    children: (data: {
        submit: (values: RegisterMutationVariables) => Promise<null>;
    }) => JSX.Element | null;
}
export declare const RegisterController: React.ComponentClass<Props, any>;
export {};
