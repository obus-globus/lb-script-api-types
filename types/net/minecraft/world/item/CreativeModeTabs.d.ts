import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { CreativeModeTab } from '../../../../net/minecraft/world/item/CreativeModeTab.d.ts'
import type { CreativeModeTab$ItemDisplayParameters } from '../../../../net/minecraft/world/item/CreativeModeTab$ItemDisplayParameters.d.ts'
export class CreativeModeTabs extends Object {
    static BUILDING_BLOCKS: ResourceKey<CreativeModeTab>;
    static CACHED_PARAMETERS: CreativeModeTab$ItemDisplayParameters;
    static COLORED_BLOCKS: ResourceKey<CreativeModeTab>;
    static COMBAT: ResourceKey<CreativeModeTab>;
    static FOOD_AND_DRINKS: ResourceKey<CreativeModeTab>;
    static FUNCTIONAL_BLOCKS: ResourceKey<CreativeModeTab>;
    static HOTBAR: ResourceKey<CreativeModeTab>;
    static INGREDIENTS: ResourceKey<CreativeModeTab>;
    static INVENTORY: ResourceKey<CreativeModeTab>;
    static NATURAL_BLOCKS: ResourceKey<CreativeModeTab>;
    static OP_BLOCKS: ResourceKey<CreativeModeTab>;
    static REDSTONE_BLOCKS: ResourceKey<CreativeModeTab>;
    static SEARCH: ResourceKey<CreativeModeTab>;
    static SPAWN_EGGS: ResourceKey<CreativeModeTab>;
    static TOOLS_AND_UTILITIES: ResourceKey<CreativeModeTab>;
    static allTabs(): CreativeModeTab[];
    static bootstrap(paramregistry: CreativeModeTab[]): CreativeModeTab;
    static getDefaultTab(): CreativeModeTab;
    static searchTab(): CreativeModeTab;
    static tabs(): CreativeModeTab[];
    static tryRebuildTabContents(paramenabledFeatures: FeatureFlagSet, paramhasPermissions: boolean, paramlookup: HolderLookup$Provider): boolean;
    static validate(): void;
    constructor()
}