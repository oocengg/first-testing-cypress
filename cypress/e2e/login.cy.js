describe('Test Login To Codepolitan', () => {
    const email = 'fauzinugraha06@gmail.com';
    const password = '12345678skai';
    const timeWaiting = 10000;
    it('Login', () => {
        cy.visit('https://dashboard.codepolitan.com/login/');
        cy.get('input[type=email]').type(email);
        cy.get('input[type=password]').type(password);
        cy.get('button[type=submit]').contains('Login').click();
    })
})