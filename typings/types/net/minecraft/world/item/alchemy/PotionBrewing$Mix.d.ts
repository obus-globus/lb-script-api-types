import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
export class PotionBrewing$Mix<T extends Object | number | string | boolean> extends Record {
    constructor(from: Holder<T>, ingredient: Ingredient, to: Holder<T>)
    // private from: Holder<T>;
    // private ingredient: Ingredient;
    // private to: Holder<T>;
    equals(o: Object | null): boolean;
    from(): Holder<T>;
    hashCode(): number;
    ingredient(): Ingredient;
    to(): Holder<T>;
    toString(): string;
}