/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p76nfjfu5hh7xbk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "odlozo8h",
    "name": "content",
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
  const collection = dao.findCollectionByNameOrId("p76nfjfu5hh7xbk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "odlozo8h",
    "name": "message_content",
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
})
