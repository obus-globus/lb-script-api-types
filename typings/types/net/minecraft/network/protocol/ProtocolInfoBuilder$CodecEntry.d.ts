import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PacketListener } from '../../../../net/minecraft/network/PacketListener.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { CodecModifier } from '../../../../net/minecraft/network/protocol/CodecModifier.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ProtocolCodecBuilder } from '../../../../net/minecraft/network/protocol/ProtocolCodecBuilder.d.ts'
export class ProtocolInfoBuilder$CodecEntry<T extends PacketListener, P extends Packet<T>, B extends ByteBuf, C extends Object | number | string | boolean> extends Record {
    private constructor(type: PacketType<P>, serializer: StreamCodec<B, P>, modifier: (param0: B, param1: P) => C)
    // private modifier: (param0: B, param1: P) => C;
    // private serializer: StreamCodec<B, P>;
    // private type: PacketType<P>;
    addToBuilder(codecBuilder: ProtocolCodecBuilder<ByteBuf, T>, contextWrapper: (param0: ByteBuf) => B, context: C): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    modifier(): (param0: B, param1: P) => C;
    serializer(): StreamCodec<B, P>;
    toString(): string;
    type(): PacketType<P>;
}