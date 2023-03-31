describe('Create New User', () => {
    it("Successfully create new user", () => {
        var user = {
            "name": "Eduwork",
            "job": "Education"
        }
        cy.request('POST', 'https://reqres.in/api/User', user).then((response) =>{
            expect(response.status).equal(201)
        })   
    })
}) 