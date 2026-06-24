import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FoodPredicate } from '../../../../net/minecraft/advancements/predicates/FoodPredicate.d.ts'
import type { MinMaxBounds$Doubles } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Doubles.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Ints.d.ts'
export class FoodPredicate$Builder extends Object {
    static food(): FoodPredicate$Builder;
    constructor()
    // private level: MinMaxBounds$Ints;
    // private saturation: MinMaxBounds$Doubles;
    build(): FoodPredicate;
    withLevel(level: MinMaxBounds$Ints): FoodPredicate$Builder;
    withSaturation(saturation: MinMaxBounds$Doubles): FoodPredicate$Builder;
}