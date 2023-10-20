import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit?module";


class SwegonCasaCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {}
    };
  }

  static getConfigElement() {
    // Create and return an editor element
    return document.createElement("my-custom-card-editor");
  }

  static getStubConfig() {
    // Return a minimal configuration that will result in a working card configuration
    return { entity: "" };
  }

  setConfig(config) {
    this._config = config;
  }

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      return html` <ha-card>Unknown entity: ${this._config.entity}</ha-card> `;
    }

    return html `
    <ha-card>
      <div class="container">
        <svg version="1.1" viewBox="0 0 850 360" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <linearGradient id="redblue">
              <stop stop-color="#acc0e5" offset="0" />
              <stop stop-color="#fd7c7a" offset="1" />
            </linearGradient>
            <g id="fan" transform="scale(1.5 1.5)">
              <path
                  d="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z" />
            </g>
            <g id="speed" transform="scale(1.5 1.5)">
              <path
                  d="M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z" />
            </g>
            <path id="arrow" d="m20 39.051h38.019v7.0848l14.228-14.228-14.228-14.228v7.0848h-38.019z" />
            <g id="thermometer" transform="scale(2.4 2.4)">
              <path d="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z" />
            </g>
          </defs>
          <g transform="translate(5,15)">
            <g class="bg">
              <g transform="translate(-.0029998 -30.999)">
                <path
                  d="m2.348 64.937h167.97l509.83 202.06 156.51 0.34732-0.29513 59.47-167.59 0.2448-510.45-202.92h-155.97z"
                  fill="url(#redblue)" stroke="#000" stroke-linejoin="round" stroke-width="2" />
                <path
                  d="m2.348 327.06h167.97l509.83-202.06 156.51-0.34732-0.29513-59.47-167.59-0.2448-510.45 202.92h-155.97z"
                  fill="url(#redblue)" stroke="#000" stroke-linejoin="round" stroke-width="2" />
                <g transform="translate(0,62)" fill="#fff">
                  <use xlink:href='#arrow' />
                  <use transform="translate(840,0) scale(-1,1)" xlink:href='#arrow' />
                  <use transform="translate(750,203)" xlink:href='#arrow' />
                  <use transform="translate(91,203) scale(-1,1)" xlink:href='#arrow' />
                </g>
              </g>
            </g>
            <g transform="translate(285,0)">
              <foreignObject class="entity">
                <div class="large_icon left">
                  <svg>
                    <use xlink:href='#thermometer' />
                  </svg>
                </div>
                <div class="large_label left">
                  ${this.hass.states[this.config.entity].attributes.temperature}°C
                </div>
              </foreignObject>
            </g>
            <g class="col-out">
              <g transform="translate(0,-12)">
                <foreignObject class="sensor">
                  <div class="label left">
                    ${this.hass.states['sensor.swegon_external_fresh_air_temperature'].state}°C
                  </div>
                </foreignObject>
              </g>
                <g transform="translate(0,90)">
                  <foreignObject class="sensor">
                    <div class="icon left">
                      <svg>
                          <use xlink:href='#speed' />
                      </svg>
                    </div>
                    <div class="label left">
                      ${Math.trunc(this.hass.states['sensor.swegon_supply_fan_rpm'].state)} rpm
                    </div>
                  </foreignObject>
                </g>
                <g transform="translate(0,190)">
                  <foreignObject class="sensor">
                      <div class="label left">
                        ${this.hass.states['sensor.swegon_exhaust_air_temperature'].state}°C
                      </div>
                  </foreignObject>
                </g>
                <g transform="translate(0,293)">
                  <foreignObject class="sensor">
                    <div class="icon left">
                      <svg>
                        <use xlink:href='#speed' />
                      </svg>
                    </div>
                    <div class="label left">
                      ${Math.trunc(this.hass.states['sensor.swegon_extract_fan_rpm'].state)} rpm
                    </div>
                  </foreignObject>
                </g>
            </g>
            <g class="col-in" transform="translate(635,0)">
              <g transform="translate(0,-12)">
                <foreignObject class="sensor">
                  <div class="label right">
                    ${this.hass.states['sensor.swegon_extract_air_temp'].state}°C
                  </div>
                </foreignObject> 
              </g>
              <g transform="translate(0,90)">
                <foreignObject class="sensor">
                  <div class="label right">
                    ${Math.trunc(this.hass.states['sensor.swegon_exhaust_fan_control'].state)}%
                  </div>
                  <div class="icon right">
                    <svg>
                      <use class="spin_extract" xlink:href='#fan' />
                    </svg>
                  </div>
                </foreignObject>
              </g>
              <g transform="translate(0,190)">
                <foreignObject class="sensor">
                  <div class="label right">
                    ${this.hass.states['sensor.swegon_supply_air_temp'].state}°C
                  </div>
                </foreignObject>
              </g>
              <g transform="translate(0,293)">
                <foreignObject class="sensor">
                  <div class="label right">
                    ${Math.trunc(this.hass.states['sensor.swegon_supply_fan_control'].state)}%
                  </div>
                  <div class="icon right">
                    <svg>
                      <use class="spin_supply" xlink:href='#fan' />
                    </svg>
                  </div>
                </foreignObject>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="info-row">
      ${this.getAirFilterTmpl()}
      ${this.getPreHeatTmpl()}
      ${this.getSummerModeTmpl()}
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
    if (this.hass.states['binary_sensor.swegon_filter_guard_info'].state != 'on') {
      return html `<ha-icon class="inactive" icon="mdi:air-filter"></ha-icon>`;
    } else {
      return html `<ha-icon class="warning" icon="mdi:air-filter"></ha-icon>`;
    }
  }

  //  getBypassTmpl() {
  //    if (this.hass.states['binary_sensor.bypass_valve'].state == 'on') {
  //      return html `<ha-icon icon="mdi:electric-switch"></ha-icon>`;
  //    } else {
  //      return html `<ha-icon class="inactive" icon="mdi:electric-switch"></ha-icon>`;
  //    }
  //  }

  getPreHeatTmpl() {
    if (this.hass.states['binary_sensor.swegon_preheater_active'].state == 'on') {
      return html `<ha-icon icon="mdi:radiator"></ha-icon>`;
    } else {
      return html `<ha-icon icon="mdi:radiator-off"></ha-icon>`;
    }
  }

  getSummerModeTmpl() {
    if (this.hass.states['binary_sensor.swegon_summer_cooling_active'].state == 'off') {
      return html `<ha-icon icon="mdi:snowflake"></ha-icon>`;
    } else {
      return html `<ha-icon class="inactive" icon="mdi:weather-sunny"></ha-icon>`;
    }
  }

  setConfig(config) {
    this.config = config;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return 7;
  }

  static get styles() {
    return css `
    .container {
      font-family: sans-serif;
      border: dotted;
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
      border: double;
      max-width: 100%;
      margin: auto;
      margin:0 auto;
      width:100px;
  }

  .col-out {
      text-anchor: start;
      font-size: xx-large;
      border: dotted;
  }

  .col-in {
      text-anchor: end;
      font-size: xx-large;
      border: dotted;
  }

  .fan-state {
      padding-top: 15px;
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
      color: color: #d80707db;
  }

  .icon {
      margin: auto;
      max-width: 40px;
      height: 40px;
      position: relative;
      top: 50%;
      transform: translate(0, -50%);
  }

  .large_icon {
      margin: auto;
      max-width: 60px;
      height: 60px;
      position: static;
      bottom: 0;
  }

  .label {
      position: relative;
      padding-left: 0.2em;
      top: 50%;
      transform: translate(0, -50%);
  }

  .large_label {
      font-size: xxx-large;
      font-weight: bold;
      position: static;
      padding-left: 0.2em;
      bottom: 0;
  }

  .right {
      float: right;
  }

  .left {
      float: left;
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
      padding-left: 30px;
      padding-right: 30px;
  }

  .spin_supply {
      transform-box: fill-box;
      transform-origin: 50% 50%;
      animation: spin 1s linear infinite;
  }

  .spin_extract {
      transform-box: fill-box;
      transform-origin: 50% 50%;
      animation: spin 1s linear infinite;
  }

  @keyframes spin {
      100% {
          transform: rotate(360deg);
      }
  }`;
  }
}
customElements.define("swegon-casa-card", SwegonCasaCard);

// Next we add our card to the list of custom cards for the card picker
window.customCards = window.customCards || []; // Create the list if it doesn't exist. Careful not to overwrite it
window.customCards.push({
  type: "swegon-casa-card",
  name: "Swegon Casa Card",
  description: "Custom card for Swegon Casa energy reclaiming home ventilation aggregates.",
});

// Finally we create and register the editor itself
class SwegonCasaCardEditor extends LitElement {

  static get properties() {
    return {
      hass: {},
      _config: {},
    };
  }

  // setConfig works the same way as for the card itself
  setConfig(config) {
    this._config = config;
  }

  // This function is called when the input element of the editor loses focus
  entityChanged(ev) {

    // We make a copy of the current config so we don't accidentally overwrite anything too early
    const _config = Object.assign({}, this._config);
    // Then we update the entity value with what we just got from the input field
    _config.entity = ev.target.value;
    // And finally write back the updated configuration all at once
    this._config = _config;

    // A config-changed event will tell lovelace we have made changed to the configuration
    // this make sure the changes are saved correctly later and will update the preview
    const event = new CustomEvent("config-changed", {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    // @focusout below will call entityChanged when the input field loses focus (e.g. the user tabs away or clicks outside of it)
    return html`
    Entity:
    <input
    .value=${this._config.entity}
    @focusout=${this.entityChanged}
    ></input>
    `;
  }
}

customElements.define("swegon-casa-card-editor", SwegonCasaCardEditor);