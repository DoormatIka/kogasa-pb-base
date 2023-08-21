/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7uurkbcluw1t0z9",
    "created": "2023-08-21 09:46:11.680Z",
    "updated": "2023-08-21 09:46:11.680Z",
    "name": "server_settings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xn4yq5rd",
        "name": "serverid",
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
        "id": "adkzxbjn",
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
        "id": "2qud48gq",
        "name": "nsfw",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "jfnzbl0u",
        "name": "self_quote",
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
  const collection = dao.findCollectionByNameOrId("7uurkbcluw1t0z9");

  return dao.deleteCollection(collection);
})
