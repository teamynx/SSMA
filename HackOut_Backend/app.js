import express from "express";
import {SpaceCraftSchema} from "./models/SpaceCraftSchema";

const app = express();

app.use(express.json());

app.get('/api/SpaceCraftSchema', async (req, res) => {
    try {
        const { id, name, failureCause, precautions, date, status } = req.query;

        const query = {};
        if (id) query.id = id;
        if (name) query.name = { $regex: name, $options: 'i' };
        if (failureCause) query.failureCause = { $regex: failureCause, $options: 'i' };
        if (precautions) query.precautions = { $regex: precautions, $options: 'i' };
        if (date) query.date = { $regex: date, $options: 'i' };
        if (status) query.status = status.toUpperCase();

        // Ensure SpaceCraftSchema refers to a Mongoose model
        const results = await SpaceCraftSchema.find(query);
        res.json({ data: results });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
