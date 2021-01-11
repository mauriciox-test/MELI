const express = require('express');
const router = express.Router();

/**
 * POST create /author
 */
router.post("/", async (req, res, next) => {//se declaran variables: req para recibir, res para responder, next para el siguiente 
    const push = await pushController.createPush(req.body.name)
    res.status(201).json({
        message: "Created successfully",
        push
    })
});

module.exports = router;