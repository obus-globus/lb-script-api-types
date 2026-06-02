import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { BootstrapContext } from '../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WolfSoundVariant } from '../../../../../../net/minecraft/world/entity/animal/wolf/WolfSoundVariant.d.ts'
export class WolfSoundVariants extends Object {
    static ANGRY: ResourceKey<WolfSoundVariant>;
    static BIG: ResourceKey<WolfSoundVariant>;
    static CLASSIC: ResourceKey<WolfSoundVariant>;
    static CUTE: ResourceKey<WolfSoundVariant>;
    static GRUMPY: ResourceKey<WolfSoundVariant>;
    static PUGLIN: ResourceKey<WolfSoundVariant>;
    static SAD: ResourceKey<WolfSoundVariant>;
    static bootstrap(paramcontext: BootstrapContext<WolfSoundVariant>): void;
    static pickRandomSoundVariant(paramregistryAccess: RegistryAccess, paramrandom: RandomSource): Holder<WolfSoundVariant>;
    constructor()
}