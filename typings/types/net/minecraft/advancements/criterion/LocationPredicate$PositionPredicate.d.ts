import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Doubles } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Doubles.d.ts'
export class LocationPredicate$PositionPredicate extends Record {
    static CODEC: Codec<LocationPredicate$PositionPredicate>;
    private constructor(x: MinMaxBounds$Doubles, y: MinMaxBounds$Doubles, z: MinMaxBounds$Doubles)
    // private x: MinMaxBounds$Doubles;
    // private y: MinMaxBounds$Doubles;
    // private z: MinMaxBounds$Doubles;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(x: number, y: number, z: number): boolean;
    toString(): string;
    x(): MinMaxBounds$Doubles;
    y(): MinMaxBounds$Doubles;
    z(): MinMaxBounds$Doubles;
}