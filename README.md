# 50 States (and DC)

A vue app to track which states have been visited

Topics covered

* CSS Flexbox
* Vue routing and navigation
* Leaflet maps in Vue
* Seeding Sequelize database

## Example curl commands for patch route

Should response with `state not found`
curl -X PATCH --data '{"visited":false}' -H "Content-Type: Application/JSON" 127.0.0.1:3000/api/states/qwerty

curl -X PATCH --data '{"visited":false}' -H "Content-Type: Application/JSON" 127.0.0.1:3000/api/states/Iowa

curl -X PATCH --data '{"visited":true}' -H "Content-Type: Application/JSON" 127.0.0.1:3000/api/states/California

