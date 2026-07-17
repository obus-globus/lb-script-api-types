import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { ServerboundClientCommandPacket$Action } from '../../../../../net/minecraft/network/protocol/game/ServerboundClientCommandPacket$Action.d.ts'
export class ServerboundClientCommandPacket extends Object implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundClientCommandPacket>;
    constructor(action: ServerboundClientCommandPacket$Action)
    readonly action: ServerboundClientCommandPacket$Action;
    getAction(): ServerboundClientCommandPacket$Action;
    handle(listener: ServerGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundClientCommandPacket>;
    // private write(output: FriendlyByteBuf): void;
}