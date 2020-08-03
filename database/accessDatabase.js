import Datastore from "nedb"

function accessDatabase() {
    let database;

    let data = {
        start(collection) {
            database = new Datastore(collection + ".db")
            database.loadDatabase()
            console.log("[DATABASE] => Started.")
        },

        add(data) {
            database.insert(data, (err, newDoc) => {
                console.log(newDoc)
            })
        },

        get(query, callback) {
            database.find(query, callback)
        },

        remove(query, multiple) {
            database.remove(query, {multi: multiple})
        },

        update(query, data) {
            database.update(query, data, {multi: true});
        }
    }

    return data;
}

export default accessDatabase;