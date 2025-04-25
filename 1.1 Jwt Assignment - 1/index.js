const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

// Validation Schemas
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

/**
 * Function to sign and return a JWT if inputs are valid.
 * @param {string} username - Email of the user
 * @param {string} password - Password (min 6 chars)
 * @returns {string|null} - JWT token or null
 */
function signJwt(username, password) {
    const usernameValidation = emailSchema.safeParse(username);
    const passwordValidation = passwordSchema.safeParse(password);

    if (!usernameValidation.success || !passwordValidation.success) {
        return null;
    }

    const token = jwt.sign({ username }, jwtPassword);
    return token;
}

/**
 * Function to decode a JWT without verifying.
 * @param {string} token - JWT token
 * @returns {boolean} - true if decodable, false otherwise
 */
function decodeJwt(token) {
    try {
        const decoded = jwt.decode(token);
        return !!decoded;
    } catch (err) {
        return false;
    }
}

/**
 * Function to verify a JWT with the secret.
 * @param {string} token - JWT token
 * @returns {boolean} - true if valid and verified, false otherwise
 */
function verifyJwt(token) {
    try {
        jwt.verify(token, jwtPassword);
        return true;
    } catch (err) {
        return false;
    }
}

// Example usage (uncomment to test):
// const token = signJwt("jay@example.com", "123456");
// console.log("JWT:", token);
// console.log("Decoded:", decodeJwt(token));
// console.log("Verified:", verifyJwt(token));
