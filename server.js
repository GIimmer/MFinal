const express = require("express"),
    path = require("path"),
    router = require("./server/routes.js"),
    app = express();

app.use(express.static(path.join(__dirname, "./client/dist/client")));

router(app);

app.all("*", (req,res)=>res.sendFile(path.join(__dirname, "./client/dist/client/index.html")));

app.listen(8000,(errs)=>console.log(errs?errs:"servin'!"));