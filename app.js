var express= require("express"),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
Customer = require("./models/customer"),
Account = require("./models/account"),
passport = require("passport"),
localStrategy = require("passport-local"),
seed = require("./seed"),
sequential = require("sequential-ids"),
seqid = require("./models/seqid"),
Employee = require("./models/employee"),
User = require("./models/user"),
Benificiary = require("./models/benificiary"),
Transactions = require("./models/transactions"),
Checks = require("./models/checks");


var employeeRoutes =require("./routes/employee"),
customerRoutes = require("./routes/customer"),
accountRoutes = require("./routes/account"),
authRoutes = require("./routes/auth"),
benificiaryRoutes = require("./routes/benificiary"),
transactionRoutes = require("./routes/transactions"),
accstatementRoutes = require("./routes/accountstats"),
checkRoutes = require("./routes/check");

function preceedzero(n){
    var s = n+"";
    while (s.length < 4) s = "0" + s;
    return s;
}
function genid(n){
    var s = "2020"+preceedzero(n);
    return s;
}

// seed()
var app = express();


// // REPLICA SET
