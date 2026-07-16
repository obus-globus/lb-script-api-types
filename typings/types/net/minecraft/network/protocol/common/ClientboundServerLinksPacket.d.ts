import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ClientCommonPacketListener.d.ts'
import type { ServerLinks$UntrustedEntry } from '../../../../../net/minecraft/server/ServerLinks$UntrustedEntry.d.ts'
export class ClientboundServerLinksPacket extends Record implements Packet<ClientCommonPacketListener> {
    static STREAM_CODEC: StreamCodec<ByteBuf, ClientboundServerLinksPacket>;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    constructor(links: ServerLinks$UntrustedEntry[])
    // private links: ServerLinks$UntrustedEntry[];
    equals(o: Object | null): boolean;
    handle(listener: ClientCommonPacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    links(): ServerLinks$UntrustedEntry[];
    toString(): string;
    type(): PacketType<ClientboundServerLinksPacket>;
}