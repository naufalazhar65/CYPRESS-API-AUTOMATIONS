/// <reference types="cypress" />


describe("Create Post API", () => {
    it("should create a new post and return a 201 status code", () => {
    cy.request({
      method: "Post",
      url: "/public/v2/users/5826665/posts",
      headers: {
        Authorization:
          "Bearer 02a943da4b6b96018eb83cc86f19b89b48a1669fdf88944cb0563d3315a0948d",
      },
      body: {
        title: "HALLO",
        body: "BABIsbcjsdbsdcs",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);

      expect(response.headers["content-type"]).to.include("application/json");

      expect(response.body).to.have.property("title");
      expect(response.body).to.have.property("body");

    });
  });
});
