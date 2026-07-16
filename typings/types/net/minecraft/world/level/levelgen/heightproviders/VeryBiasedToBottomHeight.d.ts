import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { VerticalAnchor } from '../../../../../../net/minecraft/world/level/levelgen/VerticalAnchor.d.ts'
import type { WorldGenerationContext } from '../../../../../../net/minecraft/world/level/levelgen/WorldGenerationContext.d.ts'
import type { HeightProvider } from '../../../../../../net/minecraft/world/level/levelgen/heightproviders/HeightProvider.d.ts'
import type { HeightProviderType } from '../../../../../../net/minecraft/world/level/levelgen/heightproviders/HeightProviderType.d.ts'
export class VeryBiasedToBottomHeight extends HeightProvider {
    static CODEC: MapCodec<VeryBiasedToBottomHeight>;
    static of(paramminInclusive: VerticalAnchor, parammaxInclusive: VerticalAnchor, paramoffset: number): VeryBiasedToBottomHeight;
    private constructor(minInclusive: VerticalAnchor, maxInclusive: VerticalAnchor, inner: number)
    // private inner: number;
    // private maxInclusive: VerticalAnchor;
    // private minInclusive: VerticalAnchor;
    getType(): HeightProviderType<any>;
    sample(random: RandomSource, context: WorldGenerationContext): number;
    toString(): string;
}