import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { IntProvider } from '../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
export class TrapezoidInt extends Record implements IntProvider {
    static MAP_CODEC: MapCodec<TrapezoidInt>;
    static of(parammin: number, parammax: number, paramplateau: number): TrapezoidInt;
    static triangle(paramrange: number): IntProvider;
    // private maxInclusive: number;
    // private minInclusive: number;
    // private plateau: number;
    codec(): MapCodec<TrapezoidInt>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxInclusive(): number;
    minInclusive(): number;
    plateau(): number;
    sample(random: RandomSource): number;
    toString(): string;
}