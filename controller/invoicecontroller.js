const { invoiceschema } = require('../schema/invoiceschema')
const Invoice = require('../model/invoicemodel')

const new_invoice = async (req, res) => {
  try {

    // console.log("checking valiation")
    // const { error } = invoiceschema.validate(req.body);

    
    // if (error) {
    //   res.status(422).send(error);
    // }

    const invoice = await Invoice.create(req.body);
    res.status(201).json({
      status: true,
      invoice,
    })
  } catch (error) {
    res.status(422).send(error);
  }
};

const all_invoice = async (req, res) => {
  let invoices;
  try {
    invoices = await Invoice.find({}).populate('userid','Client_Name Project_Name Targetted_Resources PO_Number PO_Amount');
    res.status(200).json({
      status: true,
      invoices
    })
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = { all_invoice, new_invoice };

// const update_invoice = async (req, res) => {
//   let invoice = await Invoice.findById(req.params.id);

//   if (!invoice) {
//     return res.status(500).json({
//       success: false,
//       message: "Invoice not found"
//     })
//   }

//   invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//     useFindandModify: false
//   });

//   res.status(200).json({
//     status: true,
//     invoice
//   })
// }

// const delete_invoice = async (req, res) => {
//   const invoice = await Invoice.findById(req.params.id);

//   if (!invoice) {
//     return res.status(500).json({
//       status: false,
//       message: "Invoice not found"
//     })
//   }

//   await invoice.remove();

//   res.status(200).json({
//     success: true,
//     message: "Invoice deleted"
//   })

// }

