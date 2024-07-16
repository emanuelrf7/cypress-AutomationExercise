/// <reference types="cypress" />

const { it } = require("mocha")

/// Referência dos casos de teste -> https://automationexercise.com/test_cases
describe('Case Test 1', () => {
    before(() => {
        cy.visit('https://automationexercise.com/')
    })
    
    it('Register User', () => {
        cy.get('body').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.signup-form').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="signup-name"]').type('Emanuel')
        cy.get('[data-qa="signup-email"]').type('emanuel@email.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.get(':nth-child(1) > b').should('be.visible')
        cy.get('#id_gender1').check()
        cy.get('[data-qa="password"]').type(12345678)
        cy.get('[data-qa="days"]').select(23)
        cy.get('[data-qa="months"]').select(6)
        cy.get('[data-qa="years"]').select("2002")
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        createAddress('Emanuel', 'Franco', 'The Marathon Clothing Store', '3420 W Slauson Ave F', '3420 W Slauson Ave F', 'United States', 'California', 'Los Angeles', 90008, 13238154959)
        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')
        // cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        // cy.get('b').should('be.visible')
        // cy.get('[data-qa="continue-button"]').click()
    })
})

describe('Case Test 2', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Login User with correct email and password', () => {
        verifyLoginVisible()
        cy.get('[data-qa="login-email"]').type('emanuel@email.com')
        cy.get('[data-qa="login-password"]').type(12345678)
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('have.text', ' Logged in as Emanuel')
        // deleteUser()        
    })
})

describe('Case Test 3', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Login User with incorrect email and password', () => {
        verifyLoginVisible()
        cy.get('[data-qa="login-email"]').type('emanuel12@email.com')
        cy.get('[data-qa="login-password"]').type(87654321)
        cy.get('[data-qa="login-button"]').click()
        cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!')        
    })
})

describe('Case Test 4', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Logout User', () => {
        verifyLoginVisible()
        cy.get('[data-qa="login-email"]').type('emanuel@email.com')
        cy.get('[data-qa="login-password"]').type(12345678)
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('have.text', ' Logged in as Emanuel')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form').should('be.visible')
    })
})

describe('Case Test 5', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Register User with existing email', () => {
        cy.get('body').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.signup-form').should('be.visible')
        cy.get('[data-qa="signup-name"]').type('Emanuel')
        cy.get('[data-qa="signup-email"]').type('emanuel@email.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.get('.signup-form > form > p').should('be.visible').should('have.text', 'Email Address already exist!')        
    })
})

describe('Case Test 6', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Contact Us Form', () => {
        cy.get('body').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click()
        cy.get('div.contact-form > .title').should('be.visible').should('have.text', 'Get In Touch')
        cy.get('[data-qa="name"]').type('Emanuel')
        cy.get('[data-qa="email"]').type('emanuel@email.com')
        cy.get('[data-qa="subject"]').type('Teste')
        cy.get('[data-qa="message"]').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
        cy.get('input[type="file"]').selectFile('logo flamengo.png')
        cy.get('[data-qa="submit-button"]').click()
        cy.get('.status').should('be.visible').should('have.text', 'Success! Your details have been submitted successfully.')
        cy.get('#form-section > .btn').click()
        cy.get('body').should('be.visible')      
    })
})

function createAddress(firstName, lastName, cpy, add1, add2, country, s, city, zipcode, mblNumber) {
    cy.get('[data-qa="first_name"]').type(firstName)
    cy.get('[data-qa="last_name"]').type(lastName)
    cy.get('[data-qa="company"]').type(cpy)
    cy.get('[data-qa="address"]').type(add1)
    cy.get('[data-qa="address2"]').type(add2)
    cy.get('[data-qa="country"]').select(country)
    cy.get('[data-qa="state"]').type(s)
    cy.get('[data-qa="city"]').type(city)
    cy.get('[data-qa="zipcode"]').type(zipcode)
    cy.get('[data-qa="mobile_number"]').type(mblNumber)

}

function deleteUser() {
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    cy.get('b').should('be.visible')
}

function verifyLoginVisible() {
    cy.get('body').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form').should('be.visible')
}