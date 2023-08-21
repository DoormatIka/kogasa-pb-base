/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("94t2vve55hd8td6")

  collection.name = "server_settings"
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hcrvhkso",
    "name": "prefix",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6rkthqrz",
    "name": "nsfw",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("94t2vve55hd8td6")

  collection.name = "servers"
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null

  // remove
  collection.schema.removeField("hcrvhkso")

  // remove
  collection.schema.removeField("6rkthqrz")

  // remove
  collection.schema.removeField("yixvk0ry")

  return dao.saveCollection(collection)
})
