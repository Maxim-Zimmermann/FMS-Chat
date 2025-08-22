const crypto = require('crypto');

function generateSafePassword(length = 40) {
    const safeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charArray = safeChars.split('');
    const result = [];

    // Securely generate random bytes
    const randomBytes = crypto.randomBytes(length);

    for (let i = 0; i < length; i++) {
        const index = randomBytes[i] % charArray.length;
        result.push(charArray[index]);
    }

    return result.join('');
}

const password = generateSafePassword(40);
console.log("Generated password-safe HTML-readable string:");
console.log(password);
