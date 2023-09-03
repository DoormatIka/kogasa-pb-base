/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("84mb8ygwn5zt7kn");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "84mb8ygwn5zt7kn",
    "created": "2023-08-28 04:27:43.522Z",
    "updated": "2023-08-29 04:38:41.467Z",
    "name": "command_scopes",
    "type": "base",
    "system": false,
    "schema": [
      {
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
