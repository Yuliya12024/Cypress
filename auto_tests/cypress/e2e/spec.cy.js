
const STANDARD_USER = 'standard_user'
const LOCKED_OUT_USER = 'locked_out_user'
const PROBLEM_USER = 'problem_user'
const USER_PASSWORD = 'secret_sauce'



describe('Verify standard user', () => {
 
  it('Standart user login' , () => {
    cy
    .visit('https://www.saucedemo.com/')
    
    .login(STANDARD_USER, USER_PASSWORD)
    
    .get('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click()

    .get('[id="shopping_cart_container"]')
    .click()
    .get('[class="inventory_item_price"]').should('have.text','$29.99')
    
    .get('[id="react-burger-menu-btn"]')
    .click()
    
    .get('[id="logout_sidebar_link"]')
    .click()
    
    .get('.login_logo').should('have.text', 'Swag Labs')

    .login(PROBLEM_USER, USER_PASSWORD)
    .get('[id="react-burger-menu-btn"]')
    .click()
    
    .get('[id="logout_sidebar_link"]')
    .click()

    .login(LOCKED_OUT_USER, USER_PASSWORD)
    .get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  })
})


// describe('Verify standard user 2', () => {
//   it('Standart user login 2' , () => {
//     cy
//     .visit('https://www.saucedemo.com')
//     .get('.login_logo').should('have.text', 'Swag Labs')
//     .login(STANDARD_USER, USER_PASSWORD)
//   })
// })


    















 