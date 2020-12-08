/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {

  // Define template paths to load
  const templatePaths = [
  "systems/wtrpg/templates/actors/parts/character-header.html",
  "systems/wtrpg/templates/actors/parts/tab-character-stats.html",
  "systems/wtrpg/templates/actors/parts/tab-character-abilities.html",
  "systems/wtrpg/templates/actors/parts/tab-character-magic.html",
  "systems/wtrpg/templates/actors/parts/tab-character-inventory.html",
  "systems/wtrpg/templates/actors/parts/tab-character-background.html",
  "systems/wtrpg/templates/actors/parts/tab-character-combat.html"
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};