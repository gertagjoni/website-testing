describe('testing my personal website', () => {
  beforeEach(() => {
    cy.visit('https://gertagjoni.github.io/Gerta-Gjoni/')
  })

  it('has correct contact info', () => {
    cy.get('.contactInfo').contains('+355697448413')
    cy.get('.contactInfo').contains('gertahoxha2403@gmail.com')
    cy.get('.contactInfo').contains(' https://gertagjoni.github.io/Gerta-Gjoni/')
    cy.get('.contactInfo').contains('gerta-gjoni-b92000143/')
    cy.get('.contactInfo').contains('Tirana, Albania')
   
  })
  
  it('has correct Education', () => {
    cy.get('.Education').contains('2022-2024')
    cy.get('.Education').contains('Master Degree in Public Health,')
    cy.get('.Education').contains('University of Medicine')
    cy.get('.Education').contains('2019-2022')
    cy.get('.Education').contains('Bachelor Degree in Public Health,')
    cy.get('.Education').contains('University of Medicine')
})

it('has correct Language', () => {
  cy.get('.Language').contains('Albanian (Native)')
  cy.get('.Language').contains('English (B2)')
})

it('has correct about', () => {
  cy.get('.about').contains('Enthusiastic and hardworking, junior Quality Assurance')
  cy.get('.about').contains('I am passionate about testing software products, possess a keen eye for detail, and thrive on problem-solving.')
  cy.get('.about').contains('Eager to contribute my skills and commitment to a dynamic team.')
})

it('has correct experience', () => {
  cy.get('.year_company').contains('2021-present')
  cy.get('.year_company').contains('Zepter International')
  cy.get('.year_company').contains('2020-2021')
  cy.get('.year_company').contains('Oxys Store')
  cy.get('.text').contains('Showroom Presenter')
  cy.get('.text').contains('SALES ASSISTANT')
})

it('has correct skills', () => {
  cy.get('.skills').contains('Html')
  cy.get('.skills').contains('Css')
  cy.get('.skills').contains('Javascript')
  cy.get('.skills').contains('GIT')
  cy.get('.skills').contains('SQL')
  cy.get('.skills').contains('API testing')
  cy.get('.skills').contains('Postman')
  cy.get('.skills').contains('Cypress')
  cy.get('.skills').contains('CI/CD')
})

it('has correct about interest', () => {
  cy.get('.interest').contains('Photography')
  cy.get('.interest').contains('Singing')
  cy.get('.interest').contains('Gaming')
})

})
