let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();
chai.use(chaiHttp);

let Invoice = require("../model/invoicemodel");

describe("Invoice Unit Testing with Mocha..!!", () => {
  describe("/Create new Invoice", () => {
    it("it should throw validation error", (done) => {
      let data = new Invoice({
        "client_sponsor": "ab",
        "client_finance_controller": "cd",
        "invoice_raised": "asr232323py",
        "invoice_amount_received": 343434343
      });
      chai
        .request(server)
        .post("/invoice")
        .send(data)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a("object");
          done();
        });
    });
    it("it should create new Invoice", (done) => {
      let details = {
        "userid": "61a5ffbc4a2f87599dd027db",
        "client_sponsor": "cd",
        "client_finance_controller": "cd",
        "invoice_raised": 232323,
        "invoice_amount_received": 343434343
      };
      const invoicedetails = new Invoice(details)
      invoicedetails.save((err, data) => {
        chai
          .request(server)
          .post("/invoice")
          .send(details)
          .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a("object");
            res.body.invoice.should.have.property("userid");
            res.body.invoice.should.have.property("client_sponsor");
            res.body.invoice.should.have.property("client_finance_controller");
            res.body.invoice.should.have.property("invoice_raised");
            res.body.invoice.should.have.property("invoice_amount_received");
            done();
          });
      });
    });
  });

  describe("/GET Invoice", () => {
    it("it should GET all the Invoice", (done) => {
      chai
        .request(server)
        .get("/invoice")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.invoices.should.be.a("array");
          done();
        });
    });
  });

  // describe("/GET/:id PO/SOW", () => {
  //   it("it should GET a PO/SOW by given id", (done) => {
  //     let details = {
  //       Client_Name: "Valuebound Solutions",
  //       Project_Name: "ERP System",
  //       Client_Sponser: ["ABD", "DEF"],
  //       Client_Finance_Controller: ["VMN", "QWE"],
  //       Targetted_Resources: ["WSJ", "GHJ"],
  //       Status: "Drafted",
  //       Type: "PO",
  //       PO_Number: "ERP34",
  //       PO_Amount: 3434,
  //       Currency: "USD",
  //       Document_Name: "VB_ERP",
  //       Document_Type: "pdf",
  //       Remarks: "Created New PO"
  //     };
  //     const poDetails = new poSow(details)
  //     poDetails.save((err, data) => {
  //       chai
  //         .request(server)
  //         .get("/poSow/" + poDetails.id)
  //         .send(details)
  //         .end((err, res) => {
  //           res.should.have.status(200);
  //           res.body.should.be.a("object");
  //           res.body.data.should.have.property("Client_Name");
  //           res.body.data.should.have.property("Project_Name");
  //           res.body.data.should.have.property("Client_Sponser");
  //           res.body.data.should.have.property("Client_Finance_Controller");
  //           res.body.data.should.have.property("Targetted_Resources");
  //           res.body.data.should.have.property("Status");
  //           res.body.data.should.have.property("Type");
  //           res.body.data.should.have.property("PO_Number");
  //           res.body.data.should.have.property("PO_Amount");
  //           res.body.data.should.have.property("Currency");
  //           res.body.data.should.have.property("Document_Name");
  //           res.body.data.should.have.property("Document_Type");
  //           res.body.data.should.have.property("Remarks");
  //           res.body.data.should.have.property("_id").eql(poDetails.id);
  //           done();
  //         });
  //     });
  //   });
  // });
})
