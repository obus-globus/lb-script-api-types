import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { FlatLevelGeneratorPreset } from '../../../../../../net/minecraft/world/level/levelgen/flat/FlatLevelGeneratorPreset.d.ts'
export class FlatLevelGeneratorPresets extends Object {
    static BOTTOMLESS_PIT: ResourceKey<FlatLevelGeneratorPreset>;
    static CLASSIC_FLAT: ResourceKey<FlatLevelGeneratorPreset>;
    static DESERT: ResourceKey<FlatLevelGeneratorPreset>;
    static OVERWORLD: ResourceKey<FlatLevelGeneratorPreset>;
    static REDSTONE_READY: ResourceKey<FlatLevelGeneratorPreset>;
    static SNOWY_KINGDOM: ResourceKey<FlatLevelGeneratorPreset>;
    static THE_VOID: ResourceKey<FlatLevelGeneratorPreset>;
    static TUNNELERS_DREAM: ResourceKey<FlatLevelGeneratorPreset>;
    static WATER_WORLD: ResourceKey<FlatLevelGeneratorPreset>;
    static bootstrap(paramcontext: BootstrapContext<FlatLevelGeneratorPreset>): void;
    constructor()
}