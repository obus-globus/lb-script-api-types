import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { BootstrapContext } from '../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { CatSoundVariant } from '../../../../../../net/minecraft/world/entity/animal/feline/CatSoundVariant.d.ts'
export class CatSoundVariants extends Object {
    static CLASSIC: ResourceKey<CatSoundVariant>;
    static ROYAL: ResourceKey<CatSoundVariant>;
    static bootstrap(paramcontext: BootstrapContext<CatSoundVariant>): void;
    static pickRandomSoundVariant(paramregistryAccess: RegistryAccess, paramrandom: RandomSource): Holder<CatSoundVariant>;
    constructor()
}