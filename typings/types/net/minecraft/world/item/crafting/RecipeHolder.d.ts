import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
export class RecipeHolder<T extends Recipe<any>> extends Record {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, RecipeHolder<any>>;
    constructor(id: ResourceKey<Recipe<any>>, value: T)
    // private id: ResourceKey<Recipe<any>>;
    // private value: T;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    id(): ResourceKey<Recipe<any>>;
    toString(): string;
    value(): T;
}