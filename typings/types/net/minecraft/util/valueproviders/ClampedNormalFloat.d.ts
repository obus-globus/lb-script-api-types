import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { FloatProvider } from '../../../../net/minecraft/util/valueproviders/FloatProvider.d.ts'
export class ClampedNormalFloat extends Record implements FloatProvider {
    static MAP_CODEC: MapCodec<ClampedNormalFloat>;
    static of(parammean: number, paramdeviation: number, parammin: number, parammax: number): ClampedNormalFloat;
    static sample(paramrandom: RandomSource, parammean: number, paramdeviation: number, parammin: number, parammax: number): number;
    constructor(mean: number, deviation: number, min: number, max: number)
    // private deviation: number;
    // private max: number;
    // private mean: number;
    // private min: number;
    codec(): MapCodec<ClampedNormalFloat>;
    deviation(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    max(): number;
    mean(): number;
    min(): number;
    sample(random: RandomSource): number;
    toString(): string;
}