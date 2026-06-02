import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PacketListener } from '../../../../net/minecraft/network/PacketListener.d.ts'
import type { IdDispatchCodec$Builder } from '../../../../net/minecraft/network/codec/IdDispatchCodec$Builder.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketFlow } from '../../../../net/minecraft/network/protocol/PacketFlow.d.ts'
import type { PacketType } from '../../../../net/minecraft/network/protocol/PacketType.d.ts'
export class ProtocolCodecBuilder<B extends ByteBuf, L extends PacketListener> extends Object {
    constructor(flow: PacketFlow)
    // private dispatchBuilder: IdDispatchCodec$Builder<B, Packet<L>, PacketType<Packet<L>>>;
    // private flow: PacketFlow;
    add(type: PacketType<T>, serializer: StreamCodec<B, T>): ProtocolCodecBuilder<B, L>;
    build(): StreamCodec<B, Packet<L>>;
}