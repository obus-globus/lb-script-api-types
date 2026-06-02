import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { RecipeDisplay } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
export class RecipeDisplay$Type<T extends RecipeDisplay> extends Record {
    constructor(codec: MapCodec<T>, streamCodec: StreamCodec<RegistryFriendlyByteBuf, T>)
    // private codec: MapCodec<T>;
    // private streamCodec: StreamCodec<RegistryFriendlyByteBuf, T>;
    codec(): MapCodec<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    streamCodec(): StreamCodec<RegistryFriendlyByteBuf, T>;
    toString(): string;
}