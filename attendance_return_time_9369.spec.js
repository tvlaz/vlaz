//load attendanceV2 application
//launch early departure interface
//select school
//select date
//select student
//configure time out / time in (hour/minute/AM or PM)
//configure excused/unexcused
//cofigure excuse reason
//add student
//verify custody documentation fields are read-only


describe('Return Time Test 9369', function() {
   
    before(() => {
    cy.login();
});

beforeEach(() => {
    Cypress.Cookies.preserveOnce('ci-user-azure-token');
    Cypress.Cookies.preserveOnce('ci-user-legacy-token');
});

it('Load Attendance Application', function(){
   cy.visit('https://mynha-ci.nhatest.com/attendance/manager');
   cy.server();
   cy.route('/attendance/v1/api/AttendanceDimension?academicYearId=2019&schoolId=437').as('PembrokeScheduling');
   cy.wait(4000);

});

it('Select School', function() {
    cy.get('#mat-select-3 > .mat-select-trigger > .mat-select-value').click();
    cy.get('#mat-option-169 > .mat-option-text').click();
    cy.wait(4000);
    });
it('Select Main View Date', function(){
    cy.get('[data-cy=date-picker]').click();
    cy.get('[aria-label="April 1, 2020"]').click();
    cy.wait(4000);
});
it('Launch Early Departure', function() {
    cy.get('.grid-actions > :nth-child(3) > .mat-button-wrapper').click({ force: true });
    cy.get('[data-cy=student-search]').click();
    cy.get('#mat-option-399 > .mat-option-text > .search-student-row > [data-cy=student-info]').click();
    cy.get('[data-cy=time-input]').type('09:00', { force: true });
    cy.get('#mat-input-2').type('10:00', { force: true });
    cy.get('[data-cy=adt-selector]').click();
    cy.get('#mat-option-390 > .mat-option-text').click();
    cy.get('[data-cy=reason-selector]').click();
    cy.get('#mat-option-409 > .mat-option-text').click();
    cy.get('[title="Ctrl+Enter"]').click();
    cy.get('.container-footer > .mat-flat-button > .mat-button-wrapper').click();
    cy.wait(2000);
    cy.get('.container-footer > .mat-flat-button > .mat-button-wrapper').contains('Save & Close').click({force:true});

});
})
