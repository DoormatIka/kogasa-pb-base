/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h3ndi4hkrhkoefl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y1mahhhm",
    "name": "names",
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
  const collection = dao.findCollectionByNameOrId("h3ndi4hkrhkoefl")

  // remove
  collection.schema.removeField("y1mahhhm")

  return dao.saveCollection(collection)
})
