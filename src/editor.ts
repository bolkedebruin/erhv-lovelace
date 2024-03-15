import {html, LitElement} from "lit";
import {customElement, property, state} from "lit/decorators.js";
import {HomeAssistant, LovelaceCardEditor} from "custom-card-helpers";
import {ERHVCardConfig} from "./types";
import {ERHVSchema} from "./schema";

@customElement("erhv-card-editor")
export class ERHVCardEditor extends LitElement implements LovelaceCardEditor {
    @state() private _config?: ERHVCardConfig;
    @property({attribute: false}) public hass?: HomeAssistant;

    // setConfig works the same way as for the card itself
    setConfig(config: ERHVCardConfig) {
        this._config = config;
    }

    // This function is called when the input element of the editor loses focus
    entityChanged(ev) {
        if (!this._config) {
            return;
        }

        const data = ev.detail.value;

        this._config = { ...this._config, ...data};

        // A config-changed event will tell lovelace we have made changed to the configuration
        // this make sure the changes are saved correctly later and will update the preview
        const event = new CustomEvent("config-changed", {
            detail: {config: this._config},
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }

    render() {
        if (!this.hass || !this._config) {
            return html``;
        }

        const data = { ...this._config };
        data.show_empty = data.show_empty ?? true;

        // @focusout below will call entityChanged when the input field loses focus (e.g. the user tabs away or clicks outside of it)
        return html`
            <div class="card-config">
                <ha-form 
                        .hass=${this.hass}
                        .schema=${ERHVSchema}
                        .computeLabel=${(s) => s.label ?? s.name}
                        .data=${data}
                        @value-changed=${this.entityChanged}
                </ha-form>
            </div>

        `;
    }
}
