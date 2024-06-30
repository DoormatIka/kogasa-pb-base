/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4uwb29c20ai31r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6aujya5j",
    "name": "banned_users",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "y2i4l00k1yd75qw",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4uwb29c20ai31r")

  // remove
  collection.schema.removeField("6aujya5j")

  return dao.saveCollection(collection)
})
