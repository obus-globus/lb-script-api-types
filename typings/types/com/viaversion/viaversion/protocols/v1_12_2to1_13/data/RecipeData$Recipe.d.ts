import type { DataItem } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/DataItem.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RecipeData$Recipe extends Record {
    constructor(type: string, group: string, width: number, height: number, experience: number, cookingTime: number, ingredient: DataItem[], ingredients: DataItem[][], result: DataItem)
    // private cookingTime: number;
    // private experience: number;
    // private group: string;
    // private height: number;
    // private ingredient: DataItem[];
    // private ingredients: DataItem[][];
    // private result: DataItem;
    // private type: string;
    // private width: number;
    cookingTime(): number;
    equals(arg0: Object | null): boolean;
    experience(): number;
    group(): string;
    hashCode(): number;
    height(): number;
    ingredient(): DataItem[];
    ingredients(): DataItem[][];
    result(): DataItem;
    toString(): string;
    type(): string;
    width(): number;
}