import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { RecipeHolder } from '../../../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { RecipeSerializer } from '../../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
export class ClientboundRecipeSyncPayload$Entry extends Record {
    static CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundRecipeSyncPayload$Entry>;
    constructor(serializer: RecipeSerializer<Object>, recipes: RecipeHolder<Object>[])
    // private recipes: RecipeHolder<Object>[];
    // private serializer: RecipeSerializer<Object>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    recipes(): RecipeHolder<Object>[];
    serializer(): RecipeSerializer<Object>;
    toString(): string;
    // private write(arg0: RegistryFriendlyByteBuf): void;
}