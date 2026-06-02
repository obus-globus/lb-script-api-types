import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class Carvers extends Object {
    static CANYON: ResourceKey<Object>;
    static CAVE: ResourceKey<Object>;
    static CAVE_EXTRA_UNDERGROUND: ResourceKey<Object>;
    static NETHER_CAVE: ResourceKey<Object>;
    static bootstrap(paramcontext: BootstrapContext<Object>): void;
    constructor()
}