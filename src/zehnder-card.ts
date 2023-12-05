import {
    LitElement,
    html,
    css
} from "lit";
import {customElement, property, state} from "lit/decorators.js";

import {HomeAssistant, LovelaceCard} from "custom-card-helpers";
import {findEntities} from "./common/find-entities";
import {ZehnderConfig} from "./types";

const validEntityId = /^(\w+)\.(\w+)$/;
const isValidEntityId = (entityId: string) =>
    validEntityId.test(entityId);

@customElement("zehnder-card")
export class ZehnderCard extends LitElement implements LovelaceCard {
    @property({attribute: false}) public hass?: HomeAssistant;
    @state() private _config?: ZehnderConfig;

    public static async getConfigForm() {
        // Create and return an editor element
        return (await import("./editor")).default;
    }

    static getStubConfig(
        hass: HomeAssistant,
        entities: string[],
        entitiesFill: string[]
    ) {
        const includeDomains = ["climate"];
        const maxEntities = 1;
        const foundEntities = findEntities(
            hass,
            maxEntities,
            entities,
            entitiesFill,
            includeDomains
        );
        // Return a minimal configuration that will result in a working card configuration
        return {entity: foundEntities[0] || ""};
    }

    public setConfig(config: ZehnderConfig): void {
        if (!config.entity) {
            throw new Error("Entity must be specified");
        }
        if (config.entity && !isValidEntityId(config.entity)) {
            throw new Error("Invalid entity");
        }

        this._config = config;

        if (this._config.footer) {
            // this._footerElement = createHeaderFooterElement(this._config.footer);
        } else if (false) {
            // this._footerElement = undefined;
        }
    }

    render() {
        if (!this.hass || !this._config) {
            return html`Custom card not found!`;
        }

        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return html`
                <ha-card>Unknown entity: ${this._config.entity}</ha-card> `;
        }

        const name = this._config.name || "NoName";

