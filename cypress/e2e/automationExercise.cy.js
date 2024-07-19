/// <reference types="cypress" />

const { it } = require("mocha")

/// Referência dos casos de teste -> https://automationexercise.com/test_cases
describe('Case Test 1', () => {
    before(() => {
        cy.visit('https://automationexercise.com/')
    })
    
    it('Register User', () => {
        cy.get('body').should('be.visible').contains('Home')
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
        cy.get('body').should('be.visible').contains('Home')
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
        cy.get('body').should('be.visible').contains('Home')
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
        cy.get('body').should('be.visible').contains('Home')      
    })
})

describe('Case Test 7', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Verify Test Cases Page', () => {
        cy.get('body').should('be.visible').contains('Home')
        cy.get('.active > :nth-child(1) > .test_cases_list > .btn').click()
        cy.get('b').should('be.visible').should('have.text', 'Test Cases')        
    })
})

describe('Case Test 8', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Verify All Products and product detail page', () => {
        cy.get('body').should('be.visible').contains('Home')
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('body').contains('All Products').should('be.visible')
        cy.get('.features_items').should('be.visible').contains('Add to cart')
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('body').contains('Write Your Review').should('be.visible')
        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information > :nth-child(3)').should('be.visible')
        cy.get(':nth-child(5) > span').should('be.visible')
        cy.get('.product-information > :nth-child(6)').should('be.visible')
        cy.get('.product-information > :nth-child(7)').should('be.visible')
        cy.get('.product-information > :nth-child(8)').should('be.visible')
    })
})

describe('Case Test 9', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Search Product', () => {
        cy.get('body').should('be.visible').contains('Home')
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('body').contains('All Products').should('be.visible')
        cy.get('#search_product').type('Top')
        cy.get('#submit_search').click()
        cy.get('body').contains('Searched Products').should('be.visible')
        cy.get('.features_items').contains('Top').should('be.visible')       
    })
})

describe('Case Test 10', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Verify Subscription in home page', () => {
        cy.get('body').should('be.visible').contains('Home')
        cy.scrollTo('bottom')
        cy.get('footer').contains('Subscription').should('be.visible')
        cy.get('#susbscribe_email').type('emanuel@email.com')
        cy.get('#subscribe').click()
        cy.get('footer').contains('You have been successfully subscribed!').should('be.visible')
    })
})

describe('Case Test 11', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Verify Subscription in Cart page', () => {
        cy.get('body').should('be.visible').contains('Home')
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.scrollTo('bottom')
        cy.get('footer').contains('Subscription').should('be.visible')
        cy.get('#susbscribe_email').type('emanuel@email.com')
        cy.get('#subscribe').click()
        cy.get('footer').contains('You have been successfully subscribed!').should('be.visible')        
    })
})

describe('Case Test 12', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Add Products in Cart', () => {
        cy.get('body').should('be.visible').contains('Home')
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('.cart_product').should('be.visible')
        cy.get('.cart_price').should('be.visible')
        cy.get('.cart_quantity').should('be.visible')
        cy.get('.cart_total').should('be.visible')    
    })
})

describe('Case Test 13', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Verify Product quantity in Cart', () => {
        cy.get('body').should('be.visible').contains('Home')
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('.choose').contains('View Product').click()
        cy.get('.product-information').should('be.visible')
        cy.get('#quantity').clear().type(4)
        cy.get(':nth-child(5) > .btn').click()
        cy.get('body').contains('View Cart').click()
        cy.get('.cart_quantity').contains(4)        
    })
})

