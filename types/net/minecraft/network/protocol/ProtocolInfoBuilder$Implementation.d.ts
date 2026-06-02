import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ConnectionProtocol } from '../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { PacketListener } from '../../../../net/minecraft/network/PacketListener.d.ts'
import type { ProtocolInfo } from '../../../../net/minecraft/network/ProtocolInfo.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { BundlerInfo } from '../../../../net/minecraft/network/protocol/BundlerInfo.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketFlow } from '../../../../net/minecraft/network/protocol/PacketFlow.d.ts'
export class ProtocolInfoBuilder$Implementation<L extends PacketListener> extends Record implements ProtocolInfo<L> {
    private constructor(id: ConnectionProtocol, flow: PacketFlow, codec: StreamCodec<ByteBuf, Packet<L>>, bundlerInfo: BundlerInfo)
    // private bundlerInfo: BundlerInfo;
    // private codec: StreamCodec<ByteBuf, Packet<L>>;
    // private flow: PacketFlow;
    // private id: ConnectionProtocol;
    bundlerInfo(): BundlerInfo;
    codec(): StreamCodec<ByteBuf, Packet<L>>;
    equals(o: Object | null): boolean;
    flow(): PacketFlow;
    hashCode(): number;
    id(): ConnectionProtocol;
    toString(): string;
}