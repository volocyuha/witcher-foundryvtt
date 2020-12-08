
function updateHomeland(actor, newHomeland){
    let thisActor = actor;
    let oldHomeland = thisActor.data.data.general.homeland.value;
    thisActor.update({
        'data.general.homeland.value': newHomeland
    });
    console.log(thisActor);
    let newValue = 0;
    let removeSkillValue = 0;

    switch(newHomeland){
        case "Aedirn":
        case "Mahakam":
            newValue = thisActor.data.data.skills.cra.crafting.value + 1;
            thisActor.update({
                'data.skills.cra.crafting.value': newValue
            });
        break;
        case "Angren":
        case "Verden":
            newValue = thisActor.data.data.skills.int.wilderness.value + 1;
            thisActor.update({
                'data.skills.int.wilderness.value': newValue
            });
        break;
        case "Cidaris":
            newValue = thisActor.data.data.skills.ref.sailing.value + 1;
            thisActor.update({
                'data.skills.ref.sailing.value': newValue
            });
        break;
        case "Cintra":
            newValue = thisActor.data.data.skills.emp.perception.value + 1;
            thisActor.update({
                'data.skills.emp.perception.value': newValue
            });
        break;
        case "Dol Blathanna":
            newValue = thisActor.data.data.skills.int.socialetq.value + 1;
            thisActor.update({
                'data.skills.int.socialetq.value': newValue
            });
        break;
        case "Ebbing":
            newValue = thisActor.data.data.skills.int.deduction.value + 1;
            thisActor.update({
                'data.skills.int.deduction.value': newValue
            });
        break;
        case "Etolia":
        case "Skellige":
            newValue = thisActor.data.data.skills.will.courage.value + 1;
            thisActor.update({
                'data.skills.will.courage.value': newValue
            });
        break;
        case "Gemmeria":
            newValue = thisActor.data.data.skills.will.intimidation.value + 1;
            thisActor.update({
                'data.skills.will.intimidation.value': newValue
            });
        break;
        case "Gheso":
            newValue = thisActor.data.data.skills.dex.stealth.value + 1;
            thisActor.update({
                'data.skills.dex.stealth.value': newValue
            });
        break;
        case "Kaedwen":
        case "Mag Turga":
            newValue = thisActor.data.data.skills.body.endurance.value + 1;
            thisActor.update({
                'data.skills.body.endurance.value': newValue
            });
        break;
        case "Kovir":
        case "Poviss":
            newValue = thisActor.data.data.skills.int.business.value + 1;
            thisActor.update({
                'data.skills.int.business.value': newValue
            });
        break;
        case "Lyria":
        case "Rivia":
            newValue = thisActor.data.data.skills.will.resistcoerc.value + 1;
            thisActor.update({
                'data.skills.will.resistcoerc.value': newValue
            });
        break;
        case "Maecht":
            newValue = thisActor.data.data.skills.emp.charisma.value + 1;
            thisActor.update({
                'data.skills.emp.charisma.value': newValue
            });
        break;
        case "Mettina":
            newValue = thisActor.data.data.skills.ref.riding.value + 1;
            thisActor.update({
                'data.skills.ref.riding.value': newValue
            });
        break;
        case "Nazair":
            newValue = thisActor.data.data.skills.ref.brawling.value + 1;
            thisActor.update({
                'data.skills.ref.brawling.value': newValue
            });
        break;
        case "Nilfgaard":
            newValue = thisActor.data.data.skills.emp.deceit.value + 1;
            thisActor.update({
                'data.skills.emp.deceit.value': newValue
            });
        break;
        case "Redania":
        case "Vicovaro":
            newValue = thisActor.data.data.skills.int.education.value + 1;
            thisActor.update({
                'data.skills.int.education.value': newValue
            });
        break;
        case "Temeria":
            newValue = thisActor.data.data.skills.emp.charisma.value + 1;
            thisActor.update({
                'data.skills.emp.charisma.value': newValue
            });
        break;
    }

    switch(oldHomeland){
        case "aedirn":
        case "mahakam":
            removeSkillValue = thisActor.data.data.skills.cra.crafting.value - 1;
            thisActor.update({
                'data.skills.cra.crafting.value': removeSkillValue
            });
        break;
        case "angren":
        case "verden":
            removeSkillValue = thisActor.data.data.skills.int.wilderness.value - 1;
            thisActor.update({
                'data.skills.int.wilderness.value': removeSkillValue
            });
        break;
        case "cidaris":
            removeSkillValue = thisActor.data.data.skills.ref.sailing.value - 1;
            thisActor.update({
                'data.skills.ref.sailing.value': removeSkillValue
            });
        break;
        case "cintra":
            removeSkillValue = thisActor.data.data.skills.emp.perception.value - 1;
            thisActor.update({
                'data.skills.emp.perception.value': removeSkillValue
            });
        break;
        case "dolblathanna":
            removeSkillValue = thisActor.data.data.skills.int.socialetq.value - 1;
            thisActor.update({
                'data.skills.int.socialetq.value': removeSkillValue
            });
        break;
        case "ebbing":
            removeSkillValue = thisActor.data.data.skills.int.deduction.value - 1;
            thisActor.update({
                'data.skills.int.deduction.value': removeSkillValue
            });
        break;
        case "etolia":
        case "skellige":
            removeSkillValue = thisActor.data.data.skills.will.courage.value - 1;
            thisActor.update({
                'data.skills.will.courage.value': removeSkillValue
            });
        break;
        case "gemmeria":
            removeSkillValue = thisActor.data.data.skills.will.intimidation.value - 1;
            thisActor.update({
                'data.skills.will.intimidation.value': removeSkillValue
            });
        break;
        case "gheso":
            removeSkillValue = thisActor.data.data.skills.dex.stealth.value - 1;
            thisActor.update({
                'data.skills.dex.stealth.value': removeSkillValue
            });
        break;
        case "kaedwen":
        case "magturga":
            removeSkillValue = thisActor.data.data.skills.body.endurance.value - 1;
            thisActor.update({
                'data.skills.body.endurance.value': removeSkillValue
            });
        break;
        case "kovir":
        case "poviss":
            removeSkillValue = thisActor.data.data.skills.int.business.value - 1;
            thisActor.update({
                'data.skills.int.business.value': removeSkillValue
            });
        break;
        case "lyria":
        case "rivia":
            removeSkillValue = thisActor.data.data.skills.will.resistcoerc.value - 1;
            thisActor.update({
                'data.skills.will.resistcoerc.value': removeSkillValue
            });
        break;
        case "maecht":
            removeSkillValue = thisActor.data.data.skills.will.resistcoerc.value - 1;
            thisActor.update({
                'data.skills.will.resistcoerc.value': removeSkillValue
            });
        break;
        case "mettina":
            removeSkillValue = thisActor.data.data.skills.ref.riding.value - 1;
            thisActor.update({
                'data.skills.ref.riding.value': removeSkillValue
            });
        break;
        case "nazair":
            removeSkillValue = thisActor.data.data.skills.ref.brawling.value - 1;
            thisActor.update({
                'data.skills.ref.brawling.value': removeSkillValue
            });
        break;
        case "nilfgaard":
            removeSkillValue = thisActor.data.data.skills.emp.deceit.value - 1;
            thisActor.update({
                'data.skills.emp.deceit.value': removeSkillValue
            });
        break;
        case "redania":
        case "vicovaro":
            removeSkillValue = thisActor.data.data.skills.int.education.value - 1;
            thisActor.update({
                'data.skills.int.education.value': removeSkillValue
            });
        break;
        case "temeria":
            removeSkillValue = thisActor.data.data.skills.emp.charisma.value - 1;
            thisActor.update({
                'data.skills.emp.charisma.value': removeSkillValue
            });
        break;
        default:
            console.log("No previous Homeland selection.");
        break;
    }

}

export { updateHomeland };