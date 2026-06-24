import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { IntProvider } from '../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
export class ClampedNormalInt extends Record implements IntProvider {
    static MAP_CODEC: MapCodec<ClampedNormalInt>;
    static of(parammean: number, paramdeviation: number, paramminInclusive: number, parammaxInclusive: number): ClampedNormalInt;
    static sample(paramrandom: RandomSource, parammean: number, paramdeviation: number, paramminInclusive: number, parammaxInclusive: number): number;
    constructor(mean: number, deviation: number, minInclusive: number, maxInclusive: number)
    // private deviation: number;
    // private maxInclusive: number;
    // private mean: number;
    // private minInclusive: number;
    codec(): MapCodec<ClampedNormalInt>;
    deviation(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxInclusive(): number;
    mean(): number;
    minInclusive(): number;
    sample(random: RandomSource): number;
    toString(): string;
}