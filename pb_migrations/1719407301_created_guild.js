/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "icgarndolopozdt",
    "created": "2024-06-26 13:08:21.434Z",
    "updated": "2024-06-26 13:08:21.434Z",
    "name": "guild",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gfjbfy5w",
        "name": "confess",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "b4uwb29c20ai31r",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("icgarndolopozdt");

  return dao.deleteCollection(collection);
})
