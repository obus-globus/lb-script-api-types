import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GenericPayloadAccessor } from '../../../../../net/fabricmc/fabric/impl/networking/GenericPayloadAccessor.d.ts'
import type { PayloadTypeRegistryImpl } from '../../../../../net/fabricmc/fabric/impl/networking/PayloadTypeRegistryImpl.d.ts'
import type { SplittablePacket } from '../../../../../net/fabricmc/fabric/impl/networking/splitter/SplittablePacket.d.ts'
import type { ClientboundCustomPayloadPacketAccessor } from '../../../../../net/fabricmc/fabric/mixin/attachment/ClientboundCustomPayloadPacketAccessor.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { PacketEncoder } from '../../../../../net/minecraft/network/PacketEncoder.d.ts'
import type { PacketListener } from '../../../../../net/minecraft/network/PacketListener.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ClientCommonPacketListener.d.ts'
import type { CustomPacketPayload } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
export class ClientboundCustomPayloadPacket extends Record implements GenericPayloadAccessor, SplittablePacket, ClientboundCustomPayloadPacketAccessor, Packet<ClientCommonPacketListener> {
    static CONFIG_STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundCustomPayloadPacket>;
    static GAMEPLAY_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundCustomPayloadPacket>;
    static MAX_PAYLOAD_SIZE: number;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    static getMaxPayloadSize(): number;
    constructor(payload: CustomPacketPayload)
    // private payload: CustomPacketPayload;
    equals(o: Object | null): boolean;
    fabric_payload(): CustomPacketPayload;
    fabric_split(arg0: PayloadTypeRegistryImpl<FriendlyByteBuf>, arg1: ChannelHandlerContext, arg2: PacketEncoder<PacketListener>, arg3: Packet<PacketListener>, arg4: (param0: Object) => void): void;
    handle(listener: ClientCommonPacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    payload(): CustomPacketPayload;
    toString(): string;
    type(): PacketType<ClientboundCustomPayloadPacket>;
}