import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { CowVariant } from '../../../../../../net/minecraft/world/entity/animal/cow/CowVariant.d.ts'
export class CowVariants extends Object {
    static COLD: ResourceKey<CowVariant>;
    static DEFAULT: ResourceKey<CowVariant>;
    static TEMPERATE: ResourceKey<CowVariant>;
    static WARM: ResourceKey<CowVariant>;
    static bootstrap(paramcontext: BootstrapContext<CowVariant>): void;
    constructor()
}