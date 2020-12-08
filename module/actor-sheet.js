import { EntitySheetHelper } from "./helper.js";
import { updateDerived, rollSkillCheck } from "./witcher/witcher.js";
import { updateHomeland } from "./witcher/background.js";

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class SimpleActorSheet extends ActorSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["wtrpg", "sheet", "actor"],
      template: "systems/wtrpg/templates/actors/actor-sheet.html",
      width: 600,
      height: 600,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }],
      scrollY: [".biography", ".items", ".attributes"],
      dragDrop: [{ dragSelector: ".item-list .item", dropSelector: null }]
    });
  }

  /* -------------------------------------------- */

  /** @override */
  getData() {
    const data = super.getData();

    // Handle attribute groups.
    EntitySheetHelper.getAttributeData(data);

    // Add shorthand.
    data.shorthand = !!game.settings.get("wtrpg", "macroShorthand");
    return data;
  }

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    let thisActor = this.actor;

    html.find("input.stats").on("change",updateDerived(thisActor));


    //an incredibly long list of of listeners unless I find a better way to do this
    //int skills
    html.find("#awareness-rollable").on("click", function () {
      rollSkillCheck(thisActor, 0, 0)
    });
    html.find("#business-rollable").on("click", function () {
      rollSkillCheck(thisActor, 0, 1)
    });
    html.find("#deduction-rollable").on("click", function () {
      rollSkillCheck(thisActor, 0, 2)
    });
    html.find("#education-rollable").on("click", function () {
      rollSkillCheck(thisActor, 0, 3)
    });
    html.find("#commonsp-rollable").on("click", function () {
      rollSkillCheck(thisActor, 0, 4)
    });
    html.find("#eldersp-rollable").on("click", function () {
      rollSkillCheck(thisActor, 0, 5)
    });
    html.find("#dwarven-rollable").on("click", function () {
      rollSkillCheck(thisActor, 0, 6)
    });
    html.find("#monster-rollable").on("click", function () {
      rollSkillCheck(thisActor, 0, 7)
    });
    html.find("#socialetq-rollable").on("click", function () {
      rollSkillCheck(thisActor, 0, 8)
    });
    html.find("#streetwise-rollable").on("click", function () {
      rollSkillCheck(thisActor, 0, 9)
    });
    html.find("#tactics-rollable").on("click", function () {
      rollSkillCheck(thisActor, 0, 10)
    });
    html.find("#teaching-rollable").on("click", function () {
      rollSkillCheck(thisActor, 0, 11)
    });
    html.find("#wilderness-rollable").on("click", function () {
      rollSkillCheck(thisActor, 0, 12)
    });
    //ref skills
    html.find("#brawling-rollable").on("click", function () {
      rollSkillCheck(thisActor, 1, 0)
    });
    html.find("#dodge-rollable").on("click", function () {
      rollSkillCheck(thisActor, 1, 1)
    });
    html.find("#melee-rollable").on("click", function () {
      rollSkillCheck(thisActor, 1, 2)
    });
    html.find("#riding-rollable").on("click", function () {
      rollSkillCheck(thisActor, 1, 3)
    });
    html.find("#sailing-rollable").on("click", function () {
      rollSkillCheck(thisActor, 1, 4)
    });
    html.find("#smallblades-rollable").on("click", function () {
      rollSkillCheck(thisActor, 1, 5)
    });
    html.find("#staffspear-rollable").on("click", function () {
      rollSkillCheck(thisActor, 1, 6)
    });
    html.find("#swordsmanship-rollable").on("click", function () {
      rollSkillCheck(thisActor, 1, 7)
    });
    //dex skills
    html.find("#archery-rollable").on("click", function () {
      rollSkillCheck(thisActor, 2, 0)
    });
    html.find("#athletics-rollable").on("click", function () {
      rollSkillCheck(thisActor, 2, 1)
    });
    html.find("#crossbow-rollable").on("click", function () {
      rollSkillCheck(thisActor, 2, 2)
    });
    html.find("#sleight-rollable").on("click", function () {
      rollSkillCheck(thisActor, 2, 3)
    });
    html.find("#stealth-rollable").on("click", function () {
      rollSkillCheck(thisActor, 2, 4)
    });
    //body skills
    html.find("#physique-rollable").on("click", function () {
      rollSkillCheck(thisActor, 3, 0)
    });
    html.find("#endurance-rollable").on("click", function () {
      rollSkillCheck(thisActor, 3, 1)
    });
    //emp skills
    html.find("#charisma-rollable").on("click", function () {
      rollSkillCheck(thisActor, 4, 0)
    });
    html.find("#deceit-rollable").on("click", function () {
      rollSkillCheck(thisActor, 4, 1)
    });
    html.find("#finearts-rollable").on("click", function () {
      rollSkillCheck(thisActor, 4, 2)
    });
    html.find("#gambling-rollable").on("click", function () {
      rollSkillCheck(thisActor, 4, 3)
    });
    html.find("#grooming-rollable").on("click", function () {
      rollSkillCheck(thisActor, 4, 4)
    });
    html.find("#perception-rollable").on("click", function () {
      rollSkillCheck(thisActor, 4, 5)
    });
    html.find("#leadership-rollable").on("click", function () {
      rollSkillCheck(thisActor, 4, 6)
    });
    html.find("#persuasion-rollable").on("click", function () {
      rollSkillCheck(thisActor, 4, 7)
    });
    html.find("#performance-rollable").on("click", function () {
      rollSkillCheck(thisActor, 4, 8)
    });
    html.find("#seduction-rollable").on("click", function () {
      rollSkillCheck(thisActor, 4, 9)
    });
    //cra skills
    html.find("#alchemy-rollable").on("click", function () {
      rollSkillCheck(thisActor, 5, 0)
    });
    html.find("#crafting-rollable").on("click", function () {
      rollSkillCheck(thisActor, 5, 1)
    });
    html.find("#disguise-rollable").on("click", function () {
      rollSkillCheck(thisActor, 5, 2)
    });
    html.find("#firstaid-rollable").on("click", function () {
      rollSkillCheck(thisActor, 5, 3)
    });
    html.find("#forgery-rollable").on("click", function () {
      rollSkillCheck(thisActor, 5, 4)
    });
    html.find("#picklock-rollable").on("click", function () {
      rollSkillCheck(thisActor, 5, 5)
    });
    html.find("#trapcraft-rollable").on("click", function () {
      rollSkillCheck(thisActor, 5, 6)
    });
    //will skills
    html.find("#courage-rollable").on("click", function () {
      rollSkillCheck(thisActor, 6, 0)
    });
    html.find("#hexweave-rollable").on("click", function () {
      rollSkillCheck(thisActor, 6, 1)
    });
    html.find("#intimidation-rollable").on("click", function () {
      rollSkillCheck(thisActor, 6, 2)
    });
    html.find("#spellcast-rollable").on("click", function () {
      rollSkillCheck(thisActor, 6, 3)
    });
    html.find("#resistmagic-rollable").on("click", function () {
      rollSkillCheck(thisActor, 6, 4)
    });
    html.find("#resistcoerc-rollable").on("click", function () {
      rollSkillCheck(thisActor, 6, 5)
    });
    html.find("#ritcraft-rollable").on("click", function () {
      rollSkillCheck(thisActor, 6, 6)
    });

    html.find("#homeland-select").on("change", function() {
      var newHomeland = $("#homeland-select option:selected").text();
      updateHomeland(thisActor, newHomeland);
    });

    /* ---------------DEFAULT WORLDBUILDING LISTENERS-------------- */


    // Handle rollable items.
    html.find(".items .rollable").on("click", this._onItemRoll.bind(this));

    // Handle rollable attributes.
    html.find(".attributes").on("click", "a.attribute-roll", EntitySheetHelper.onAttributeRoll.bind(this));

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

    // Update Inventory Item
    html.find('.item-edit').click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      const item = this.actor.getOwnedItem(li.data("itemId"));
      item.sheet.render(true);
    });

    // Delete Inventory Item
    html.find('.item-delete').click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      this.actor.deleteOwnedItem(li.data("itemId"));
      li.slideUp(200, () => this.render(false));
    });

    // Add draggable for macros.
    html.find(".attributes a.attribute-roll").each((i, a) => {
      a.setAttribute("draggable", true);
      a.addEventListener("dragstart", ev => {
        let dragData = ev.currentTarget.dataset;
        ev.dataTransfer.setData('text/plain', JSON.stringify(dragData));
      }, false);
    });

  }



  /* -------------------------------------------- */

  /** @override */
  async _onSubmit(event, { updateData = null, preventClose = false, preventRender = false } = {}) {
    let attr = EntitySheetHelper.onSubmit(event);

    // Submit the form if attr is true or an attr key.
    if (attr) {
      await super._onSubmit(event, { updateData: updateData, preventClose: preventClose, preventRender: preventRender });

      // If attr is a key and not just true, set a very short timeout and retrigger focus after the original element is deleted and the new one is inserted.
      if (attr !== true) {
        setTimeout(() => {
          $(`input[name="${attr}"]`).parents('.attribute').find('.attribute-value').focus();
        }, 10);
      }
    }
  }

  /* -------------------------------------------- */

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find(".sheet-body");
    const bodyHeight = position.height - 192;
    sheetBody.css("height", bodyHeight);
    return position;
  }

  /* -------------------------------------------- */

  /**
   * Listen for roll buttons on items.
   * @param {MouseEvent} event    The originating left click event
   */
  _onItemRoll(event) {
    let button = $(event.currentTarget);
    let r = new Roll(button.data('roll'), this.actor.getRollData());
    const li = button.parents(".item");
    const item = this.actor.getOwnedItem(li.data("itemId"));
    r.roll().toMessage({
      user: game.user._id,
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `<h2>${item.name}</h2><h3>${button.text()}</h3>`
    });
  }

  /** @override */
  _updateObject(event, formData) {

    // Handle attribute and group updates.
    formData = EntitySheetHelper.updateAttributes(formData, this);
    formData = EntitySheetHelper.updateGroups(formData, this);

    // Update the Actor with the new form values.
    return this.object.update(formData);
  }

}
