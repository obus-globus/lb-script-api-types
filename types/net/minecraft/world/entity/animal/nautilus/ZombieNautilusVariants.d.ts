import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ZombieNautilusVariant } from '../../../../../../net/minecraft/world/entity/animal/nautilus/ZombieNautilusVariant.d.ts'
export class ZombieNautilusVariants extends Object {
    static DEFAULT: ResourceKey<ZombieNautilusVariant>;
    static TEMPERATE: ResourceKey<ZombieNautilusVariant>;
    static WARM: ResourceKey<ZombieNautilusVariant>;
    static bootstrap(paramcontext: BootstrapContext<ZombieNautilusVariant>): void;
    constructor()
}