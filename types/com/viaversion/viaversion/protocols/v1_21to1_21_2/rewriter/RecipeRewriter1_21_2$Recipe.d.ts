import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface RecipeRewriter1_21_2$Recipe extends Object{
    category(): number;
    group(): number;
    identifier(): string;
    index(): number;
    ingredient(): Item[];
    ingredients(): Item[][];
    recipeDisplayId(): number;
    showNotification(): boolean;
    writeRecipeDisplay(arg0: PacketWrapper): void;
}