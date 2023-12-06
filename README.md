# Homeassistant Lovelace Card for Energy Reclaiming Home Ventilation

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/hacs/integration)

This is a energy reclaiming home ventilation card for homeassistant lovelace. This allows you
to visualize your energy reclaiming and ventilation data from several vendors (like Stork, Zehnder, Swegon Casa, etc.) 
in a nice way.

![screenshot](https://github.com/bolkedebruin/erhv-lovelace/assets/4282712/38bfd115-2c45-429f-a17c-27abbc606356)

# Installation

## HACS

* Add this repo to your HACS custom repositories.
* Install the card from the HACS store.
* Add a card with `type: 'custom:erhv-card'`.
* Configure the card with the entity of your energy reclaiming system and its sensors.

```
type: custom:erhv-card
icon: mdi:account
supply_temperature: sensor.ca350_supply_temperature
climate_entity: climate.ca350_climate
intake_temperature: sensor.ca350_outside_temperature
intake_fan_speed_rpm: sensor.ca350_supply_fan_speed
name: WHR 930
exhaust_temperature: sensor.ca350_exhaust_temperature
exhaust_fan_speed_rpm: sensor.ca350_exhaust_fan_speed
exhaust_fan_speed_percentage: sensor.ca350_return_air_level
return_temperature: sensor.ca350_return_temperature
filter_elapsed_time: sensor.ca350_filter_hours
filter_warning: binary_sensor.ca350_filter_status
bypass_state: binary_sensor.ca350_bypass_valve
preheater_state: binary_sensor.ca350_preheating_status
summer_mode: binary_sensor.ca350_summer_mode
```