describe('Case Test 14', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Place Order: Register while Checkout', () => {
        cy.get('body').should('be.visible').contains('Home')
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        addProducts()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.active').should('be.visible').contains('Shopping Cart')
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.modal-body > :nth-child(2) > a > u').click()
        cy.get('[data-qa="signup-name"]').type('Emanuel')
        cy.get('[data-qa="signup-email"]').type('emanuel7@email.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.get('[data-qa="password"]').type(12345678)
        createAddress('Emanuel', 'Franco', 'The Marathon Clothing Store', '3420 W Slauson Ave F', '3420 W Slauson Ave F', 'United States', 'California', 'Los Angeles', 90008, 13238154959)
        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="account-created"]').contains('Account Created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').contains('Logged in as Emanuel')
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click()
        verifyAddressDetails()
        cy.get('tbody tr').should('have.length', 6)
        cy.get('.form-control').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type('Emanuel Franco')
        cy.get('[data-qa="card-number"]').type(2222333344445555)
        cy.get('[data-qa="cvc"]').type(123)
        cy.get('[data-qa="expiry-month"]').type('07')
        cy.get('[data-qa="expiry-year"]').type('2030')
        cy.get('[data-qa="pay-button"]').click()
        cy.get('body').contains('Your order has been confirmed!').should('be.visible')
        cy.get(':nth-child(5) > a').click()
        cy.get('[data-qa="continue-button"]').click()
    })
})

describe('Case Test 15', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Place Order: Register before Checkout', () => {
        cy.get('body').should('be.visible').contains('Home')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        createAccount('Emanuel', 'emanuel7@email.com', 12345678, 'Emanuel', 'Franco', 'The Marathon Clothing Store', '3420 W Slauson Ave F', '3420 W Slauson Ave F', 'United States', 'California', 'Los Angeles', 90008, 13238154959)
        cy.get('[data-qa="account-created"]').contains('Account Created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').contains('Logged in as Emanuel')
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        addProducts()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.active').should('be.visible').contains('Shopping Cart')
        cy.get('.col-sm-6 > .btn').click()
        verifyAddressDetails()
        cy.get('tbody tr').should('have.length', 6)
        cy.get('.form-control').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type('Emanuel Franco')
        cy.get('[data-qa="card-number"]').type(2222333344445555)
        cy.get('[data-qa="cvc"]').type(123)
        cy.get('[data-qa="expiry-month"]').type('07')
        cy.get('[data-qa="expiry-year"]').type('2030')
        cy.get('[data-qa="pay-button"]').click()
        cy.get('body').contains('Your order has been confirmed!').should('be.visible')
        cy.get(':nth-child(5) > a').click()
        cy.get('[data-qa="continue-button"]').click()
    })
})

describe('Case Test 16', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Place Order: Login before Checkout', () => {
        cy.get('body').should('be.visible').contains('Home')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="login-email"]').type('emanuel@email.com')
        cy.get('[data-qa="login-password"]').type(12345678)
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible').contains('Logged in as Emanuel')
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        addProducts()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.active').should('be.visible').contains('Shopping Cart')
        cy.get('.col-sm-6 > .btn').click()
        verifyAddressDetails()
        cy.get('tbody tr').should('have.length', 6)
        cy.get('.form-control').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type('Emanuel Franco')
        cy.get('[data-qa="card-number"]').type(2222333344445555)
        cy.get('[data-qa="cvc"]').type(123)
        cy.get('[data-qa="expiry-month"]').type('07')
        cy.get('[data-qa="expiry-year"]').type('2030')
        cy.get('[data-qa="pay-button"]').click()
        cy.get('body').contains('Your order has been confirmed!').should('be.visible')
        cy.get(':nth-child(5) > a').click()
        cy.get('[data-qa="continue-button"]').click()
    })
})

describe('Case Test 17', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Remove Products From Cart', () => {
        cy.get('body').should('be.visible').contains('Home')
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        addProducts()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.active').should('be.visible').contains('Shopping Cart')
        cy.get('#product-1 > .cart_delete > .cart_quantity_delete').click()
        cy.get('#cart_info').should('not.have.text', 'Blue Top')        
    })
})

describe('Case Test 18', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('View Category Products', () => {
        cy.get('.category-products').should('be.visible')
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa').click()
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
        cy.get('.features_items').should('be.visible').contains('Women - Dress Products')
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge > .fa').click()
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click()
        cy.get('.features_items').should('be.visible').contains('Men - Tshirts Products')
    })
})

