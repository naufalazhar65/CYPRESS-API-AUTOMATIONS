/// <reference types="cypress" />

describe("Update User API", () => {
    it("should update a user and return a 200 status code", () => {
      cy.request({
        method: "Patch",
        url: "/public/v2/users/5826504",
        headers: {
          Authorization:
            "Bearer 02a943da4b6b96018eb83cc86f19b89b48a1669fdf88944cb0563d3315a0948d",
        },
        body: {
            "name": "Naufal1",
            "email": "naufal1@gmail.com",
            "gender": "male",
            "status": "inactive"
        }
      }).then((response) => {
        expect(response.status).to.eq(200); 
  
        expect(response.headers["content-type"]).to.include("application/json");
  
        expect(response.body.id).to.eq(5826504);
        expect(response.body.name).to.eq("Naufal1");
        expect(response.body.email).to.eq("naufal1@gmail.com");
        expect(response.body.gender).to.eq("male");
        expect(response.body.status).to.eq("inactive");
      });
    });
  });
  