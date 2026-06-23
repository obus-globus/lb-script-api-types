import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Type } from '../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { RecipeRewriter$RecipeConsumer } from '../../../../com/viaversion/viaversion/rewriter/RecipeRewriter$RecipeConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RecipeRewriter<C extends ClientboundPacketType> extends Object {
    constructor(arg0: Protocol<C, any, any, any>)
    // private protocol: Protocol<C, any, any, any>;
    // private recipeHandlers: { [key: string]: (param0: PacketWrapper) => void };
    handleCraftingShaped(arg0: PacketWrapper): void;
    handleCraftingShapeless(arg0: PacketWrapper): void;
    handleIngredient(arg0: PacketWrapper): void;
    handleIngredients(arg0: PacketWrapper): void;
    handleRecipeType(arg0: PacketWrapper, arg1: string): void;
    handleResult(arg0: PacketWrapper): void;
    handleSimpleRecipe(arg0: PacketWrapper): void;
    handleSmelting(arg0: PacketWrapper): void;
    handleSmithing(arg0: PacketWrapper): void;
    handleSmithingTransform(arg0: PacketWrapper): void;
    handleSmithingTrim(arg0: PacketWrapper): void;
    handleStonecutting(arg0: PacketWrapper): void;
    itemArrayType(): Type<Item[]>;
    itemType(): Type<Item>;
    mappedItemArrayType(): Type<Item[]>;
    mappedItemType(): Type<Item>;
    register(arg0: C): void;
    register1_20_5(arg0: C): void;
    rewrite(arg0: UserConnection, arg1: Item): Item;
    rewrite(arg0: number): number;
}