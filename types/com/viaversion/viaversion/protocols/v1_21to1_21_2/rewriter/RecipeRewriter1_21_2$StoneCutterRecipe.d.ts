import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RecipeRewriter1_21_2$StoneCutterRecipe extends Record {
    // private group: number;
    // private identifier: string;
    // private ingredient: Item[];
    // private result: Item;
    equals(arg0: Object | null): boolean;
    group(): number;
    hashCode(): number;
    identifier(): string;
    ingredient(): Item[];
    recipeDisplayId(): number;
    result(): Item;
    toString(): string;
    writeRecipeDisplay(arg0: PacketWrapper): void;
}