/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7uurkbcluw1t0z9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k6vfzfu1",
    "name": "command_scopes",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "84mb8ygwn5zt7kn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7uurkbcluw1t0z9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k6vfzfu1",
    "name": "channel_scope",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "84mb8ygwn5zt7kn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
