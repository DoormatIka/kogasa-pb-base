/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("84mb8ygwn5zt7kn")

  // remove
  collection.schema.removeField("wf8zpjke")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("84mb8ygwn5zt7kn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wf8zpjke",
    "name": "channel_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "7noywclwie1h8b0",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
