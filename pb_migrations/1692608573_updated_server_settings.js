/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("94t2vve55hd8td6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4fqiiw64",
    "name": "serverid",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("94t2vve55hd8td6")

  // remove
  collection.schema.removeField("4fqiiw64")

  return dao.saveCollection(collection)
})
