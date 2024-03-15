import {ERHVCard} from "./erhv-card";
import {ERHVCardEditor} from "./editor";

declare global {
    interface Window {
        customCards: Array<Object>;
    }
}

//customElements.define("erhv-card", ERHVCard);
//customElements.define("erhv-card-editor", ERHVCardEditor);

// Next we add our card to the list of custom cards for the card picker
window.customCards = window.customCards || []; // Create the list if it doesn't exist. Careful not to overwrite it
window.customCards.push({
    type: "erhv-card",
    name: "Energy Reclaiming Home Ventilation Card",
    description: "Card for energy reclaiming home ventilation aggregates.",
});

