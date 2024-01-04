/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ec0xyn88oqlxp6u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6jiswagx",
    "name": "love",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ec0xyn88oqlxp6u")

  // remove
  collection.schema.removeField("6jiswagx")

  return dao.saveCollection(collection)
})
