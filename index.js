const express = require('express');
const router = express.Router();
const app = express();

router.get('/',async(req,res) =>{
    res.send("HELLO WORLD");
});
app.listen(process.env.PORT || 3000);