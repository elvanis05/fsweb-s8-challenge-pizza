

describe("Pizza Formu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173"); 
    cy.contains("ACIKTIM").click(); 
  });

  it("metin girilebiliyor", () => {
   cy.get('[data-cy="siparis-notu"]').type('Bol bol ketçap lütfen!');
    
  });



    it("Birden fazla malzeme seçilebiliyor", () => {
    cy.get('input[type="checkbox"][value="Ançuez"]').check().should("be.checked");
    cy.get('input[type="checkbox"][value="Sucuk"]').check().should("be.checked");
    cy.get('input[type="checkbox"][value="Ananas"]').check().should("be.checked");
  });


    it("Form gönderildiğinde sipariş onayı görüntüleniyor", () => {
    cy.get('[data-cy="siparis-notu"]').type('Bol bol ketçap lütfen!');
    cy.get('[data-cy="hamur-test"]').select("Orta");
    cy.get('input[type="radio"][value="Orta"]').check(); 
    cy.get('input[type="checkbox"][value="Ançuez"]').check();
     cy.get('input[type="checkbox"][value="Sucuk"]').check();
      cy.get('input[type="checkbox"][value="Domates"]').check();
       cy.get('input[type="checkbox"][value="Mısır"]').check();
    cy.get('button[type="submit"]').click();

    
    cy.contains("SİPARİŞ ALINDI").should("be.visible");
    cy.contains("Ançuez").should("be.visible");
    cy.contains("Orta").should("be.visible");
  });
});

