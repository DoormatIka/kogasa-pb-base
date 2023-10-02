/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ec0xyn88oqlxp6u")

  // remove
  collection.schema.removeField("thbysjqe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cvo4ipi3",
    "name": "randomwebinfo",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tadz9qlt",
    "name": "chat",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("cvo4ipi3")

  // remove
  collection.schema.removeField("tadz9qlt")

  return dao.saveCollection(collection)
})
