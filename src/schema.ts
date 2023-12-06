export const ERHVSchema = [
    {
        type: "grid",
        name: "",
        schema: [
            { name: "climate_entity", label: "Climate entity", required: true, selector: { entity: { domain: ["climate"]} } },
            { name: "name", selector: { text: {} } },
            {
                name: "icon",
                selector: {
                    icon: {},
                },
                context: {
                    icon_entity: "entity",
                },
            },
            {
                name: "intake_temperature",
                selector: { entity: { domain: ["sensor"]}},
                label: "Intake (outside) temperature",
            },
            {
                name: "intake_fan_speed_rpm",
                selector: { entity: { domain: ["sensor"]}},
                label: "Intake fan speed rpm",
            },
            {
                name: "intake_fan_speed_rpm",
                selector: { entity: { domain: ["sensor"]}},
                label: "Intake fan speed %",
            },
            {
                name: "exhaust_temperature",
                selector: { entity: { domain: ["sensor"]}},
                label: "Exhaust temperature sensor",
            },
            {
                name: "exhaust_fan_speed_rpm",
                selector: { entity: { domain: ["sensor"]}},
                label: "Exhaust fan speed rpm",
            },
            {
                name: "exhaust_fan_speed_percentage",
                selector: { entity: { domain: ["sensor"]}},
                label: "Exhaust fan speed %",
            },
            {
                name: "supply_temperature",
                selector: { entity: { domain: ["sensor"]}},
                label: "Supply temperature",
            },
            {
                name: "return_temperature",
                selector: { entity: { domain: ["sensor"]}},
                label: "Return temperature",
            },
            {
                name: "filter_elapsed_time",
                selector: { entity: { domain: ["sensor"]}},
                label: "Filter elapsed time",
            },
            {
                name: "filter_expiry_limit",
                selector: { entity: { domain: ["sensor"]}},
                label: "Filter elapsed time",
            },
            {
                name: "filter_warning",
                selector: { entity: { domain: ["binary_sensor"]}},
                label: "Filter warning",
            },
            {
                name: "bypass_state",
                selector: { entity: { domain: ["binary_sensor"]}},
                label: "By-pass state",
            },
            {
                name: "preheater_state",
                selector: { entity: { domain: ["binary_sensor"]}},
                label: "Preheater state",
            },
            {
                name: "summer_mode",
                selector: { entity: { domain: ["binary_sensor"]}},
                label: "Summer mode",
            },
        ],
    },
];