import {LovelaceCardConfig} from "custom-card-helpers";

export interface ERHVCardConfig extends LovelaceCardConfig {
    header: string;
    climate_entity: string;
    name: string;
    icon: string;
    intake_temperature: string;
    intake_fan_speed_rpm: string;
    intake_fan_speed_percentage: string;
    exhaust_temperature: string;
    exhaust_fan_speed_rpm: string;
    exhaust_fan_speed_percentage: string;
    supply_temperature: string;
    return_temperature: string;
    filter_elapsed_time: string;
    filter_expiry_limit: string;
    filter_warning: string;
    bypass_state: string;
    preheater_state: string;
    summer_mode: string;
}