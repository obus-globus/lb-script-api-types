import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { FloatProvider } from '../../../../net/minecraft/util/valueproviders/FloatProvider.d.ts'
export class TrapezoidFloat extends Record implements FloatProvider {
    static MAP_CODEC: MapCodec<TrapezoidFloat>;
    static of(parammin: number, parammax: number, paramplateau: number): TrapezoidFloat;
    constructor(min: number, max: number, plateau: number)
    // private max: number;
    // private min: number;
    // private plateau: number;
    codec(): MapCodec<TrapezoidFloat>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    max(): number;
    min(): number;
    plateau(): number;
    sample(random: RandomSource): number;
    toString(): string;
}