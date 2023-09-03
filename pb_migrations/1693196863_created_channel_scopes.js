/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "84mb8ygwn5zt7kn",
    "created": "2023-08-28 04:27:43.522Z",
    "updated": "2023-08-28 04:27:43.522Z",
    "name": "channel_scopes",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
  const collection = dao.findCollectionByNameOrId("84mb8ygwn5zt7kn");

  return dao.deleteCollection(collection);
})
