describe('Test our inputs and submit our form', function () {
    beforeEach(function() {
        cy.visit("http://localhost:3000");
    });
    it('Add text to input and submit form', function(){
        cy.get("input[data-cy=name]")
            .type("Marissa")
            .should("have.value", "Marissa");
        cy.get("input[name='email']")
            .type("emailemail.com")
            //meant to have an error below
            .should("have.value", "emailemail.com");
        cy.get("p[data-cy='emailError']")
            .should("have.text", "error: email wrong");
        cy.get("input[name='password']")
            .type("123456")
            .should("have.value", "123456");
        cy.get('input[data-cy="terms"]')
            .check()
            .should("be.checked");
        cy.get("button").click();
    });
});
