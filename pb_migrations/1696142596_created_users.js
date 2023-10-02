/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "h3ndi4hkrhkoefl",
    "created": "2023-10-01 06:43:16.194Z",
    "updated": "2023-10-01 06:43:16.194Z",
    "name": "users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zymm0bwk",
        "name": "user_id",
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
        "id": "vk3al2rw",
        "name": "chat_logs",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("h3ndi4hkrhkoefl");

  return dao.deleteCollection(collection);
})
