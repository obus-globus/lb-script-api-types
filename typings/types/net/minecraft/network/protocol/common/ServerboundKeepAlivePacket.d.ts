import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ServerCommonPacketListener.d.ts'
export class ServerboundKeepAlivePacket extends Object implements Packet<ServerCommonPacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundKeepAlivePacket>;
    constructor(id: number)
    id: number;
    getId(): number;
    handle(listener: ServerCommonPacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundKeepAlivePacket>;
    // private write(output: FriendlyByteBuf): void;
}