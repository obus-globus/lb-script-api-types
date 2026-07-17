import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { ServerboundSetGameRulePacket$Entry } from '../../../../../net/minecraft/network/protocol/game/ServerboundSetGameRulePacket$Entry.d.ts'
export class ServerboundSetGameRulePacket extends Record implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<ByteBuf, ServerboundSetGameRulePacket>;
    constructor(entries: ServerboundSetGameRulePacket$Entry[])
    // private entries: ServerboundSetGameRulePacket$Entry[];
    entries(): ServerboundSetGameRulePacket$Entry[];
    equals(o: Object | null): boolean;
    handle(listener: ServerGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    toString(): string;
    type(): PacketType<ServerboundSetGameRulePacket>;
}