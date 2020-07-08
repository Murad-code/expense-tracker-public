const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions');

router
    .route('/')
    .get(getTransactions) // Calls the transactions controller file
    .post(addTransaction);

router
    .route('/:id')
    .delete(deleteTransaction);
    

module.exports = router; 