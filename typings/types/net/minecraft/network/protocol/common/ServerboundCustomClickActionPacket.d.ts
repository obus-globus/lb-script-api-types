import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ServerCommonPacketListener.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ServerboundCustomClickActionPacket extends Record implements Packet<ServerCommonPacketListener> {
    static STREAM_CODEC: StreamCodec<ByteBuf, ServerboundCustomClickActionPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    constructor(id: Identifier, payload: Optional<Tag>)
    // private id: Identifier;
    // private payload: Optional<Tag>;
    equals(o: Object | null): boolean;
    handle(listener: ServerCommonPacketListener): void;
    hashCode(): number;
    id(): Identifier;
    isSkippable(): boolean;
    isTerminal(): boolean;
    payload(): Optional<Tag>;
    toString(): string;
    type(): PacketType<ServerboundCustomClickActionPacket>;
}