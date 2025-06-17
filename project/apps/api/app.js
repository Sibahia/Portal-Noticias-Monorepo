const express = require('express');
const cors = require('cors');

const db = require('./db.js');

const app = express();
const PORT = 3000;

const noticesRouter = require('./routes/noticesRouter.js');
const loginRouter = require('./routes/loginRouter.js');
const authRouter = require('./routes/authRouter.js');

const CORS_OPTIONS = {
    'origin': '*',
    'methods': ['GET', 'POST', 'DELETE']
}

app.use(express.json());
app.use(cors(CORS_OPTIONS));

app.listen(PORT, () => {
    console.log(`listen on port ${PORT}`)
});

app.use('/api/notices', noticesRouter);
app.use('/auth/login', loginRouter)
app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Server worked',
         status: [ {
            method: req.method,
            datetime: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`, }]
        });
});

/* its */