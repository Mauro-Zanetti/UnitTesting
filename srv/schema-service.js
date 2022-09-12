const cds = require('@sap/cds')
const validatePassword = require('./validatePassword');
const { Users } = cds.entities;

module.exports = cds.service.impl(async function() {
    
    this.before('CREATE', 'Users', async req => {
        const { password } = req.data;
        const validPassword = await validatePassword(password);
        
        if (validPassword) {
            console.log("---> Password valido")
        }
        else {
            req.reject(409,'Password invalido')
        }
    });
});