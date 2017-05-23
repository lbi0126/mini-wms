var pgp = require("pg-promise")(/*options*/);
var cn = {
    host: 'localhost',
    port: 5432,
    database: 'mwms',
    user: 'mwms_admin',
    password: 'Rkakrnl95'
};
var db = pgp(cn); // 같은 세팅 방법: pgp("postgres://postres:Rkakrnl95@localhost:5432/mwms");

/*var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });*/

/*Simple SELECT*/
db.any("SELECT * FROM items WHERE complete=$1", [true])
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log("ERROR:", error.message || error); // print error;
    });

db.one({
    name: "find-user",
    text: "select * from items where id = $1", // can also be a QueryFile object
    values: [1]
    })
    .then(function (user) {
        console.log(user.id);// user found;
    })
    .catch(function (error) {
        onsole.log("ERROR:", error.message || error);// error;
    });


/*Simple INSERT*/
/*db.none("insert into items(id, text, complete) values($1, $2, $3)", ['5', 'row5', true])
    .then(function () {
        console.log('success!');
    })
    .catch(function (error) {
        console.log("ERROR:", error.message || error); // print error;
    });*/


/*INSERT with result*/
/*db.one("insert into items(id, text, complete) values($1, $2, $3) returning id", ['6', 'row6', true])
    .then(function (data) {
        console.log(data.id); // print new user id;
    })
    .catch(function (error) {
        console.log("ERROR:", error.message || error); // print error;
    });*/