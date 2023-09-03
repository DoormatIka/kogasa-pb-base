/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7noywclwie1h8b0");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "7noywclwie1h8b0",
    "created": "2023-08-28 14:44:34.508Z",
    "updated": "2023-08-28 14:46:21.384Z",
    "name": "channel_ids",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3g08k8mx",
        "name": "channel_id",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
