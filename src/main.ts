import {ZehnderCard} from "./zehnder-card";
import {ZehnderCardEditor} from "./editor";

declare global {
    interface Window {
        customCards: Array<Object>;
    }
}

customElements.define("zehnder-card", ZehnderCard);
customElements.define("zehnder-card-editor", ZehnderCardEditor);

// Next we add our card to the list of custom cards for the card picker
window.customCards = window.customCards || []; // Create the list if it doesn't exist. Careful not to overwrite it
window.customCards.push({
    type: "zehnder-card",
    name: "Zehnder Card",
    description: "Card for Zehnder energy reclaiming home ventilation aggregates.",
});
