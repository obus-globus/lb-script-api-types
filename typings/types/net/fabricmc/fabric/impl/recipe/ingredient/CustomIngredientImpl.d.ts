import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CustomIngredient } from '../../../../../../net/fabricmc/fabric/api/recipe/v1/ingredient/CustomIngredient.d.ts'
import type { CustomIngredientSerializer } from '../../../../../../net/fabricmc/fabric/api/recipe/v1/ingredient/CustomIngredientSerializer.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Ingredient } from '../../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { SlotDisplay } from '../../../../../../net/minecraft/world/item/crafting/display/SlotDisplay.d.ts'
import type { ItemLike } from '../../../../../../net/minecraft/world/level/ItemLike.d.ts'
export class CustomIngredientImpl extends Ingredient {
    static CODEC: Codec<Ingredient>;
    static CODEC: Codec<CustomIngredientSerializer<any>>;
    static CONTENTS_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Ingredient>;
    static NON_AIR_HOLDER_SET_CODEC: Codec<Holder<Item>[]>;
    static OPTIONAL_CONTENTS_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Optional<Ingredient>>;
    static TYPE_KEY: string;
    static displayForSingleItem(paramitem: Holder<Item>): SlotDisplay;
    static getSerializer(paramarg0: Identifier): CustomIngredientSerializer<any>;
    static of(paramstream: Stream<ItemLike>): Ingredient;
    static of(paramtag: Holder<Item>[]): Ingredient;
    static of(paramitemLike: ItemLike): Ingredient;
    static of(...paramitems: (Object | null)[]): Ingredient;
    static optionalIngredientToDisplay(paramingredient: Optional<Ingredient>): SlotDisplay;
    static registerSerializer(paramarg0: CustomIngredientSerializer<any>): void;
    static testOptionalIngredient(paramingredient: Optional<Ingredient>, paramstack: ItemStack): boolean;
    constructor(arg0: CustomIngredient)
    readonly customIngredient: CustomIngredient;
    readonly customMatchingItems: Holder<Item>[];
    acceptsItem(arg0: Holder<Item>): boolean;
    display(): SlotDisplay;
    equals(arg0: Object | null): boolean;
    getCustomIngredient(): CustomIngredient;
    getCustomMatchingItems(): Holder<Item>[];
    hashCode(): number;
    isEmpty(): boolean;
    items(): Stream<Holder<Item>>;
    requiresTesting(): boolean;
    test(arg0: ItemStack): boolean;
}