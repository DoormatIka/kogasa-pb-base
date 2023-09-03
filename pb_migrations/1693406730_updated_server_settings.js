/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7uurkbcluw1t0z9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j5wjzivw",
    "name": "channel_ids",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "zepwb49ozy10lpf",
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

  // remove
  collection.schema.removeField("j5wjzivw")

  return dao.saveCollection(collection)
})
