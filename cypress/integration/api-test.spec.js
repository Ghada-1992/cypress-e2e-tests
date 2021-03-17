/**
 * a few simple API tests using cypress' built-in api functionality
 */
describe('API Tests', () => {
  const baseUrl = 'https://cat-fact.herokuapp.com'

  it('should return cat facts', () => {
    let catFacts = [
      "Cats make about 100 different sounds. Dogs make only about 10.",
      "Domestic cats spend about 70 percent of the day sleeping and 15 percent of the day grooming.",
      "I don't know anything about cats.",
      "The technical term for a cat’s hairball is a bezoar.",
      "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs."
    ]; 
    let facts = [];

    cy.request(`${baseUrl}/facts/?animal_type=cat`).as('catFacts')
    cy.get('@catFacts').should(response => {
      expect(response.body).to.not.be.null;
      expect(response.status).to.eq(200);
      expect(response.body.length).to.eq(5);
      for (let i = 0; i < response.body.length; i++){
        facts[i] = response.body[i]["text"];
     }
      for (let f in facts){
        expect(facts[f]).to.eq(catFacts[f]);
      }   
    })
  })

  it('should get cat by id', () => {
    const factId = '58923f2fc3878c0011784c79'

    cy.request(`${baseUrl}/facts/${factId}`).as('catFactId')
    cy.get('@catFactId').should(response => {
      expect(response.body).to.not.be.null;
      expect(response.status).to.eq(200);
      expect(response.body._id).to.eq(factId);
      expect(response.body.text).to.eq('I don\'t know anything about cats.');
      expect(response.body.status.verified).to.eq(true);
      expect(response.body.status.sentCount).to.eq(1);
    })
  })
})