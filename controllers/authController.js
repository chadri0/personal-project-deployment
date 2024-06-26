const bcrypt = require("bcrypt");
const passport = require("passport");

const User = require("../models/userModel");

// signupRequest
const signupRequest = async (request, response, next) => {
    const { firstName, lastName, email, password } = request.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    bcrypt.hash(password, 10, async (err, hashedPassword) => {
        console.log(firstName, lastName, email, password);
        if (err) {
            return next(err);
        }

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        try {
            await newUser.save();
            
            // login the user after signing up
            request.login(newUser, (err) => {
                if (err) {
                    response.status(400).json({
                        error: {message: "Something went wrong while signing up!"},
                        statusCode: 400,
                    });
                }
                response.status(201).json({
                    success: { message: "User signed up successfully!" },
                    data: { firstName, lastName, email },
                    statusCode: 201,
                });
            });
        } catch (err) {
            if (err.code === 11000 && err.keyPattern.email) {
                response.status(400).json({
                    error: {message: "Email is already registered to an account. Please login."},
                        statusCode: 400,
                });
            } else {
                response.status(500).json({
                    error: {message: "Internal server error."},
                        statusCode: 500,
                });
            }
        }
    });
};

// loginLocalFailed
const loginLocalFailed = (request, response, next) => {
    response.status(401).json({
        error: {message: "Email or password is incorrect."},
        statusCode: 401,
    });
};

// logoutRequest
const logoutRequest = (request, response, next) => {
    request.logout((error) => {
        if (error) {
            response.status(400).json({
                error: {message: "Something went wrong!"},
                statusCode: 400,
            });
        }
        response.status(200).json({
            success: {message: "User logged out!"},
            statusCode: 200,
        });
    });
};

// export
module.exports = {signupRequest, loginLocalFailed, logoutRequest};