import { MYZActorSheet } from "./actor-sheet.js";

export class MYZNpcSheet extends MYZActorSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["mutant-year-zero", "sheet", "actor"],
            template: "systems/mutant-year-zero/templates/actor/npc-sheet.html",
            width: 730,
            height: 730,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
        });
    }
}