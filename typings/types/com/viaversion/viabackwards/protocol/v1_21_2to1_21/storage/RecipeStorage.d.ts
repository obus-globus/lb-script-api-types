import type { Protocol1_21_2To1_21 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_2to1_21/Protocol1_21_2To1_21.d.ts'
import type { RecipeStorage$Recipe } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_2to1_21/storage/RecipeStorage$Recipe.d.ts'
import type { RecipeStorage$StoneCutterRecipe } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_2to1_21/storage/RecipeStorage$StoneCutterRecipe.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RecipeStorage extends Object implements StorableObject {
    static RECIPE_BOOK_SETTINGS: number;
    constructor(arg0: Protocol1_21_2To1_21)
    // private protocol: Protocol1_21_2To1_21;
    readonly recipeBookSettings: boolean[];
    // private recipes: RecipeStorage$Recipe[];
    // private stoneCutterRecipes: RecipeStorage$StoneCutterRecipe[];
    // private tempRecipes: RecipeStorage$Recipe[];
    // private add(arg0: RecipeStorage$Recipe): RecipeStorage$Recipe;
    clearRecipes(): void;
    lockRecipes(arg0: PacketWrapper, arg1: number[]): void;
    onRemove(): void;
    // private readFurnace(arg0: PacketWrapper): RecipeStorage$Recipe;
    // private readHolderSet(arg0: PacketWrapper): Item[];
    readRecipe(arg0: PacketWrapper): void;
    // private readShaped(arg0: PacketWrapper): RecipeStorage$Recipe;
    // private readShapeless(arg0: PacketWrapper): RecipeStorage$Recipe;
    // private readSingleSlotDisplay(arg0: PacketWrapper): Item;
    // private readSlotDisplay(arg0: PacketWrapper): Item[];
    // private readSlotDisplayList(arg0: PacketWrapper): Item[][];
    // private readSmithing(arg0: PacketWrapper): RecipeStorage$Recipe;
    // private readStoneCutter(arg0: PacketWrapper): RecipeStorage$Recipe;
    readStoneCutterRecipes(arg0: PacketWrapper): void;
    // private rewriteItemId(arg0: number): number;
    sendRecipes(arg0: UserConnection): void;
    // private sendUnlockedRecipes(arg0: UserConnection, arg1: RecipeStorage$Recipe[]): void;
    setRecipeBookSettings(arg0: boolean[]): void;
}