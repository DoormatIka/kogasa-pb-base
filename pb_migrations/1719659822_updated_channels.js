/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4uwb29c20ai31r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cpwgrpyn",
    "name": "confess_counter",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4uwb29c20ai31r")

  // remove
  collection.schema.removeField("cpwgrpyn")

  return dao.saveCollection(collection)
})
