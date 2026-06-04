import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { RecipeRewriter1_21_2$Recipe } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/rewriter/RecipeRewriter1_21_2$Recipe.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RecipeRewriter1_21_2$FurnaceRecipe extends Record implements RecipeRewriter1_21_2$Recipe {
    static SLOT_DISPLAY_ANY_FUEL: number;
    static SLOT_DISPLAY_COMPOSITE: number;
    static SLOT_DISPLAY_EMPTY: number;
    static SLOT_DISPLAY_ITEM: number;
    // private category: number;
    // private duration: number;
    // private experience: number;
    // private group: number;
    // private identifier: string;
    // private index: number;
    // private ingredient: Item[];
    // private result: Item;
    category(): number;
    duration(): number;
    equals(arg0: Object | null): boolean;
    experience(): number;
    group(): number;
    hashCode(): number;
    identifier(): string;
    index(): number;
    ingredient(): Item[];
    ingredients(): Item[][];
    recipeDisplayId(): number;
    result(): Item;
    showNotification(): boolean;
    toString(): string;
    writeRecipeDisplay(arg0: PacketWrapper): void;
}