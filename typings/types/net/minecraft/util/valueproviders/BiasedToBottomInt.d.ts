import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { IntProvider } from '../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
export class BiasedToBottomInt extends Record implements IntProvider {
    static MAP_CODEC: MapCodec<BiasedToBottomInt>;
    static of(paramminInclusive: number, parammaxInclusive: number): BiasedToBottomInt;
    // private maxInclusive: number;
    // private minInclusive: number;
    codec(): MapCodec<BiasedToBottomInt>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxInclusive(): number;
    minInclusive(): number;
    sample(random: RandomSource): number;
    toString(): string;
}