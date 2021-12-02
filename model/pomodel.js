const mongoose = require("mongoose");
const poSchema = mongoose.Schema({
  Client_Name: {
    type: String,
    
  },
  Project_Name: {
    type: String,
    
  },
  Client_Sponser: {
    type: [{ type: String }],
    
  },
  Client_Finance_Controller: {
    type: [{ type: String }],
    
  },
  Targetted_Resources: {
    type: [{ type: String }],
  },
  Status: {
    type: String,
    enum: ["Rejected", "Pending", "Accepted", "Closed", "Drafted"],
  },
  Type: {
    type: String,
    enum: ["PO", "SOW"],
  },
  PO_Number: {
    type: String,
  },
  PO_Amount: {
    type: Number,
  },
  Currency: {
    type: String,
  },
  Document_Name: {
    type: String,
  },
  Document_Type: {
    type: String,
  },
  Remarks: {
    type: String,
  },
});

const poModel = mongoose.model(
  "PO",
  poSchema
);

module.exports = poModel;
