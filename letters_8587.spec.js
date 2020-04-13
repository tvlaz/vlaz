//login with principal credentials
//verify landing page
//navigate to 'People Mangement'
//navigate to student record N#
//navigate to household
//navigate to custody tab
//verify custody documentation fields are read-only

describe('Principal Letter Student Access 8587', function() {
   
    before(() => {
    cy.login();
});

beforeEach(() => {
    Cypress.Cookies.preserveOnce('ci-user-azure-token');
    Cypress.Cookies.preserveOnce('ci-user-legacy-token');
});
    
    it('Student List', function() {
        cy.visit('https://newsis-ci.nhatest.com/student/1567945/demographics/information')
        //cy.visit('https://newsis-ci.nhatest.com/student/')
        //cy.get('.cb').contains('78.JCONLEY_@nhatest.com').click
        //cy.get('input [type = "Username"]').type('78.JCONLEY_@nhatest.com') 
        //cy.get('input [type = "Password"]').type('nhaschools2015')
        //cy.get('.btn').contains('Sign In').click()
    });


    //it('NHA all apps', function(){ 
     //   cy.get(':nth-child(1) > .portal-group > .portal-group-box > .portal-group-info > [data-cy=portal-group-name]').click()
 //  });

  // it('NHA People Management', function(){
  //     cy.get(':nth-child(290) > .portal-link > [data-cy=portal-link] > .portal-link-icon').click()
  // });

  // it('Select Student', function(){
  //   cy.get(':nth-child(12) > :nth-child(1) > a > [data-cy=student-name]').click()
  // });

   it('Navigate to Household', function(){
      //cy.get('.btn').contains('[if-resource-accessible="Household'] > a').click()
      cy.get('[if-resource-accessible="Household"] > a').contains('Household').click()
   });
   it('Navigate to Custody', function(){
       cy.get('[if-resource-accessible="StudentGuardianRelationshipHistory:Get"] > a').click()
       //cy.get('[if-resource-accessible="StudentGuardianRelationshipHistory:Get"] > a')
   });
   it('Check Field Read-only'), function(){
        cy.get('#dropdown').should('be.disabled')

        //cy.get('button.mat-button.mat-primary').eq(8).should('be.disabled')
   }
})
