import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientIntent } from '../../../../../net/minecraft/network/protocol/handshake/ClientIntent.d.ts'
import type { ServerHandshakePacketListener } from '../../../../../net/minecraft/network/protocol/handshake/ServerHandshakePacketListener.d.ts'
export class ClientIntentionPacket extends Record implements Packet<ServerHandshakePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientIntentionPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    constructor(protocolVersion: number, hostName: string, port: number, intention: ClientIntent)
    private constructor(input: FriendlyByteBuf)
    // private hostName: string;
    // private intention: ClientIntent;
    // private port: number;
    // private protocolVersion: number;
    equals(o: Object | null): boolean;
    handle(listener: ServerHandshakePacketListener): void;
    hashCode(): number;
    hostName(): string;
    intention(): ClientIntent;
    isSkippable(): boolean;
    isTerminal(): boolean;
    port(): number;
    protocolVersion(): number;
    toString(): string;
    type(): PacketType<ClientIntentionPacket>;
    // private write(output: FriendlyByteBuf): void;
}