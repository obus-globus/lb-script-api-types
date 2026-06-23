import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientboundPacketListener } from '../../../../net/minecraft/network/ClientboundPacketListener.d.ts'
import type { ConnectionProtocol } from '../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { PacketListener } from '../../../../net/minecraft/network/PacketListener.d.ts'
import type { ServerboundPacketListener } from '../../../../net/minecraft/network/ServerboundPacketListener.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { BundleDelimiterPacket } from '../../../../net/minecraft/network/protocol/BundleDelimiterPacket.d.ts'
import type { BundlePacket } from '../../../../net/minecraft/network/protocol/BundlePacket.d.ts'
import type { BundlerInfo } from '../../../../net/minecraft/network/protocol/BundlerInfo.d.ts'
import type { CodecModifier } from '../../../../net/minecraft/network/protocol/CodecModifier.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketFlow } from '../../../../net/minecraft/network/protocol/PacketFlow.d.ts'
import type { PacketType } from '../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ProtocolInfoBuilder$CodecEntry } from '../../../../net/minecraft/network/protocol/ProtocolInfoBuilder$CodecEntry.d.ts'
import type { SimpleUnboundProtocol } from '../../../../net/minecraft/network/protocol/SimpleUnboundProtocol.d.ts'
import type { UnboundProtocol } from '../../../../net/minecraft/network/protocol/UnboundProtocol.d.ts'
import type { Unit } from '../../../../net/minecraft/util/Unit.d.ts'
export class ProtocolInfoBuilder<T extends PacketListener, B extends ByteBuf, C extends unknown> extends Object {
    static clientboundProtocol(paramid: ConnectionProtocol, paramconfig: (param0: ProtocolInfoBuilder<ClientboundPacketListener, ByteBuf, Unit>) => void): SimpleUnboundProtocol<ClientboundPacketListener, ByteBuf>;
    static contextClientboundProtocol(paramid: ConnectionProtocol, paramconfig: (param0: ProtocolInfoBuilder<ClientboundPacketListener, ByteBuf, Object>) => void): UnboundProtocol<ClientboundPacketListener, ByteBuf, Object>;
    static contextServerboundProtocol(paramid: ConnectionProtocol, paramconfig: (param0: ProtocolInfoBuilder<ServerboundPacketListener, ByteBuf, Object>) => void): UnboundProtocol<ServerboundPacketListener, ByteBuf, Object>;
    static serverboundProtocol(paramid: ConnectionProtocol, paramconfig: (param0: ProtocolInfoBuilder<ServerboundPacketListener, ByteBuf, Unit>) => void): SimpleUnboundProtocol<ServerboundPacketListener, ByteBuf>;
    constructor(protocol: ConnectionProtocol, flow: PacketFlow)
    // private bundlerInfo: BundlerInfo;
    // private codecs: ProtocolInfoBuilder$CodecEntry<T, any, B, C>[];
    // private flow: PacketFlow;
    // private protocol: ConnectionProtocol;
    addPacket<P extends Packet<T>>(type: PacketType<P>, serializer: StreamCodec<B, P>): ProtocolInfoBuilder<T, B, C>;
    addPacket<P extends Packet<T>>(type: PacketType<P>, serializer: StreamCodec<B, P>, modifier: (param0: StreamCodec<Object, P>, param1: C) => StreamCodec<Object, P>): ProtocolInfoBuilder<T, B, C>;
    // private buildPacketCodec(contextWrapper: (param0: ByteBuf) => B, codecs: ProtocolInfoBuilder$CodecEntry<T, any, B, C>[], context: C): StreamCodec<ByteBuf, Packet<T>>;
    buildUnbound(): UnboundProtocol<T, B, C>;
    buildUnbound(context: C): SimpleUnboundProtocol<T, B>;
    withBundlePacket<P extends BundlePacket<T>, D extends BundleDelimiterPacket<T>>(bundlerPacket: PacketType<P>, constructor: (param0: Packet<T>[]) => P, delimiterPacket: D): ProtocolInfoBuilder<T, B, C>;
}