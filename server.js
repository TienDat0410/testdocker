const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("common"));


app.get('/' , (req , res)=>{

   res.send('<h2>Docker helloss! </h2>)');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});