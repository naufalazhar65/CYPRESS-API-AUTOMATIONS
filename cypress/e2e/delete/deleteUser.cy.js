/// <reference types="cypress" />

describe("Delete User API", () => {
    it("should delete a user and return a 204 status code", () => {
      cy.request({
        method: "Delete",
        url: "/public/v2/users/5826504",
        headers: {
          Authorization:
            "Bearer 02a943da4b6b96018eb83cc86f19b89b48a1669fdf88944cb0563d3315a0948d",
        },
      }).then((response) => {
        expect(response.status).to.eq(204);
    
      });
    });
  });
  