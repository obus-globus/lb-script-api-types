import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { HolderSet } from '../../../../../../com/viaversion/viaversion/api/minecraft/HolderSet.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { RecipeRewriter1_20_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/rewriter/RecipeRewriter1_20_3.d.ts'
import type { ClientboundPacket1_21 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/packet/ClientboundPacket1_21.d.ts'
import type { RecipeRewriter1_21_2$Recipe } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/rewriter/RecipeRewriter1_21_2$Recipe.d.ts'
import type { RecipeRewriter1_21_2$StoneCutterRecipe } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/rewriter/RecipeRewriter1_21_2$StoneCutterRecipe.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RecipeRewriter1_21_2 extends RecipeRewriter1_20_3<ClientboundPacket1_21> implements StorableObject {
    constructor(arg0: Protocol<ClientboundPacket1_21, any, any, any>)
    readonly currentRecipeIdentifier: string;
    // private recipeGroups: JavaMap<any, any>;
    // private recipeInputs: JavaMap<string, (Object | null)[]>;
    // private recipes: RecipeRewriter1_21_2$Recipe[];
    // private recipesByKey: JavaMap<string, RecipeRewriter1_21_2$Recipe>;
    // private stoneCutterRecipes: RecipeRewriter1_21_2$StoneCutterRecipe[];
    // private addRecipe(arg0: RecipeRewriter1_21_2$Recipe): void;
    finalizeRecipes(): void;
    handleCraftingShaped(arg0: PacketWrapper): void;
    handleCraftingShapeless(arg0: PacketWrapper): void;
    handleSimpleRecipe(arg0: PacketWrapper): void;
    handleSmelting(arg0: PacketWrapper): void;
    handleSmelting(arg0: string, arg1: PacketWrapper): void;
    handleSmithingTransform(arg0: PacketWrapper): void;
    handleSmithingTrim(arg0: PacketWrapper): void;
    handleStonecutting(arg0: PacketWrapper): void;
    onRemove(): void;
    // private readIngredient(arg0: PacketWrapper): Item[];
    // private readRecipeGroup(arg0: PacketWrapper): number;
    // private readRecipeInputs(arg0: string, arg1: PacketWrapper): Item[];
    recipe(arg0: number): RecipeRewriter1_21_2$Recipe;
    recipe(arg0: string): RecipeRewriter1_21_2$Recipe;
    setCurrentRecipeIdentifier(arg0: string): void;
    toHolderSet(arg0: Item[]): HolderSet;
    writeUpdateRecipeInputs(arg0: PacketWrapper): void;
}