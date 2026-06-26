import {Router} from "express";
import {changeCurrentPassword, forgotPasswordRequest, getCurrentUser, login, logout, refreshAccessToken, registerUser, resendEmailVerification, resetForgotPassword, verifyEmail} from "../controllers/auth.js"
import { validate } from "../middleware/validator.js";
import { userLoginValidator, userRegisterValidator, userForgotPasswordValidator, userResetForgotPasswordValidator, userChangeCurrentPasswordValidator } from "../validators/index.js";
import {verifyJWT} from "../middleware/authMiddleware.js"

const router = Router();

// unsecured route
router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, login);
router.route("/verify-email/:verificationToken").get(verifyEmail);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/forgot-password").post(userForgotPasswordValidator(), validate, forgotPasswordRequest);
router.route("/reset-password/:resetToken").post(userResetForgotPasswordValidator, validate, resetForgotPassword);

// secure routes
router.route("/logout").post(verifyJWT, logout);
router.route("/current-user").post(verifyJWT, getCurrentUser);
router.route("/change-password").post(verifyJWT, userChangeCurrentPasswordValidator(), validate, changeCurrentPassword);
router.route("/resend-email-verification").post(verifyJWT, resendEmailVerification);

export default router;