describe('Case Test 19', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('View & Cart Brand Products', () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('.brands_products').should('be.visible').contains('Brands')
        cy.get('.brands-name > .nav > :nth-child(1) > a').click()
        cy.get('.features_items').should('be.visible').contains('Polo Products')
        cy.get('.brands-name > .nav > :nth-child(3) > a').click()
        cy.get('.features_items').should('be.visible').contains('Madame Products')
    })
})

describe('Case Test 20', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Search Products and Verify Cart After Login', () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('.features_items').should('be.visible').contains('All Products')
        cy.get('#search_product').type('Tshirt')
        cy.get('#submit_search').click()
        cy.get('.features_items').should('be.visible').contains('Searched Products')
        cy.get('.single-products').should('be.visible').contains('Tshirt')
        addProducts()
        cy.get(':nth-child(8) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('tbody tr').should('have.length', 6)
        cy.get(':nth-child(4) > a').click()
        cy.get('[data-qa="login-email"]').type('emanuelteste@email.com')
        cy.get('[data-qa="login-password"]').type(12345678)
        cy.get('[data-qa="login-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('tbody tr').should('have.length', 6)
    })
})

describe('Case Test 21', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Add review on product', () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('.features_items').should('be.visible').contains('All Products')
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('.col-sm-9').should('be.visible').contains('Write Your Review')
        cy.get('#name').type('Emanuel')
        cy.get('#email').type('teste@email.com')
        cy.get('#review').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
        cy.get('#button-review').click()
        cy.get('.col-md-12 > .alert-success').should('be.visible').contains('Thank you for your review')        
    })
})

describe('Case Test 22', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Add to cart from Recommended items', () => {
        cy.scrollTo(0, 7500)
        cy.get('.recommended_items').should('be.visible').contains('recommended items')
        cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('tbody tr').should('have.length', 1)
    })
})

describe('Case Test 23', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Verify address details in checkout page', () => {
        cy.get('body').should('be.visible').contains('Home')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        createAccount('Emanuel', 'emanuel7@email.com', 12345678, 'Emanuel', 'Franco', 'The Marathon Clothing Store', '3420 W Slauson Ave F', '3420 W Slauson Ave F', 'United States', 'California', 'Los Angeles', 90008, 13238154959)
        cy.get('[data-qa="account-created"]').contains('Account Created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible').contains('Logged in as Emanuel')
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        addProducts()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('#cart_info').should('be.visible')
        cy.get('.col-sm-6 > .btn').click()
        cy.get('#address_delivery').invoke('text').then(enderecoPagina => {
            let enderecoFormatado = enderecoPagina.replace(/\s+/g, ' ').trim()

            let enderecoRegistrado = 'Your delivery address . Emanuel Franco The Marathon Clothing Store 3420 W Slauson Ave F 3420 W Slauson Ave F Los Angeles California 90008 United States 13238154959'

            enderecoRegistrado = enderecoRegistrado.split(' ').join(' ');
            enderecoFormatado = enderecoFormatado.split(' ').join(' ');

            expect(enderecoFormatado).to.equal(enderecoRegistrado)
        })

        cy.get('#address_invoice').invoke('text').then(enderecoPagina => {
            let enderecoFormatado = enderecoPagina.replace(/\s+/g, ' ').trim()

            let enderecoRegistrado = 'Your billing address . Emanuel Franco The Marathon Clothing Store 3420 W Slauson Ave F 3420 W Slauson Ave F Los Angeles California 90008 United States 13238154959'

            enderecoRegistrado = enderecoRegistrado.split(' ').join(' ');
            enderecoFormatado = enderecoFormatado.split(' ').join(' ');

            expect(enderecoFormatado).to.equal(enderecoRegistrado)
        })
        
        cy.get(':nth-child(5) > a').click()
        cy.get('[data-qa="account-deleted"]').should('be.visible').contains('Account Deleted!')
        cy.get('[data-qa="continue-button"]').click()
    })
})

