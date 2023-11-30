import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class ZehnderCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      config: {}
    };
  }

  static getConfigElement() {
    // Create and return an editor element
    return document.createElement("zehnder-card-editor");
  }

  static getStubConfig() {
    // Return a minimal configuration that will result in a working card configuration
    return { entity: "" };
  }

  render() {
    if (!this.hass || !this.config) {
      return html`Custom card not found!`;
    }

    const stateObj = this.hass.states[this.config.entity];
    if (!stateObj) {
      return html` <ha-card>Unknown entity: ${this.config.entity}</ha-card> `;
    }

    return html `
    <ha-card>
      <div class="container">
        <svg viewBox="0 0 850 360" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <linearGradient id="redblue">
              <stop stop-color="#acc0e5" offset="0" />
              <stop stop-color="#fd7c7a" offset="1" />
            </linearGradient>
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
        </svg>
      </div>
      
      <div id="col-out">
        <div id="supply">
          <div class="temperature" id="outside_temperature">
              ${this.hass.states['sensor.ca350_outside_temperature'].state}°C
          </div>
          <div class="fan-speed" id="supply_fan_speed">
              ${Math.trunc(this.hass.states['sensor.ca350_supply_fan_speed'].state)}
          </div>
        </div>
        <div id="exhaust">
          <div class="temperature">
            <div class="label left">
              <!-- exhaust air temperature -->
              ${this.hass.states['sensor.ca350_exhaust_temperature'].state}°C
            </div>
          </div>  
          <div class="fan-speed">
            <div class="icon left">
                <ha-icon class="icon" icon="mdi:speedometer"></ha-icon>
            </div>
            <div class="label left">
                <!-- exhaust fan speed -->
                ${Math.trunc(this.hass.states['sensor.ca350_exhaust_fan_speed'].state)} rpm
            </div>
          </div>  
        </div>
      <!-- end col-out -->
      </div>

      <div id="col-center">
        <div class="large_icon left">
          <ha-icon class="icon" icon="mdi:thermometer"></ha-icon>
        </div>
        <div class="large_label left">
          ${this.hass.states[this.config.entity].attributes.temperature}°C
        </div>
      <!-- end col-center -->  
      </div>
      
      <div id="col-in">
        <div id="return">
          <div class="label right">
            <!-- return temperature -->
            ${this.hass.states['sensor.ca350_return_temperature'].state}°C
          </div>
          <div class="label right">
            <!-- return air level in %-->
            ${Math.trunc(this.hass.states['sensor.ca350_return_air_level'].state)}%
          </div>
          <div class="icon right">
            <ha-icon class="icon" icon="mdi:fan"></ha-icon>
          </div>
        </div>
        <div id="supply_right">
          <div class="label right">
            <!-- supply air temperature -->
            ${this.hass.states['sensor.ca350_supply_temperature'].state}°C
          </div>
          <div class="label right">
            <!-- supply air level in %-->
            ${Math.trunc(this.hass.states['sensor.ca350_supply_air_level'].state)}%
          </div>
          <div class="icon right">
            <div class="icon right">
              <ha-icon class="icon" icon="mdi:fan"></ha-icon>
            </div>
          </div>
        </div>
        <!-- end col-in -->
      </div>
      
      <div class="info-row">
      ${this.getAirFilterTmpl()}
      ${this.getPreHeatTmpl()}
      ${this.getSummerModeTmpl()}
      ${this.getBypassTmpl()}
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
    if (this.hass.states['binary_sensor.ca350_filter_status'].state != 'on') {
      return html `<ha-icon class="inactive" icon="mdi:air-filter"></ha-icon>`;
    } else {
      return html `<ha-icon class="warning" icon="mdi:air-filter"></ha-icon>`;
    }
  }

  getBypassTmpl() {
      if (this.hass.states['binary_sensor.ca350_bypass_valve'].state == 'on') {
        return html `<ha-icon icon="mdi:electric-switch"></ha-icon>`;
      } else {
        return html `<ha-icon class="inactive" icon="mdi:electric-switch"></ha-icon>`;
      }
  }

  getPreHeatTmpl() {
    if (this.hass.states['binary_sensor.ca350_preheating_status'].state == 'on') {
      return html `<ha-icon icon="mdi:radiator"></ha-icon>`;
    } else {
      return html `<ha-icon icon="mdi:radiator-off"></ha-icon>`;
    }
  }

  getSummerModeTmpl() {
    if (this.hass.states['binary_sensor.ca350_summer_mode'].state == 'off') {
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
      max-width: 40px;
      position: relative;
      top: 14px;
      transform: scale(1.5,1.5) translate(0,-50%);
      margin-left: 5px;
      margin-right: 5px;
  }
  
  .medium_icon {
    max-width: 40px;
    position: relative;
    top: 10px;
    margin-left: 5px;
    margin-right: 5px;  
  }
      
  .large_icon {
      margin: auto;
      max-width: 60px;
      height: 60px;
      position: static;
      margin-left: 30px;
      stroke: white;
  }

  .label {
      position: relative;
      padding-left: 0.2em;
      top: 50%;
      transform: translate(0, -50%);
      margin-top: 5px;
  }

  .large_label {
      position: static;
      padding-left: 0.2em;
      bottom: 0;
      margin-top: 20px;
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

customElements.define("zehnder-card", ZehnderCard);

// Next we add our card to the list of custom cards for the card picker
window.customCards = window.customCards || []; // Create the list if it doesn't exist. Careful not to overwrite it
window.customCards.push({
  type: "zehnder-card",
  name: "Zehnder Card",
  description: "Card for Zehnder energy reclaiming home ventilation aggregates.",
});

// Finally we create and register the editor itself
class ZehnderCardEditor extends LitElement {

  static get properties() {
    return {
      hass: {},
      config: {},
    };
  }

  // setConfig works the same way as for the card itself
  setConfig(config) {
    this.config = config;
  }

  // This function is called when the input element of the editor loses focus
  entityChanged(ev) {

    // We make a copy of the current config so we don't accidentally overwrite anything too early
    const config = Object.assign({}, this.config);
    // Then we update the entity value with what we just got from the input field
    config.entity = ev.target.value;
    // And finally write back the updated configuration all at once
    this.config = config;

    // A config-changed event will tell lovelace we have made changed to the configuration
    // this make sure the changes are saved correctly later and will update the preview
    const event = new CustomEvent("config-changed", {
      detail: { config: config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    // @focusout below will call entityChanged when the input field loses focus (e.g. the user tabs away or clicks outside of it)
    return html`
    Entity:
    <input
    .value=${this.config.entity}
    @focusout=${this.entityChanged}
    ></input>
    `;
  }
}

customElements.define("zehnder-card-editor", ZehnderCardEditor);