        return html`
            <ha-card>
                    <!--<p class="title">${name}</p>-->
                <div class="container">
                    <div id="bg">
                        <svg viewBox="0 0 850 360" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <linearGradient id="redblue">
                                    <stop stop-color="#acc0e5" offset="0"/>
                                    <stop stop-color="#fd7c7a" offset="1"/>
                                </linearGradient>
                                <path id="arrow"
                                      d="m20 39.051h38.019v7.0848l14.228-14.228-14.228-14.228v7.0848h-38.019z"/>
                                <!-- to work around safari issues -->
                                <path id="fan" class="primary-path" d="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 
                0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 
                14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 
                14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,
                17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,
                11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,
                2 12.5,2Z">
                                </path>
                                <path id="speedometer" class="primary-path" d="M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 
                13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,
                18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,
                1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,
                18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z">
                                </path>
                            </defs>
                            <g transform="translate(5,15)">
                                <g class="bg">
                                    <g transform="translate(-.0029998 -30.999)">
                                        <path
                                                d="m2.348 64.937h167.97l509.83 202.06 156.51 0.34732-0.29513 59.47-167.59 0.2448-510.45-202.92h-155.97z"
                                                fill="url(#redblue)" stroke="#000" stroke-linejoin="round"
                                                stroke-width="2"/>
                                        <path
                                                d="m2.348 327.06h167.97l509.83-202.06 156.51-0.34732-0.29513-59.47-167.59-0.2448-510.45 202.92h-155.97z"
                                                fill="url(#redblue)" stroke="#000" stroke-linejoin="round"
                                                stroke-width="2"/>
                                        <g transform="translate(0,62)" fill="#fff">
                                            <use xlink:href='#arrow'/>
                                            <use transform="translate(840,0) scale(-1,1)" xlink:href='#arrow'/>
                                            <use transform="translate(750,203)" xlink:href='#arrow'/>
                                            <use transform="translate(91,203) scale(-1,1)" xlink:href='#arrow'/>
                                        </g>
                                    </g>
                                </g>
                        </svg>
                    </div>

                    <div id="left">
                        <!-- start intake -->
                        <div id="intake">
                            <svg viewBox="0 0 212.5 180">
                                <text font-size="24px" x="10" y="35">
                                    ${this.hass.states['sensor.ca350_outside_temperature'].state}°C
                                </text>
                                <text font-size="24px" x="54" y="135">
                                    ${this.hass.states['sensor.ca350_supply_fan_speed'].state} rpm
                                </text>
                                <g transform="translate(10, 110) scale(0.2, 0.2)">
                                    <svg preserveAspectRatio="xMidYMid meet" focusable="false" role="img"
                                         aria-hidden="true" viewBox="0 0 24 24" class="icon">
                                        <g>
                                            <use xlink:href='#speedometer'/>
                                        </g>
                                    </svg>
                                </g>
                            </svg>
                        </div>
                        <!-- end intake -->

                        <!-- start exhaust -->
                        <div id="exhaust">
                            <svg viewBox="0 0 212.5 180">
                                <text font-size="24px" x="10" y="58">
                                    ${this.hass.states['sensor.ca350_exhaust_temperature'].state}°C
                                </text>
                                <text font-size="24px" x="54" y="158">
                                    ${Math.trunc(Number(this.hass.states['sensor.ca350_exhaust_fan_speed'].state))} rpm
                                </text>
                                <g transform="translate(10, 133) scale(0.2, 0.2)">
                                    <svg preserveAspectRatio="xMidYMid meet" focusable="false" role="img"
                                         aria-hidden="true" viewBox="0 0 24 24" class="icon">
                                        <g>
                                            <use xlink:href='#speedometer'/>
                                        </g>
                                    </svg>
                                </g>
                            </svg>
                        </div>
                        <!-- end exhaust -->
                    </div>
                    <!-- end left column -->

                    <!-- start center column -->
                    <div id="center">
                        <div id="target_temperature">
                            <svg viewBox="0 0 80 40">
                                <text x="50%" dx="1" y="25%" text-anchor="middle" style="font-size:13px">
                                    ${this.hass.states[this._config.entity].attributes.temperature}
                                    <tspan dx="-3" dy="-6.5" style="font-size:4px">°C</tspan>
                                </text>
                            </svg>
                        </div>
                    </div>
                    <!-- end center column -->

                    <!-- start right column -->
                    <div id="right" class="right">
                        <!-- start return -->
                        <div id="return">
                            <svg viewBox="0 0 212.5 180">
                                <text font-size="24px" x="204.5" y="35" text-anchor="end">
                                    ${this.hass.states['sensor.ca350_return_temperature'].state}°C
                                </text>
                                <text font-size="24px" x="160" y="135" text-anchor="end">
                                    ${Math.trunc(Number(this.hass.states['sensor.ca350_return_temperature'].state))}%
                                </text>
                                <g transform="translate(160, 110) scale(0.2, 0.2)">
                                    <svg preserveAspectRatio="xMidYMid meet" focusable="false" role="img"
                                         aria-hidden="true" viewBox="0 0 24 24" class="icon">
                                        <g>
                                            <use xlink:href='#fan'/>
                                        </g>
                                    </svg>
                                </g>
                            </svg>
                        </div>
                        <!-- end return -->

                        <!-- start supply -->
                        <div id="supply">
                            <svg viewBox="0 0 212.5 180">
                                <text font-size="24px" x="204.5" y="58" text-anchor="end">
                                    ${this.hass.states['sensor.ca350_supply_temperature'].state}°C
                                </text>
                                <text font-size="24px" x="160" y="158" text-anchor="end">
                                    ${Math.trunc(Number(this.hass.states['sensor.ca350_supply_air_level'].state))}%
                                </text>
                                <g transform="translate(160, 133) scale(0.2, 0.2)">
                                    <svg preserveAspectRatio="xMidYMid meet" focusable="false" role="img"
                                         aria-hidden="true" viewBox="0 0 24 24" class="icon">
                                        <g>
                                            <use xlink:href='#fan'/>
                                        </g>
                                    </svg>
                                </g>
                            </svg>
                        </div>
                        <!-- end supply -->
                    </div>
                    <!-- end right column -->
                </div>
                <!-- end container -->

                <div id="info">
                    <div id="modes">
                        ${this.getAirFilterTmpl()}
                        ${this.getPreHeatTmpl()}
                        ${this.getSummerModeTmpl()}
                        ${this.getBypassTmpl()}
                    </div>
                </div>
            </ha-card>
        `;
    }

    //  getFanTmpl() {
    //    if (this.hass.states['binary_sensor.supply_fan'].state == 'on') {
    //      return html `<ha-icon icon="mdi:fan"></ha-icon>`;
    //    } else {
    //      return html `<ha-icon class="inactive" icon="mdi:fan"></ha-icon>`;
    //    }
    //  }

    getAirFilterTmpl() {
        if (!this.hass) {
            return html``;
        }
        if (this.hass.states['binary_sensor.ca350_filter_status'].state != 'on') {
            return html`
                <ha-icon class="inactive" icon="mdi:air-filter"></ha-icon>`;
        } else {
            return html`
                <ha-icon class="warning" icon="mdi:air-filter"></ha-icon>`;
        }
    }

    getBypassTmpl() {
        if (!this.hass) {
            return html``;
        }
        if (this.hass.states['binary_sensor.ca350_bypass_valve'].state == 'on') {
            return html`
                <ha-icon icon="mdi:electric-switch"></ha-icon>`;
        } else {
            return html`
                <ha-icon class="inactive" icon="mdi:electric-switch"></ha-icon>`;
        }
    }

    getPreHeatTmpl() {
        if (!this.hass) {
            return html``;
        }
        if (this.hass.states['binary_sensor.ca350_preheating_status'].state == 'on') {
            return html`
                <ha-icon icon="mdi:radiator"></ha-icon>`;
        } else {
            return html`
                <ha-icon icon="mdi:radiator-off"></ha-icon>`;
        }
    }

    getSummerModeTmpl() {
        if (!this.hass) {
            return html``;
        }
        if (this.hass.states['binary_sensor.ca350_summer_mode'].state == 'off') {
            return html`
                <ha-icon icon="mdi:snowflake" style="color: cyan;"></ha-icon>`;
        } else {
            return html`
                <ha-icon class="summer" icon="mdi:weather-sunny"></ha-icon>`;
        }
    }

    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    getCardSize() {
        return 7;
    }

    static get styles() {
        return css`
          text {
            fill: var(--primary-text-color);
          }

          .container {
          }

          #winter_icon {
            color: var(--cyan-color);
          }
          
          #left {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 25%;
            height: 100%;
          }

          #center {
            position: absolute;
            width: 50%;
            height: calc(100% - 40px);
            box-sizing: border-box;
            border-radius: 100%;
            left: 25%;
            top: 20px;
            text-align: center;
            overflow-wrap: break-word;
            pointer-events: none;
            min-width: 150px;
          }

          #right {
            position: absolute;
            top: 0px;
            right: 0px;
            width: 25%;
            height: 100%;
          }

          #info {
            justify-content: center;
            text-align: center;
            padding: 16px;
            margin-top: -60px;
            font-size: var(--name-font-size);
          }

          #modes .selected-icon {
            color: var(--mode-color);
          }

          #modes > * {
            color: var(--disabled-text-color);
            cursor: pointer;
            display: inline-block;
          }

          #intake {
            height: 50%;
          }

          #return {
            height: 50%
          }

          #intake_fan_speed {
          }

          #outside_temperature {
          }

          #exhaust {
            height: 50%;
          }

          #supply {
            height: 50%
          }

          .fan-speed {
            margin-top: 35px;
          }

          .right {
            text-align: right;
          }

          .bg {
            background-size: contain;
            background-repeat: no-repeat;
            background-position-y: center;
          }

          .not-found {
            background-color: yellow;
            font-family: sans-serif;
            font-size: 14px;
          }

          .col-center {
            font-size: xxx-large;
            font-weight: bold;
            max-width: 100%;
            margin: auto;
            width: 100px;
          }

          .col-out {
            text-anchor: start;
            font-size: xx-large;
          }

          .col-in {
            text-anchor: end;
            font-size: xx-large;
          }

          .fan-state {
            padding-top: 15px;
          }

          .icon-right {
            margin-left: 20px
          }

          .info-row {
            background: rgba(0, 0, 0, 0.2);
            margin-top: 10px;
            padding: 5px;
            border-top: rgba(0, 0, 0, 0.4);
            -webkit-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
            -moz-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
            box-shadow: 0px -2.5px 3px rgba(0, 0, 0, 0.4);
            display: flex;
            justify-content: space-around;
          }

          .inactive {
            opacity: 0.7;
          }

          .warning {
            color: #d80707db;
          }

          .icon {
            fill: currentColor;
          }

          .medium_icon {
          }

          .large_icon {
          }

          .label {
          }

          .large_label {
          }

          .sensor {
            vertical-align: middle;
            text-align: center;
            width: 200px;
            height: 50px;
          }

          .entity {
            width: 270px;
            height: 80px;
            vertical-align: bottom;
            position: relative;
            margin: auto;
            padding-left: 25px;
            padding-right: 25px;
          }

          .spin_supply {
            transform-box: fill-box;
            transform-origin: 50% 50%;
            animation: spin 1s linear infinite;
            fill: white;
            stroke: white;
          }

          .spin_extract {
            transform-box: fill-box;
            transform-origin: 50% 50%;
            animation: spin 1s linear infinite;
            fill: white;
            stroke: white;
          }

          @keyframes spin {
            100% {
              transform: rotate(360deg);
            }
          }`;
    }
}
