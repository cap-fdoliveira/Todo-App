const express = require('express');
const app = express();
app.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');

app.use('/task', TaskRoutes);

app.listen(3333, () => {
    console.log('Api online');
});