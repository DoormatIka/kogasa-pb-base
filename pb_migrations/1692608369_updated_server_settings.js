/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("94t2vve55hd8td6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yixvk0ry",
    "name": "self_quote",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("94t2vve55hd8td6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yixvk0ry",
    "name": "own_quoting",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
