/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ec0xyn88oqlxp6u",
    "created": "2023-08-29 10:01:57.838Z",
    "updated": "2023-08-29 10:01:57.838Z",
    "name": "command_scopes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qfkcjoti",
        "name": "quote",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "kmkoyti4",
        "name": "sauce",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "czmphkkp",
        "name": "img",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "l1k8pgjn",
        "name": "google",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "hhprm9wn",
        "name": "doctor",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "5fi82irm",
        "name": "ytdl",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "wmn4xg2u",
        "name": "ping",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "tof1ywer",
        "name": "ytdlf",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ighl0wz5",
        "name": "dyn",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("ec0xyn88oqlxp6u");

  return dao.deleteCollection(collection);
})