describe('Case Test 24', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Download Invoice after purchase order', () => {
        cy.get('body').should('be.visible').contains('Home')
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        addProducts()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('#cart_info').should('be.visible')
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.modal-body > :nth-child(2) > a > u').click()
        createAccount('Emanuel', 'emanuel7@email.com', 12345678, 'Emanuel', 'Franco', 'The Marathon Clothing Store', '3420 W Slauson Ave F', '3420 W Slauson Ave F', 'United States', 'California', 'Los Angeles', 90008, 13238154959)
        cy.get('[data-qa="account-created"]').should('be.visible').contains('Account Created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible').contains('Logged in as Emanuel')
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click()
        verifyAddressDetails()
        cy.get('tbody tr').should('have.length', 6)
        cy.get('.form-control').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type('Emanuel Franco')
        cy.get('[data-qa="card-number"]').type(2222333344445555)
        cy.get('[data-qa="cvc"]').type(123)
        cy.get('[data-qa="expiry-month"]').type('07')
        cy.get('[data-qa="expiry-year"]').type('2030')
        cy.get('[data-qa="pay-button"]').click()
        cy.get('body').contains('Your order has been confirmed!').should('be.visible')
        cy.get('.col-sm-9 > .btn-default').should('be.visible')
        cy.downloadFile('https://automationexercise.com/download_invoice/500', 'cypress/downloads/', 'invoice.txt')
        cy.readFile('cypress/downloads/invoice.txt').should('contain', 'Hi Emanuel Franco, Your total purchase amount is 500. Thank you')
        cy.log('Invoice has been downloaded successfully!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.get('[data-qa="account-deleted"]').should('be.visible').contains('Account Deleted!')
        cy.get('[data-qa="continue-button"]').click()        
    })
})

describe('Case Test 25', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Verify Scroll Up using "Arrow" button and Scroll Down functionality', () => {
        cy.get('body').should('be.visible').contains('Home')
        cy.scrollTo(0, 8450)
        cy.get('#footer').contains('Subscription')
        cy.get('#scrollUp').click()
        cy.get('.col-sm-12').contains('Full-Fledged practice website for Automation Engineers').should('be.visible')       
    })
})

describe('Case Test 26', () => {
    before(() => {
        cy.visit('http://automationexercise.com')
    })

    it('Verify Scroll Up without "Arrow" button and Scroll Down functionality', () => {
        cy.get('body').should('be.visible').contains('Home')
        cy.scrollTo(0, 8450)
        cy.get('#footer').contains('Subscription')
        cy.wait(1000)
        cy.scrollTo('top')
        cy.get('.col-sm-12').contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
    })
})

function createAccount(name, email, password, firstName, lastName, cpy, add1, add2, country, s, city, zipcode, mblNumber) {
    cy.get('[data-qa="signup-name"]').type(name)
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()
    cy.get('[data-qa="password"]').type(password)
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
    cy.get('[data-qa="create-account"]').click()
}

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

function verifyLoginVisible() {
    cy.get('body').should('be.visible').contains('Home')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form').should('be.visible')
}

function verifyAddressDetails() {
    cy.get('#address_delivery').contains('Emanuel Franco')
    cy.get('#address_delivery').contains('The Marathon Clothing Store')
    cy.get('#address_delivery').contains('3420 W Slauson Ave F')
    cy.get('#address_delivery > :nth-child(5)').contains('3420 W Slauson Ave F')
    cy.get('#address_delivery').contains('Los Angeles California 90008')
    cy.get('#address_delivery').contains('United States')
    cy.get('#address_delivery').contains('13238154959')

    cy.get('#address_invoice').contains('Emanuel Franco')
    cy.get('#address_invoice').contains('The Marathon Clothing Store')
    cy.get('#address_invoice').contains('3420 W Slauson Ave F')
    cy.get('#address_invoice > :nth-child(5)').contains('3420 W Slauson Ave F')
    cy.get('#address_invoice').contains('Los Angeles California 90008')
    cy.get('#address_invoice').contains('United States')
    cy.get('#address_invoice').contains('13238154959')    
}

function addProducts() {
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
}