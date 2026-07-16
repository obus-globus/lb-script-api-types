import type { PotionEffect } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/PotionEffect.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class FoodProperties1_20_5$FoodEffect extends Record {
    static ARRAY_TYPE: Type<FoodProperties1_20_5$FoodEffect[]>;
    static TYPE: Type<FoodProperties1_20_5$FoodEffect>;
    constructor(effect: PotionEffect, probability: number)
    // private effect: PotionEffect;
    // private probability: number;
    effect(): PotionEffect;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    probability(): number;
    toString(): string;
}