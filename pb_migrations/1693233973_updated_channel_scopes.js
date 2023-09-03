/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("84mb8ygwn5zt7kn")

  collection.name = "command_scopes"

  // remove
  collection.schema.removeField("qf3kdqda")

  // remove
  collection.schema.removeField("8kyiju6h")

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tm0mzkw2",
    "name": "command_name",
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
  const collection = dao.findCollectionByNameOrId("84mb8ygwn5zt7kn")

  collection.name = "channel_scopes"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qf3kdqda",
    "name": "channel_id",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8kyiju6h",
    "name": "channel_name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("wf8zpjke")

  // remove
  collection.schema.removeField("tm0mzkw2")

  return dao.saveCollection(collection)
})
