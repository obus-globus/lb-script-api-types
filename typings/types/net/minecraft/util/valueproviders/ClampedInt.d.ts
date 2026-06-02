import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { IntProvider } from '../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
export class ClampedInt extends Record implements IntProvider {
    static MAP_CODEC: MapCodec<ClampedInt>;
    static of(paramsource: IntProvider, paramminInclusive: number, parammaxInclusive: number): ClampedInt;
    // private maxInclusive: number;
    // private minInclusive: number;
    // private source: IntProvider;
    codec(): MapCodec<ClampedInt>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxInclusive(): number;
    minInclusive(): number;
    sample(random: RandomSource): number;
    source(): IntProvider;
    toString(): string;
}