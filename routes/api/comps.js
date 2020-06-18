/// Define all API routes for comps collection

const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

// Get Comps
router.get('/', async (req, res) => {
    const comps = await loadCompsCollection();

    // Send the objects
    res.status(200).send(await comps.find({}).toArray());
});

// Add Comp
router.post('/', async (req, res) => {
    const comps = await loadCompsCollection();
    await comps.insertOne({
        name: req.body.name
    });
    
    // Send the created object
    res.status(201).json(req.body).send();
});

// Delete Comp
router.delete('/:id', async (req, res) => {
    const comps = await loadCompsCollection();
    let result = await comps.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    
    // Content deleted
    if(result.deletedCount>0) {
        res.status(200);
        res.json({ success: true });
    }
    // No content deleted
    else {
        res.status(404);
        res.json({ success: false });
    }
});

// Helper method to access the database
async function loadCompsCollection() {
    const client = await mongodb.MongoClient.connect(require('../../config/keys').mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return client.db('CompList').collection('comps');
}

module.exports = router;