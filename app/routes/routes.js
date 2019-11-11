module.exports = (app, db) => {

    app.post("/signup", (req, res) => {
        console.log(req.body);
        const note = { name: req.body.name, email:req.body.email,password:req.body.password,score:"0" };
    
        db.collection('UserData').findOne({email: req.body.email}).then(function(result){
            if(!(result==null)){
                res.status(200).json({msg:"Email Id already present"});
            }
            else
            {
                db.collection('UserData').insertOne(note, (err, result) => {
                    if (err)
                    {
                        console.log(err + " this error has occured");
                    }
                    else
                    {
                         res.status(200).json({msg:"success"});
                    }
                });
             }
       });
    });

    app.get("/", (req, res) => {

        db.collection('QueSet').find({}).toArray(function (err, result) {
            if (err)
                console.log(err + " this error has occured");
            else {
                 res.status(200).send(result);
            }
        });
    });


};
