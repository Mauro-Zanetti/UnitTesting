const cds = require('@sap/cds/lib')
const { GET, POST, PATCH, expect } = cds.test(__dirname+'/..')
const validatePassword = require('../srv/validatePassword');

describe('Validate Password Tests', () => {
    it("empty password", async () => {
        expect(await validatePassword("")).to.equal(false)
    })
    it("no numbers password", async () => {
        expect(await validatePassword("asdfghjk")).to.equal(false)
    })
    it("no letters password", async () => {
        expect(await validatePassword("12345678")).to.equal(false)
    })
    it("correct password", async () => {
        expect(await validatePassword("qwer1234")).to.equal(true)
    })

    it("test connection to db", async () => {
        const { headers, status, data } = await GET`/api/Users`
        // Can use filter, extend, etc
        expect(status).to.equal(200)
        console.log(headers);
        expect(headers).to.contain({
            'content-type': 'application/json;odata.metadata=minimal',
            'odata-version': '4.0'
        })
        expect(data.value).to.be.an('array').that.deep.contain({ 
            id: 1,
            name: 'juan',
            password: '1234qwer'
        });
        expect(await validatePassword(data.value[0].password)).to.equal(true)
    })
});