import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { BootstrapContext } from '../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { PigSoundVariant } from '../../../../../../net/minecraft/world/entity/animal/pig/PigSoundVariant.d.ts'
export class PigSoundVariants extends Object {
    static BIG: ResourceKey<PigSoundVariant>;
    static CLASSIC: ResourceKey<PigSoundVariant>;
    static MINI: ResourceKey<PigSoundVariant>;
    static bootstrap(paramcontext: BootstrapContext<PigSoundVariant>): void;
    static pickRandomSoundVariant(paramregistryAccess: RegistryAccess, paramrandom: RandomSource): Holder<PigSoundVariant>;
    constructor()
}