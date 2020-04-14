"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup = require("yup");
exports.emailNotLongEnough = "email must be at least 3 characters";
exports.passwordNotLongEnough = "password must be at least 3 characters";
exports.invalidEmail = "email must be a valid email";
exports.registerPasswordValidation = yup
    .string()
    .min(4, exports.passwordNotLongEnough)
    .required()
    .max(8);
exports.validUserSchema = yup.object().shape({
    email: yup
        .string()
        .min(3, exports.emailNotLongEnough)
        .max(200)
        .required()
        .email(exports.invalidEmail),
    password: exports.registerPasswordValidation
});
//# sourceMappingURL=user.js.map
