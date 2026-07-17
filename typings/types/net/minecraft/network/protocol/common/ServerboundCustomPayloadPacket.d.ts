import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GenericPayloadAccessor } from '../../../../../net/fabricmc/fabric/impl/networking/GenericPayloadAccessor.d.ts'
import type { PayloadTypeRegistryImpl } from '../../../../../net/fabricmc/fabric/impl/networking/PayloadTypeRegistryImpl.d.ts'
import type { SplittablePacket } from '../../../../../net/fabricmc/fabric/impl/networking/splitter/SplittablePacket.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { PacketEncoder } from '../../../../../net/minecraft/network/PacketEncoder.d.ts'
import type { PacketListener } from '../../../../../net/minecraft/network/PacketListener.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ServerCommonPacketListener.d.ts'
import type { CustomPacketPayload } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
export class ServerboundCustomPayloadPacket extends Record implements GenericPayloadAccessor, SplittablePacket, Packet<ServerCommonPacketListener> {
    static MAX_PAYLOAD_SIZE: number;
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundCustomPayloadPacket>;
    constructor(payload: CustomPacketPayload)
    // private payload: CustomPacketPayload;
    equals(o: Object | null): boolean;
    fabric_payload(): CustomPacketPayload;
    fabric_split(arg0: PayloadTypeRegistryImpl<FriendlyByteBuf>, arg1: ChannelHandlerContext, arg2: PacketEncoder<PacketListener>, arg3: Packet<PacketListener>, arg4: (param0: Object) => void): void;
    handle(listener: ServerCommonPacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    payload(): CustomPacketPayload;
    toString(): string;
    type(): PacketType<ServerboundCustomPayloadPacket>;
}