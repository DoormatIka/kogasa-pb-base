/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4uwb29c20ai31r")

  // remove
  collection.schema.removeField("bqlysqd5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aue62sbp",
    "name": "confess",
    "type": "text",
    "required": true,
    "presentable": false,
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
  const collection = dao.findCollectionByNameOrId("b4uwb29c20ai31r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bqlysqd5",
    "name": "confess",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("aue62sbp")

  return dao.saveCollection(collection)
})
