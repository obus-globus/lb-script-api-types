import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { SulfurCubeArchetype } from '../../../../net/minecraft/world/entity/SulfurCubeArchetype.d.ts'
export class SulfurCubeArchetypes extends Object {
    static BOUNCY: ResourceKey<SulfurCubeArchetype>;
    static EXPLOSIVE: ResourceKey<SulfurCubeArchetype>;
    static FAST_FLAT: ResourceKey<SulfurCubeArchetype>;
    static FAST_SLIDING: ResourceKey<SulfurCubeArchetype>;
    static HIGH_RESISTANCE: ResourceKey<SulfurCubeArchetype>;
    static HOT: ResourceKey<SulfurCubeArchetype>;
    static LIGHT: ResourceKey<SulfurCubeArchetype>;
    static REGULAR: ResourceKey<SulfurCubeArchetype>;
    static SLOW_BOUNCY: ResourceKey<SulfurCubeArchetype>;
    static SLOW_FLAT: ResourceKey<SulfurCubeArchetype>;
    static SLOW_SLIDING: ResourceKey<SulfurCubeArchetype>;
    static STICKY: ResourceKey<SulfurCubeArchetype>;
    static bootstrap(paramcontext: BootstrapContext<SulfurCubeArchetype>): void;
    constructor()
}