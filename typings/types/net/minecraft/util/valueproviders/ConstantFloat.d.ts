import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { FloatProvider } from '../../../../net/minecraft/util/valueproviders/FloatProvider.d.ts'
export class ConstantFloat extends Record implements FloatProvider {
    static MAP_CODEC: MapCodec<ConstantFloat>;
    static ZERO: ConstantFloat;
    static of(paramvalue: number): ConstantFloat;
    constructor(value: number)
    // private value: number;
    codec(): MapCodec<ConstantFloat>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    max(): number;
    min(): number;
    sample(random: RandomSource): number;
    toString(): string;
    value(): number;
}