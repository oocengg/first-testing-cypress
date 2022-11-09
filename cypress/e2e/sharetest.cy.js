describe('Open 1 Course', () => {
    const email = 'fauzinugraha06@gmail.com';
    const password = '12345678skai';

    it('Login', () => {
        cy.visit('https://dashboard.codepolitan.com/learn')
        cy.get('input[type=email]').type(email)
        cy.get('input[type=password]').type(password)
        cy.get('button[type=submit]').contains('Login').click()

    })

    it('Share Course', () => {
        cy.get('.tour-2 > .nav-link').click()
        cy.get('#pills-my-learn-all > .my-4 > :nth-child(1) > .link > .card > .card-img-top').click()
        cy.get('.col > .card > .card-body > .justify-content-between > :nth-child(2) > .btn').click()
        cy.get('.ButtonShareSocmed_btn_facebook__JwA5s').click()
    })
})