import { CHAT_PORTRAIT_MODULE_NAME } from "./settings.js";
export let ImageReplacerImpl = {};
/**
 * based on https://github.com/game-icons/icons/issues/516
 */
export const ImageReplacerInit = function () {
    // if(game.i18n.lang=="en"){
    //     ImageReplacerImpl = imageReplacerEn;
    // }
    // else if(game.i18n.lang=="ko"){
    //     ImageReplacerImpl = imageReplacerKo;
    // }
    // // TODO OTHER LANGUAGE
    // else{
    //     ImageReplacerImpl = imageReplacerEn;
    // }
    ImageReplacerImpl = imageReplacerUniversal;
    return ImageReplacerImpl;
};
export const imageReplacerUniversal = {
    // =======================================================================
    // dnd5e
    // =======================================================================
    "DND5E.DamageRoll": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/damage_roll.svg`,
    "DND5E.AttackRoll": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/attack_roll.svg`,
    "DND5E.AbilityStr": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/strength.svg`,
    "DND5E.AbilityDex": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/dexterity.svg`,
    "DND5E.AbilityCon": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/constitution.svg`,
    "DND5E.AbilityInt": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/intelligence.svg`,
    "DND5E.AbilityWis": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/wisdom.svg`,
    "DND5E.AbilityCha": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/charisma.svg`,
    "DND5E.Initiative": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/initiative.svg`,
    "DND5E.SkillAcr": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/acrobatics.svg`,
    "DND5E.SkillAni": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/animal_handling.svg`,
    "DND5E.SkillArc": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/arcana.svg`,
    "DND5E.SkillAth": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/athletics.svg`,
    "DND5E.SkillDec": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/deception.svg`,
    "DND5E.SkillHis": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/history.svg`,
    "DND5E.SkillIns": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/insight.svg`,
    "DND5E.SkillItm": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/intimidation.svg`,
    "DND5E.SkillInv": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/investigation.svg`,
    "DND5E.SkillMed": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/medicine.svg`,
    "DND5E.SkillNat": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/nature.svg`,
    "DND5E.SkillPrc": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/perception.svg`,
    "DND5E.SkillPrf": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/performance.svg`,
    "DND5E.SkillPer": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/persuasion.svg`,
    "DND5E.SkillRel": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/religion.svg`,
    "DND5E.SkillSlt": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/sleight_of_hand.svg`,
    "DND5E.SkillSte": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/stealth.svg`,
    "DND5E.SkillSur": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/survival.svg`,
    "DND5E.ToolArtisans": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/artisan_s_tools.svg`,
    "DND5E.ToolDisguiseKit": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/disguise_kit.svg`,
    "DND5E.ToolForgeryKit": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/forgery_kit`,
    "DND5E.ToolGamingSet": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/gaming_set.svg`,
    "DND5E.ToolHerbalismKit": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/herbalism_kit`,
    "DND5E.ToolMusicalInstrument": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/musical_instrument.svg`,
    "DND5E.ToolNavigators": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/navigator_s_tools.svg`,
    "DND5E.ToolPoisonersKit": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/poisoner_s_kit.svg`,
    "DND5E.ToolThieves": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/thieves_tools.svg`,
    "DND5E.ShortRest": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/short_rest.svg`,
    "DND5E.LongRest": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/long_rest.svg`,
    "DND5E.DeathSave": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/death_saves.svg`,
    // TODO CONDITION I JUST DON'T KNOW HO CAN BE USEFUL
    // "DND5E.ConBlinded": "Blinded",
    // "DND5E.ConCharmed": "Charmed",
    // "DND5E.ConDeafened": "Deafened",
    // "DND5E.ConDiseased": "Diseased",
    // "DND5E.ConExhaustion": "Exhaustion",
    // "DND5E.ConFrightened": "Frightened",
    // "DND5E.ConGrappled": "Grappled",
    // "DND5E.ConImm": "Condition Immunities",
    // "DND5E.ConIncapacitated": "Incapacitated",
    // "DND5E.ConInvisible": "Invisible",
    // "DND5E.ConParalyzed": "Paralyzed",
    // "DND5E.ConPetrified": "Petrified",
    // "DND5E.ConPoisoned": "Poisoned",
    // "DND5E.ConProne": "Prone",
    // "DND5E.ConRestrained": "Restrained",
    // "DND5E.ConStunned": "Stunned",
    // "DND5E.ConUnconscious": "Unconscious",
    // "DND5E.Concentration": "Concentration",
};
export const imageReplacerDamageType = {
    "DND5E.DamageAcid": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/acid.svg`,
    "DND5E.DamageBludgeoning": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/bludgeoning.svg`,
    "DND5E.DamageCold": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/cold.svg`,
    "DND5E.DamageFire": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/fire.svg`,
    "DND5E.DamageForce": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/force.svg`,
    "DND5E.DamageLightning": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/lightning.svg`,
    "DND5E.DamageNecrotic": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/necrotic.svg`,
    "DND5E.DamagePiercing": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/piercing.svg`,
    "DND5E.DamagePhysical": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/non_magical_physical.svg`,
    "DND5E.DamagePoison": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/poison.svg`,
    "DND5E.DamagePsychic": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/psychic.svg`,
    "DND5E.DamageRadiant": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/radiant.svg`,
    "DND5E.DamageSlashing": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/slashing.svg`,
    "DND5E.DamageThunder": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/thunder.svg`,
};
export const imageReplacerWeaponProperties = {
    "DND5E.WeaponPropertiesAda": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/adamantine.svg`,
    "DND5E.WeaponPropertiesAmm": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/ammunition.svg`,
    "DND5E.WeaponPropertiesFin": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/finesse.svg`,
    "DND5E.WeaponPropertiesFir": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/firearm.svg`,
    "DND5E.WeaponPropertiesFoc": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/focus.svg`,
    "DND5E.WeaponPropertiesHvy": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/heavy.svg`,
    "DND5E.WeaponPropertiesLgt": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/light.svg`,
    "DND5E.WeaponPropertiesLod": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/loading.svg`,
    "DND5E.WeaponPropertiesMgc": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/magical.svg`,
    "DND5E.WeaponPropertiesRch": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/reach.svg`,
    "DND5E.WeaponPropertiesRel": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/reload.svg`,
    "DND5E.WeaponPropertiesRet": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/returning.svg`,
    "DND5E.WeaponPropertiesSil": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/silvered.svg`,
    "DND5E.WeaponPropertiesSpc": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/special.svg`,
    "DND5E.WeaponPropertiesThr": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/thrown.svg`,
    "DND5E.WeaponPropertiesTwo": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/two-Handed.svg`,
    "DND5E.WeaponPropertiesVer": `/modules/${CHAT_PORTRAIT_MODULE_NAME}/assets/versatile.svg`,
};
