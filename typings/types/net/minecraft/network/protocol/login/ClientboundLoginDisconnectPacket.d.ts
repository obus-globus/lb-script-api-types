import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientLoginPacketListener } from '../../../../../net/minecraft/network/protocol/login/ClientLoginPacketListener.d.ts'
export class ClientboundLoginDisconnectPacket extends Record implements Packet<ClientLoginPacketListener> {
    static STREAM_CODEC: StreamCodec<ByteBuf, ClientboundLoginDisconnectPacket>;
    constructor(reason: Component)
    // private reason: Component;
    equals(o: Object | null): boolean;
    handle(listener: ClientLoginPacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    reason(): Component;
    toString(): string;
    type(): PacketType<ClientboundLoginDisconnectPacket>;
}