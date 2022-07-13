describe('Homepage', () => {

    it('should load successfully', () => {
        cy.visit('http://localhost:4200');
    });

    it('should contain right spelled texts', () => {
        cy.contains('Users');
        cy.contains('Admin');
        cy.contains('Login');
        cy.get('mat-select').click();
        cy.contains('Register');
    });

});