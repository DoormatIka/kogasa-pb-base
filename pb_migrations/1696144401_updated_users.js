/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h3ndi4hkrhkoefl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vk3al2rw",
    "name": "messages",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "p76nfjfu5hh7xbk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h3ndi4hkrhkoefl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vk3al2rw",
    "name": "chat_logs",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "p76nfjfu5hh7xbk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
