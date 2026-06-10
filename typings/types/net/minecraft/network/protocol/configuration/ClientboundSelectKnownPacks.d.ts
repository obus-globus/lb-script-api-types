import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientConfigurationPacketListener } from '../../../../../net/minecraft/network/protocol/configuration/ClientConfigurationPacketListener.d.ts'
import type { KnownPack } from '../../../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
export class ClientboundSelectKnownPacks extends Record implements Packet<ClientConfigurationPacketListener> {
    static STREAM_CODEC: StreamCodec<ByteBuf, ClientboundSelectKnownPacks>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    constructor(knownPacks: KnownPack[])
    // private knownPacks: KnownPack[];
    equals(o: Object | null): boolean;
    handle(listener: ClientConfigurationPacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    knownPacks(): KnownPack[];
    toString(): string;
    type(): PacketType<ClientboundSelectKnownPacks>;
}