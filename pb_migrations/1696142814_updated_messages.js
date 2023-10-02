/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p76nfjfu5hh7xbk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nwsne6f2",
    "name": "role",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "system",
        "user",
        "assistant"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p76nfjfu5hh7xbk")

  // remove
  collection.schema.removeField("nwsne6f2")

  return dao.saveCollection(collection)
})
