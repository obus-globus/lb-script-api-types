import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ChickenVariant } from '../../../../../../net/minecraft/world/entity/animal/chicken/ChickenVariant.d.ts'
export class ChickenVariants extends Object {
    static COLD: ResourceKey<ChickenVariant>;
    static DEFAULT: ResourceKey<ChickenVariant>;
    static TEMPERATE: ResourceKey<ChickenVariant>;
    static WARM: ResourceKey<ChickenVariant>;
    static bootstrap(paramcontext: BootstrapContext<ChickenVariant>): void;
    constructor()
}