import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientCookiePacketListener } from '../../../../../net/minecraft/network/protocol/cookie/ClientCookiePacketListener.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientboundCookieRequestPacket extends Record implements Packet<ClientCookiePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundCookieRequestPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    private constructor(input: FriendlyByteBuf)
    constructor(key: Identifier)
    // private key: Identifier;
    equals(o: Object | null): boolean;
    handle(listener: ClientCookiePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    key(): Identifier;
    toString(): string;
    type(): PacketType<ClientboundCookieRequestPacket>;
    // private write(output: FriendlyByteBuf): void;
}