import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ConfiguredFeature } from '../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
export class PileFeatures extends Object {
    static PILE_HAY: ResourceKey<ConfiguredFeature<any, any>>;
    static PILE_ICE: ResourceKey<ConfiguredFeature<any, any>>;
    static PILE_MELON: ResourceKey<ConfiguredFeature<any, any>>;
    static PILE_PUMPKIN: ResourceKey<ConfiguredFeature<any, any>>;
    static PILE_SNOW: ResourceKey<ConfiguredFeature<any, any>>;
    static bootstrap(paramcontext: BootstrapContext<ConfiguredFeature<any, any>>): void;
    constructor()
}