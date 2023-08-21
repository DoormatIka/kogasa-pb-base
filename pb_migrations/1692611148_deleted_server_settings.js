/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("94t2vve55hd8td6");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "94t2vve55hd8td6",
    "created": "2023-08-20 15:01:55.188Z",
    "updated": "2023-08-21 09:09:15.108Z",
    "name": "server_settings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4fqiiw64",
        "name": "serverid",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hcrvhkso",
        "name": "prefix",
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
        "id": "6rkthqrz",
        "name": "nsfw",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "yixvk0ry",
        "name": "self_quote",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
