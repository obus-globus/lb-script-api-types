import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { CraftingBookCategory } from '../../../../../net/minecraft/world/item/crafting/CraftingBookCategory.d.ts'
import type { Recipe$BookInfo } from '../../../../../net/minecraft/world/item/crafting/Recipe$BookInfo.d.ts'
import type { Recipe$BookInfo$Constructor } from '../../../../../net/minecraft/world/item/crafting/Recipe$BookInfo$Constructor.d.ts'
export class CraftingRecipe$CraftingBookInfo extends Record implements Recipe$BookInfo<CraftingBookCategory> {
    static MAP_CODEC: MapCodec<CraftingRecipe$CraftingBookInfo>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, CraftingRecipe$CraftingBookInfo>;
    static mapCodec(paramcategoryCodec: Codec<Object>, paramdefaultCategory: Object | null, paramconstructor: (param0: Object | null, param1: Object | null) => unknown): MapCodec<Object>;
    static streamCodec(paramcategoryCodec: StreamCodec<Object, Object>, paramconstructor: (param0: Object | null, param1: Object | null) => unknown): StreamCodec<RegistryFriendlyByteBuf, Object>;
    constructor(category: CraftingBookCategory, group: string)
    // private category: CraftingBookCategory;
    // private group: string;
    category(): CraftingBookCategory;
    equals(o: Object | null): boolean;
    group(): string;
    hashCode(): number;
    toString(): string;
}