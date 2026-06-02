import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { BootstrapContext } from '../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ChickenSoundVariant } from '../../../../../../net/minecraft/world/entity/animal/chicken/ChickenSoundVariant.d.ts'
export class ChickenSoundVariants extends Object {
    static CLASSIC: ResourceKey<ChickenSoundVariant>;
    static PICKY: ResourceKey<ChickenSoundVariant>;
    static bootstrap(paramcontext: BootstrapContext<ChickenSoundVariant>): void;
    static pickRandomSoundVariant(paramregistryAccess: RegistryAccess, paramrandom: RandomSource): Holder<ChickenSoundVariant>;
    constructor()
}