function rollPunchKick(actor, whichRoll){
    let thisActor = actor;
    let rollString = "";
    let type = "";

    if(whichRoll == 0){
        rollString = thisActor.data.data.derivedstats.punch.value;
        type = game.i18n.localize("WITCHER.AbbrPunch");
    }
    else{
        rollString = thisActor.data.data.derivedstats.kick.value;
        type = game.i18n.localize("WITCHER.AbbrKick");
    }

    new Dialog({
        title: `Punch or Kick Roll`, 
        content: ``,
        buttons: {
          punchOrKick: {
            label: `Damage`, 
            callback: (html) => {
              let roll = new Roll(rollString).roll();
              roll.toMessage({
                rollMode: 'roll',
                speaker: {alias: thisActor.data.data.general.name},
                flavor: `${type} Damage, Non-Lethal`,
              })      
            }
          },
          close: {
            label: "Close"
          }
        }
      }).render(true)  
}

function rollInitiative(actor){

}

/*
@param {Actor} actor
*/
function rollStunSave(actor){

}

export { rollPunchKick, rollInitiative, rollStunSave };