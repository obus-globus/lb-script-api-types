import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { BootstrapContext } from '../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { LevelStem } from '../../../../../../net/minecraft/world/level/dimension/LevelStem.d.ts'
import type { WorldDimensions } from '../../../../../../net/minecraft/world/level/levelgen/WorldDimensions.d.ts'
import type { WorldPreset } from '../../../../../../net/minecraft/world/level/levelgen/presets/WorldPreset.d.ts'
export class WorldPresets extends Object {
    static AMPLIFIED: ResourceKey<WorldPreset>;
    static DEBUG: ResourceKey<WorldPreset>;
    static FLAT: ResourceKey<WorldPreset>;
    static LARGE_BIOMES: ResourceKey<WorldPreset>;
    static NORMAL: ResourceKey<WorldPreset>;
    static SINGLE_BIOME_SURFACE: ResourceKey<WorldPreset>;
    static bootstrap(paramcontext: BootstrapContext<WorldPreset>): void;
    static createFlatWorldDimensions(paramregistries: HolderLookup$Provider): WorldDimensions;
    static createNormalWorldDimensions(paramregistries: HolderLookup$Provider): WorldDimensions;
    static fromSettings(paramdimensions: WorldDimensions): Optional<ResourceKey<WorldPreset>>;
    static getNormalOverworld(paramregistries: HolderLookup$Provider): LevelStem;
    constructor()
}