const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer();
// cấu hình views
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => {
   res.render("add");
});

const arrayUser = [];
app.post('/', upload.none(), (req, res) => {
   if (req.body.name && req.body.age) {
       const employee = {
           name: req.body.name,
           age: req.body.age
       }

       arrayUser.push(employee);
       console.log(arrayUser);
       res.render("show", { employees: arrayUser });
   }
});

app.get("/delete", (req, res) => {
    let indexDelete = req.query.id;
    arrayUser.splice(indexDelete,1);
    res.render("show", { employees: arrayUser });

})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});