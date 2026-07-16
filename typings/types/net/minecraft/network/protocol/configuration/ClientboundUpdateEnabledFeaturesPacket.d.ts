import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientConfigurationPacketListener } from '../../../../../net/minecraft/network/protocol/configuration/ClientConfigurationPacketListener.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientboundUpdateEnabledFeaturesPacket extends Record implements Packet<ClientConfigurationPacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundUpdateEnabledFeaturesPacket>;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    constructor(features: Identifier[])
    // private features: Identifier[];
    equals(o: Object | null): boolean;
    features(): Identifier[];
    handle(listener: ClientConfigurationPacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    toString(): string;
    type(): PacketType<ClientboundUpdateEnabledFeaturesPacket>;
    // private write(output: FriendlyByteBuf): void;
}