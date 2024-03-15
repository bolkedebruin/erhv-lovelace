import './erhv-card';
import './editor';

declare global {
    interface Window {
        customCards: Array<Object>;
    }
}

// Next we add our card to the list of custom cards for the card picker
window.customCards = window.customCards || []; // Create the list if it doesn't exist. Careful not to overwrite it
window.customCards.push({
    type: "erhv-card",
    name: "Energy Reclaiming Home Ventilation Card",
    description: "Card for energy reclaiming home ventilation aggregates.",
});

