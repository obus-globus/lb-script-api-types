import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WorldGenerationContext } from '../../../../../../net/minecraft/world/level/levelgen/WorldGenerationContext.d.ts'
import type { HeightProviderType } from '../../../../../../net/minecraft/world/level/levelgen/heightproviders/HeightProviderType.d.ts'
export abstract class HeightProvider extends Object {
    static CODEC: Codec<HeightProvider>;
    constructor()
    getType(): HeightProviderType<Object>;
    sample(random: RandomSource, heightAccessor: WorldGenerationContext): number;
}