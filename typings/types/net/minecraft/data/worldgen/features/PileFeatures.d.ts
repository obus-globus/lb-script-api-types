import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ConfiguredFeature } from '../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
export class PileFeatures extends Object {
    static PILE_HAY: ResourceKey<ConfiguredFeature<Object, Object>>;
    static PILE_ICE: ResourceKey<ConfiguredFeature<Object, Object>>;
    static PILE_MELON: ResourceKey<ConfiguredFeature<Object, Object>>;
    static PILE_PUMPKIN: ResourceKey<ConfiguredFeature<Object, Object>>;
    static PILE_SNOW: ResourceKey<ConfiguredFeature<Object, Object>>;
    static bootstrap(paramcontext: BootstrapContext<ConfiguredFeature<Object, Object>>): void;
    constructor()
}