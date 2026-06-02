import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { RecipeDisplayEntry } from '../../../../../net/minecraft/world/item/crafting/display/RecipeDisplayEntry.d.ts'
export class ClientboundRecipeBookAddPacket$Entry extends Record {
    static FLAG_HIGHLIGHT: number;
    static FLAG_NOTIFICATION: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundRecipeBookAddPacket$Entry>;
    // private contents: RecipeDisplayEntry;
    // private flags: number;
    contents(): RecipeDisplayEntry;
    equals(o: Object | null): boolean;
    flags(): number;
    hashCode(): number;
    highlight(): boolean;
    notification(): boolean;
    toString(): string;
}