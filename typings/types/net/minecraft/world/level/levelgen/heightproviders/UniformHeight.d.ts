import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { VerticalAnchor } from '../../../../../../net/minecraft/world/level/levelgen/VerticalAnchor.d.ts'
import type { WorldGenerationContext } from '../../../../../../net/minecraft/world/level/levelgen/WorldGenerationContext.d.ts'
import type { HeightProvider } from '../../../../../../net/minecraft/world/level/levelgen/heightproviders/HeightProvider.d.ts'
import type { HeightProviderType } from '../../../../../../net/minecraft/world/level/levelgen/heightproviders/HeightProviderType.d.ts'
export class UniformHeight extends HeightProvider {
    static CODEC: Codec<HeightProvider>;
    static CODEC: MapCodec<UniformHeight>;
    static of(paramminInclusive: VerticalAnchor, parammaxInclusive: VerticalAnchor): UniformHeight;
    private constructor(minInclusive: VerticalAnchor, maxInclusive: VerticalAnchor)
    // private maxInclusive: VerticalAnchor;
    // private minInclusive: VerticalAnchor;
    // private warnedFor: (Object | null)[];
    getType(): HeightProviderType<Object>;
    sample(random: RandomSource, context: WorldGenerationContext): number;
    toString(): string;
}