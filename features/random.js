const {Given, Then}  = require('@badeball/cypress-cucumber-preprocessor')


Given("Navigate to the website", () => {
    cy.Google_url()
})

Then("Type the word cars in the text field", () => {
    cy.InputRandomWord()
})

Then("Click on the regular search button", () => {
    cy.GoogleSearch()
})
