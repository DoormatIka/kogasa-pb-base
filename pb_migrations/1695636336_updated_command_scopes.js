/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ec0xyn88oqlxp6u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pojezepx",
    "name": "randomweb",
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
  collection.schema.removeField("pojezepx")

  return dao.saveCollection(collection)
})
