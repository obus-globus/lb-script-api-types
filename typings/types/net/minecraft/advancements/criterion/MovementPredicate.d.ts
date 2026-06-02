import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Doubles } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Doubles.d.ts'
export class MovementPredicate extends Record {
    static CODEC: Codec<MovementPredicate>;
    static fallDistance(parambounds: MinMaxBounds$Doubles): MovementPredicate;
    static horizontalSpeed(parambounds: MinMaxBounds$Doubles): MovementPredicate;
    static speed(parambounds: MinMaxBounds$Doubles): MovementPredicate;
    static verticalSpeed(parambounds: MinMaxBounds$Doubles): MovementPredicate;
    constructor(x: MinMaxBounds$Doubles, y: MinMaxBounds$Doubles, z: MinMaxBounds$Doubles, speed: MinMaxBounds$Doubles, horizontalSpeed: MinMaxBounds$Doubles, verticalSpeed: MinMaxBounds$Doubles, fallDistance: MinMaxBounds$Doubles)
    // private fallDistance: MinMaxBounds$Doubles;
    // private horizontalSpeed: MinMaxBounds$Doubles;
    // private speed: MinMaxBounds$Doubles;
    // private verticalSpeed: MinMaxBounds$Doubles;
    // private x: MinMaxBounds$Doubles;
    // private y: MinMaxBounds$Doubles;
    // private z: MinMaxBounds$Doubles;
    equals(o: Object | null): boolean;
    fallDistance(): MinMaxBounds$Doubles;
    hashCode(): number;
    horizontalSpeed(): MinMaxBounds$Doubles;
    matches(x: number, y: number, z: number, fallDistance: number): boolean;
    speed(): MinMaxBounds$Doubles;
    toString(): string;
    verticalSpeed(): MinMaxBounds$Doubles;
    x(): MinMaxBounds$Doubles;
    y(): MinMaxBounds$Doubles;
    z(): MinMaxBounds$Doubles;
}