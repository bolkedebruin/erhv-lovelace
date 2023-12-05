import {html, LitElement} from "lit/development";
import {property, state} from "lit/development/decorators";
import {HomeAssistant, LovelaceCardEditor} from "custom-card-helpers";
import {ZehnderConfig} from "./types";

class ZehnderCardEditor extends LitElement implements LovelaceCardEditor {
    @state() private _config?: ZehnderConfig;
    @property({attribute: false}) public hass?: HomeAssistant;
    @state() private _configEntities?: LovelaceRowConfig[];

    // setConfig works the same way as for the card itself
    setConfig(config: ZehnderConfig) {
        this._config = config;
    }

    // This function is called when the input element of the editor loses focus
    entityChanged(ev) {

        // We make a copy of the current config so we don't accidentally overwrite anything too early
        const config = Object.assign({}, this._config);
        // Then we update the entity value with what we just got from the input field
        config.entity = ev.target.value;
        // And finally write back the updated configuration all at once
        this._config = config;

        // A config-changed event will tell lovelace we have made changed to the configuration
        // this make sure the changes are saved correctly later and will update the preview
        const event = new CustomEvent("config-changed", {
            detail: {config: config},
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
     

        `;
    }
}

customElements.define("zehnder-card-editor", ZehnderCardEditor);