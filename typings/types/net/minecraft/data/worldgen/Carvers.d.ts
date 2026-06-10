import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ConfiguredWorldCarver } from '../../../../net/minecraft/world/level/levelgen/carver/ConfiguredWorldCarver.d.ts'
export class Carvers extends Object {
    static CANYON: ResourceKey<ConfiguredWorldCarver<Object>>;
    static CAVE: ResourceKey<ConfiguredWorldCarver<Object>>;
    static CAVE_EXTRA_UNDERGROUND: ResourceKey<ConfiguredWorldCarver<Object>>;
    static NETHER_CAVE: ResourceKey<ConfiguredWorldCarver<Object>>;
    static bootstrap(paramcontext: BootstrapContext<ConfiguredWorldCarver<Object>>): void;
    constructor()
}