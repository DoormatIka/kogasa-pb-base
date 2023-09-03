/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zepwb49ozy10lpf",
    "created": "2023-08-29 10:04:23.798Z",
    "updated": "2023-08-29 10:04:23.798Z",
    "name": "channel_ids",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dvcselpc",
        "name": "channel_id",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ehmiffx6",
        "name": "command_scope",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "ec0xyn88oqlxp6u",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zepwb49ozy10lpf");

  return dao.deleteCollection(collection);
})
