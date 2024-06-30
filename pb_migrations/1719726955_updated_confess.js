/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4uwb29c20ai31r")

  // remove
  collection.schema.removeField("cpwgrpyn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "azalsz3q",
    "name": "confessed_users",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "y2i4l00k1yd75qw",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4uwb29c20ai31r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cpwgrpyn",
    "name": "counter",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  // remove
  collection.schema.removeField("azalsz3q")

  return dao.saveCollection(collection)
})
