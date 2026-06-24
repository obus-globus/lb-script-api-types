import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { IntProvider } from '../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
export class ConstantInt extends Record implements IntProvider {
    static MAP_CODEC: MapCodec<ConstantInt>;
    static ZERO: ConstantInt;
    static of(paramvalue: number): ConstantInt;
    constructor(value: number)
    // private value: number;
    codec(): MapCodec<ConstantInt>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxInclusive(): number;
    minInclusive(): number;
    sample(random: RandomSource): number;
    toString(): string;
    value(): number;
}