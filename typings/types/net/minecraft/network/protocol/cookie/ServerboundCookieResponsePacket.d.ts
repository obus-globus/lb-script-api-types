import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerCookiePacketListener } from '../../../../../net/minecraft/network/protocol/cookie/ServerCookiePacketListener.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ServerboundCookieResponsePacket extends Record implements Packet<ServerCookiePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundCookieResponsePacket>;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    constructor(key: Identifier, payload: number[])
    // private key: Identifier;
    // private payload: number[];
    equals(o: Object | null): boolean;
    handle(listener: ServerCookiePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    key(): Identifier;
    payload(): number[];
    toString(): string;
    type(): PacketType<ServerboundCookieResponsePacket>;
    // private write(output: FriendlyByteBuf): void;
}