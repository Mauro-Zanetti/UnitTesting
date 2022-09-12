async function validatePassword(password) {
    const validLength = password.length >= 8;
    let hasLetter = false;
    const alphabet = "abcdefghijklmnñopqrstuvwxyz";
    for (const letter of alphabet) {
        if (password.toLowerCase().includes(letter)) {
            hasLetter = true;
        }
    }
    let hasNumber = false;
    const numbers = "0123456789";
    for (const number of numbers) {
        if (password.includes(number)) { 
            hasNumber = true;
        }
    }
    let validPassword = validLength && hasNumber && hasLetter;
    if (validPassword) {
        const cds = require('@sap/cds');
        const { Logs } = cds.entities;
        await INSERT
            .into(Logs)
            .entries({ message : password });
    }
    return validPassword;
}

module.exports = validatePassword;