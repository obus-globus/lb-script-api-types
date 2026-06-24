import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { FoodProperties1_20_5$FoodEffect } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/FoodProperties1_20_5$FoodEffect.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class FoodProperties1_20_5 extends Record implements Copyable {
    static TYPE1_20_5: Type<FoodProperties1_20_5>;
    static TYPE1_21: Type<FoodProperties1_20_5>;
    static copy(paramarg0: Object | null): Object | null;
    constructor(nutrition: number, saturationModifier: number, canAlwaysEat: boolean, eatSeconds: number, usingConvertsTo: Item, possibleEffects: FoodProperties1_20_5$FoodEffect[])
    // private canAlwaysEat: boolean;
    // private eatSeconds: number;
    // private nutrition: number;
    // private possibleEffects: FoodProperties1_20_5$FoodEffect[];
    // private saturationModifier: number;
    // private usingConvertsTo: Item;
    canAlwaysEat(): boolean;
    copy(): FoodProperties1_20_5;
    eatSeconds(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    nutrition(): number;
    possibleEffects(): FoodProperties1_20_5$FoodEffect[];
    saturationModifier(): number;
    toString(): string;
    usingConvertsTo(): Item;
}