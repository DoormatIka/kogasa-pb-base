/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "94t2vve55hd8td6",
    "created": "2023-08-20 15:01:55.188Z",
    "updated": "2023-08-20 15:01:55.188Z",
    "name": "servers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kjaljhpw",
        "name": "serverid",
        "type": "text",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("94t2vve55hd8td6");

  return dao.deleteCollection(collection);
})
