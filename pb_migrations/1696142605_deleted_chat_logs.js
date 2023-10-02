/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("t2g2bwqd1ng19rp");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "t2g2bwqd1ng19rp",
    "created": "2023-10-01 06:42:17.178Z",
    "updated": "2023-10-01 06:42:17.178Z",
    "name": "chat_logs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "181wuhma",
        "name": "messages",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "p76nfjfu5hh7xbk",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
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
})
