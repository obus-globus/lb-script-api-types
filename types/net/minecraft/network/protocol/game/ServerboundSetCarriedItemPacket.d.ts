import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
export class ServerboundSetCarriedItemPacket extends Object implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundSetCarriedItemPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    constructor(slot: number)
    private constructor(input: FriendlyByteBuf)
    readonly slot: number;
    getSlot(): number;
    handle(listener: ServerGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundSetCarriedItemPacket>;
    // private write(output: FriendlyByteBuf): void;
}