/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ec0xyn88oqlxp6u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "thbysjqe",
    "name": "randomwebinfo",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ec0xyn88oqlxp6u")

  // remove
  collection.schema.removeField("thbysjqe")

  return dao.saveCollection(collection)
})
