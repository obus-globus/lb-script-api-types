import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Doubles } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Doubles.d.ts'
export class DistancePredicate extends Record {
    static CODEC: Codec<DistancePredicate>;
    static absolute(paramabsolute: MinMaxBounds$Doubles): DistancePredicate;
    static horizontal(paramhorizontal: MinMaxBounds$Doubles): DistancePredicate;
    static vertical(paramy: MinMaxBounds$Doubles): DistancePredicate;
    constructor(x: MinMaxBounds$Doubles, y: MinMaxBounds$Doubles, z: MinMaxBounds$Doubles, horizontal: MinMaxBounds$Doubles, absolute: MinMaxBounds$Doubles)
    // private absolute: MinMaxBounds$Doubles;
    // private horizontal: MinMaxBounds$Doubles;
    // private x: MinMaxBounds$Doubles;
    // private y: MinMaxBounds$Doubles;
    // private z: MinMaxBounds$Doubles;
    absolute(): MinMaxBounds$Doubles;
    equals(o: Object | null): boolean;
    hashCode(): number;
    horizontal(): MinMaxBounds$Doubles;
    matches(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): boolean;
    toString(): string;
    x(): MinMaxBounds$Doubles;
    y(): MinMaxBounds$Doubles;
    z(): MinMaxBounds$Doubles;
}