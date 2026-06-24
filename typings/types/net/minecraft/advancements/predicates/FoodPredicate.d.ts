import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Doubles } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Doubles.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Ints.d.ts'
import type { FoodData } from '../../../../net/minecraft/world/food/FoodData.d.ts'
export class FoodPredicate extends Record {
    static ANY: FoodPredicate;
    static CODEC: Codec<FoodPredicate>;
    constructor(level: MinMaxBounds$Ints, saturation: MinMaxBounds$Doubles)
    // private level: MinMaxBounds$Ints;
    // private saturation: MinMaxBounds$Doubles;
    equals(o: Object | null): boolean;
    hashCode(): number;
    level(): MinMaxBounds$Ints;
    matches(food: FoodData): boolean;
    saturation(): MinMaxBounds$Doubles;
    toString(): string;
}