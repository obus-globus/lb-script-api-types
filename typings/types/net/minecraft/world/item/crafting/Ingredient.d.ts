import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CustomIngredient } from '../../../../../net/fabricmc/fabric/api/recipe/v1/ingredient/CustomIngredient.d.ts'
import type { FabricIngredient } from '../../../../../net/fabricmc/fabric/api/recipe/v1/ingredient/FabricIngredient.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StackedContents$IngredientInfo } from '../../../../../net/minecraft/world/entity/player/StackedContents$IngredientInfo.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { SlotDisplay } from '../../../../../net/minecraft/world/item/crafting/display/SlotDisplay.d.ts'
import type { ItemLike } from '../../../../../net/minecraft/world/level/ItemLike.d.ts'
export class Ingredient extends Object implements Predicate<ItemStack>, FabricIngredient, StackedContents$IngredientInfo<Holder<Item>> {
    static CODEC: Codec<Ingredient>;
    static CONTENTS_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Ingredient>;
    static NON_AIR_HOLDER_SET_CODEC: Codec<Holder<Item>[]>;
    static OPTIONAL_CONTENTS_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Optional<Ingredient>>;
    static displayForSingleItem(paramitem: Holder<Item>): SlotDisplay;
    static isEqual<T extends unknown>(paramarg0: Object): (param0: T) => boolean;
    static not<T extends unknown>(paramarg0: (param0: Object) => boolean): (param0: T) => boolean;
    static of(paramstream: Stream<ItemLike>): Ingredient;
    static of(paramtag: Holder<Item>[]): Ingredient;
    static of(paramitemLike: ItemLike): Ingredient;
    static of(...paramitems: ItemLike[]): Ingredient;
    static optionalIngredientToDisplay(paramingredient: Optional<Ingredient>): SlotDisplay;
    static testOptionalIngredient(paramingredient: Optional<Ingredient>, paramstack: ItemStack): boolean;
    constructor(values: Holder<Item>[])
    // private values: Holder<Item>[];
    acceptsItem(item: Holder<Item>): boolean;
    and(arg0: (param0: ItemStack) => boolean): (param0: ItemStack) => boolean;
    display(): SlotDisplay;
    equals(o: Object | null): boolean;
    getCustomIngredient(): CustomIngredient;
    hashCode(): number;
    isEmpty(): boolean;
    items(): Stream<Holder<Item>>;
    negate(): (param0: ItemStack) => boolean;
    or(arg0: (param0: ItemStack) => boolean): (param0: ItemStack) => boolean;
    requiresTesting(): boolean;
    test(input: ItemStack): boolean;
}