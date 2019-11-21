const express = require('express')
const router = express.Router()
const db = require('./db')

router.post('/getRooms', (req,res,next)=>{    
    db.query('SELECT * from mrbs_room ', function (error, results, fields) {
        if (error) {
            connection.end();
            throw error
        };

        res.send(results)
    }); 
})

module.exports = router