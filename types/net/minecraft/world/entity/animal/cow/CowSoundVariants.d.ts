import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { BootstrapContext } from '../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { CowSoundVariant } from '../../../../../../net/minecraft/world/entity/animal/cow/CowSoundVariant.d.ts'
export class CowSoundVariants extends Object {
    static CLASSIC: ResourceKey<CowSoundVariant>;
    static MOODY: ResourceKey<CowSoundVariant>;
    static bootstrap(paramcontext: BootstrapContext<CowSoundVariant>): void;
    static pickRandomSoundVariant(paramregistryAccess: RegistryAccess, paramrandom: RandomSource): Holder<CowSoundVariant>;
    constructor()
}