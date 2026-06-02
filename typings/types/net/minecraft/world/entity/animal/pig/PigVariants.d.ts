import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { PigVariant } from '../../../../../../net/minecraft/world/entity/animal/pig/PigVariant.d.ts'
export class PigVariants extends Object {
    static COLD: ResourceKey<PigVariant>;
    static DEFAULT: ResourceKey<PigVariant>;
    static TEMPERATE: ResourceKey<PigVariant>;
    static WARM: ResourceKey<PigVariant>;
    static bootstrap(paramcontext: BootstrapContext<PigVariant>): void;
    constructor()
}