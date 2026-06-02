import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ClientCommonPacketListener.d.ts'
export class ClientboundResourcePackPushPacket extends Record implements Packet<ClientCommonPacketListener> {
    static MAX_HASH_LENGTH: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, ClientboundResourcePackPushPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    // private hash: string;
    // private id: UUID;
    // private prompt: Optional<Component>;
    // private required: boolean;
    // private url: string;
    equals(o: Object | null): boolean;
    handle(listener: ClientCommonPacketListener): void;
    hash(): string;
    hashCode(): number;
    id(): UUID;
    isSkippable(): boolean;
    isTerminal(): boolean;
    prompt(): Optional<Component>;
    required(): boolean;
    toString(): string;
    type(): PacketType<ClientboundResourcePackPushPacket>;
    url(): string;
}