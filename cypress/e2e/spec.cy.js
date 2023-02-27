describe('hostname test via cy.request', () => {

  it('localhost', () => {
    cy.request('http://localhost:3000');
  });

  it('loopback IPv4', () => {
    cy.request('http://127.0.0.1:3000');
  });

  it('loopback IPv6', () => {
    cy.request('http://[::1]:3000');
  });
});

describe('hostname test via cy.visit', () => {

  it('localhost', () => {
    cy.visit('http://localhost:3000');
  });

  it('loopback IPv4', () => {
    cy.visit('http://127.0.0.1:3000');
  });

  it('loopback IPv6', () => {
    cy.visit('http://[::1]:3000');
  });
});
