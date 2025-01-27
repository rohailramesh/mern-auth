import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { mailTrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationCode) => {};

export const sendWelcomeEmail = async (email, name) => {};

export const sendPasswordResetEmail = async (email, resetURL) => {};

export const sendResetSuccessEmail = async (email, verificationCode) => {};
