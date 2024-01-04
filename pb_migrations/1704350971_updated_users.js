/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h3ndi4hkrhkoefl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nmj3heyd",
    "name": "love",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h3ndi4hkrhkoefl")

  // remove
  collection.schema.removeField("nmj3heyd")

  return dao.saveCollection(collection)
})
