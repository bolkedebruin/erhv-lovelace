# Homeassistant Lovelace Swegon Casa card

Use Modbus to connect your Swegon Casa to Homeassistant and then use this lovelace card to visualize your data!

# Installation

* Clone this repo into your `www` folder inside your configuration. So it will be: `config_folder/www/lovelace-swegon-casa`. 
* Edit your lovelace-ui.yaml or use the flat configuration mode in lovelace and add to the top:
```
resources:
  - type: module
    url: /local/lovelace-swegon-casa/zehnder-card.js
```
* Add a card with `type: 'custom:swegon-casa-card'` and `entity: 'climate.put-your-swegon-casa-name-here'` to your UI.
