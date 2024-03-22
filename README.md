# Homeassistant Lovelace Card for Energy Reclaiming Home Ventilation

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/hacs/integration)

This is a energy reclaiming home ventilation card for homeassistant lovelace. This allows you
to visualize your energy reclaiming and ventilation data from several vendors (like Stork, Zehnder, Swegon Casa, etc.) 
in a nice way.

![Screenshot - main](https://raw.githubusercontent.com/bolkedebruin/erhv-lovelace/main/docs/screenshot-1.jpg)

# Installation

## HACS

* Add this repo to your HACS custom repositories.
* Install the card from the HACS store.
* Add a card with `type: 'custom:erhv-card'`.
* Configure the card with the entity of your energy reclaiming system and its sensors.

Example configuration:

```
type: custom:erhv-card
icon: mdi:account
entity: climate.ca350_climate
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

| Option                          | Description                                                                     | Required |
|---------------------------------|---------------------------------------------------------------------------------|----------|
| `name`                          | Name on the card                                                                | Yes      |
| `entity`                        | The entity to be displayed.                                                     | Yes      |
| `climate_entity:`               | The entity to be displayed.                                                     | Yes      |
| `supply_temperature:`           | Entity providing supply temperature                                             | Yes      |
| `return_temperature:`           | Entity providing Return temperature                                             | Yes      |
| `intake_temperature:`           | Entity providing Intake (outside) temperature                                   | Yes      |
| `intake_fan_speed_rpm:`         | Entity providing Intake fan speed rpm                                           | Yes      |
| `exhaust_temperature:`          | Entity providing Exhaust temperature sensor                                     | Yes      |
| `exhaust_fan_speed_rpm:`        | Entity providing Exhaust fan speed rpm                                          | Yes      |
| `exhaust_fan_speed_percentage:` | Entity providing Exhaust fan speed %                                            | Yes      |
| `filter_elapsed_time:`          | Entity providing filter elapsed time                                            | Yes      |
| `filter_warning:`               | The entity providing boolean filter warning.                                    | Optional |
| `bypass_state:`                 | For some devices an entity providing the by-pass state may be available.        | Optional |
| `preheater_state:`              | For some devices an entity providing the preheater state may be available.      | Optional |
| `summer_mode:`                  | For some devices an entity providing the state of Summer Mode may be available. | Optional |

> Note: The icons in the view will be displayed according to the state of the optional fields above. If the field is omitted then the icon will not be displayed.

