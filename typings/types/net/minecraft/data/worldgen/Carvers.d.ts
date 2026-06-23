import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ConfiguredWorldCarver } from '../../../../net/minecraft/world/level/levelgen/carver/ConfiguredWorldCarver.d.ts'
export class Carvers extends Object {
    static CANYON: ResourceKey<ConfiguredWorldCarver<any>>;
    static CAVE: ResourceKey<ConfiguredWorldCarver<any>>;
    static CAVE_EXTRA_UNDERGROUND: ResourceKey<ConfiguredWorldCarver<any>>;
    static NETHER_CAVE: ResourceKey<ConfiguredWorldCarver<any>>;
    static bootstrap(paramcontext: BootstrapContext<ConfiguredWorldCarver<any>>): void;
    constructor()
}