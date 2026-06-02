import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ConnectionProtocol } from '../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { PacketListener } from '../../../../net/minecraft/network/PacketListener.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { BundleDelimiterPacket } from '../../../../net/minecraft/network/protocol/BundleDelimiterPacket.d.ts'
import type { BundlerInfo } from '../../../../net/minecraft/network/protocol/BundlerInfo.d.ts'
import type { CodecModifier } from '../../../../net/minecraft/network/protocol/CodecModifier.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketFlow } from '../../../../net/minecraft/network/protocol/PacketFlow.d.ts'
import type { PacketType } from '../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ProtocolInfoBuilder$CodecEntry } from '../../../../net/minecraft/network/protocol/ProtocolInfoBuilder$CodecEntry.d.ts'
import type { SimpleUnboundProtocol } from '../../../../net/minecraft/network/protocol/SimpleUnboundProtocol.d.ts'
import type { UnboundProtocol } from '../../../../net/minecraft/network/protocol/UnboundProtocol.d.ts'
export class ProtocolInfoBuilder<T extends PacketListener, B extends ByteBuf, C extends Object | number | string | boolean> extends Object {
    static clientboundProtocol(paramid: ConnectionProtocol, paramconfig: (param0: Object | null) => void): SimpleUnboundProtocol<Object, Object>;
    static contextClientboundProtocol(paramid: ConnectionProtocol, paramconfig: (param0: Object | null) => void): UnboundProtocol<Object, Object, Object>;
    static contextServerboundProtocol(paramid: ConnectionProtocol, paramconfig: (param0: Object | null) => void): UnboundProtocol<Object, Object, Object>;
    static serverboundProtocol(paramid: ConnectionProtocol, paramconfig: (param0: Object | null) => void): SimpleUnboundProtocol<Object, Object>;
    constructor(protocol: ConnectionProtocol, flow: PacketFlow)
    // private bundlerInfo: BundlerInfo;
    // private codecs: ProtocolInfoBuilder$CodecEntry<T, Object, B, C>[];
    // private flow: PacketFlow;
    // private protocol: ConnectionProtocol;
    addPacket(type: PacketType<P>, serializer: StreamCodec<B, P>): ProtocolInfoBuilder<T, B, C>;
    addPacket(type: PacketType<P>, serializer: StreamCodec<B, P>, modifier: (param0: B, param1: P) => C): ProtocolInfoBuilder<T, B, C>;
    // private buildPacketCodec(contextWrapper: (param0: ByteBuf) => B, codecs: ProtocolInfoBuilder$CodecEntry<T, Object, B, C>[], context: C): StreamCodec<ByteBuf, Packet<T>>;
    buildUnbound(): UnboundProtocol<T, B, C>;
    buildUnbound(context: C): SimpleUnboundProtocol<T, B>;
    withBundlePacket<D extends BundleDelimiterPacket<T>>(bundlerPacket: PacketType<P>, constructor: (param0: Packet<T>[]) => P, delimiterPacket: D): ProtocolInfoBuilder<T, B, C>;
}