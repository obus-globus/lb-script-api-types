import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { RecipeBookType } from '../../../../../net/minecraft/world/inventory/RecipeBookType.d.ts'
export class ServerboundRecipeBookChangeSettingsPacket extends Object implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundRecipeBookChangeSettingsPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    private constructor(input: FriendlyByteBuf)
    constructor(bookType: RecipeBookType, isOpen: boolean, isFiltering: boolean)
    readonly bookType: RecipeBookType;
    // private isFiltering: boolean;
    // private isOpen: boolean;
    getBookType(): RecipeBookType;
    handle(listener: ServerGamePacketListener): void;
    isFiltering(): boolean;
    isOpen(): boolean;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundRecipeBookChangeSettingsPacket>;
    // private write(output: FriendlyByteBuf): void;
}