/// <reference types="cypress" />

describe("User API", () => {
  it("should return user details", () => {
    cy.request({
      method: "Get",
      url: "/public/v2/users/5826665",
      headers: {
        Authorization:
          "Bearer 02a943da4b6b96018eb83cc86f19b89b48a1669fdf88944cb0563d3315a0948d",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.headers["content-type"]).to.include("application/json");

      expect(response.body.id).to.eq(5826665);
      expect(response.body.name).to.eq("nana6");
      expect(response.body.email).to.eq("nana6@gmail.com");
      expect(response.body.gender).to.eq("male");
      expect(response.body.status).to.eq("inactive");
    });
  });
});
