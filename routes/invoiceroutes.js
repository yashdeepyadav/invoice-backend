const express = require('express');
const { all_invoice, new_invoice } = require('../controller/invoicecontroller');

const {allpo , newpo} = require('../controller/pocontroller')
const Invoice = require('../model/invoicemodel')

const router = express.Router();


router.get("/invoice",all_invoice)
router.post("/invoice",new_invoice)

router.get("/po",allpo)
router.post("/po",newpo)



module.exports = router;