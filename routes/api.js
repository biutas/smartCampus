const express = require('express')
const router = express.Router()
const db = require('./db')

router.post('/getCourses', (req,res,next)=>{    
    db.query('SELECT curso as name, fase as period FROM smartcampus.mrbs_entry where start_time >= ? and end_time <= ? group by curso, fase order by start_time', [req.body.start_time, req.body.end_time] ,function (error, results, fields) {
        if (error) {
            db.end();
            throw error
        };

        res.send(results)
    }); 
})

router.post('/getCourseSchedule', (req,res,next)=>{    
    db.query('SELECT e.name, e.create_by ,r.room_name, e.start_time, e.end_time FROM smartcampus.mrbs_entry as e join smartcampus.mrbs_room as r on e.room_id = r.id where start_time >= ? and end_time <= ? and curso = ? and fase = ? order by curso', [req.body.start_time, req.body.end_time, req.body.course, req.body.period] ,function (error, results, fields) {
        if (error) {
            db.end();
            throw error
        };

        res.send(results)
    }); 
})

module.exports = router