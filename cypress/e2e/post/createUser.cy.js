/// <reference types="cypress" />

// const data = require('../../fixtures/example.json')

describe("Create User API", () => {
  it("should create a new user and return a 201 status code", () => {
    cy.fixture("example.json").then((data) => {
      cy.request({
        method: "Post",
        url: "/public/v2/users",
        headers: {
          Authorization:
            "Bearer 02a943da4b6b96018eb83cc86f19b89b48a1669fdf88944cb0563d3315a0948d",
        },
        body: {
          name: data.name,
          email: data.email,
          gender: data.gender,
          status: data.status,
        },
      }).then((response) => {
        expect(response.status).to.eq(201);

        expect(response.headers["content-type"]).to.include("application/json");

        expect(response.body).to.have.property("id");
        expect(response.body.name).to.have.eq(data.name);
        expect(response.body.email).to.have.eq(data.email);
        expect(response.body.gender).to.have.eq(data.gender);
        expect(response.body.status).to.have.eq(data.status);
      });
    });
  });
});
