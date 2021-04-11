const express = require('express');

const operations = require('./operations');
const ExpressError = require('./errors');

const app = express();
app.use(express.json());

const SUPPORTED_OPERATIONS = ["mean", "median", "mode"];

app.get('/:operation', (req, res, next) => {
    try {
        const operation = req.params.operation;
        const numsQuery = req.query.nums;

        if (SUPPORTED_OPERATIONS.indexOf(operation) === -1) throw new ExpressError("Operation not supported", 400);
        if (!numsQuery) throw new ExpressError("Nums are required", 400);

        const numStr = numsQuery.split(',');
        const nums = numStr.map(num => {
            if (parseInt(num)) {
                return parseInt(num);
            } else {
                throw new ExpressError(`${num} is not a number`, 400);
            }
        });
    
        return res.json({
            response: {
                operation,
                value: operations[operation](nums)
            }
        });
    } catch (err) {
        return next(err);
    }
})

app.use((error, req, res, next) => {
    let status = error.status || 500,
        message = error.message;
    
    return res.status(status).json({
        error: { message, status }
    })
})

app.listen(3000, () => console.log("Listening on port 3000"));  