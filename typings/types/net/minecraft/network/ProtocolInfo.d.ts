import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ConnectionProtocol } from '../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { PacketListener } from '../../../net/minecraft/network/PacketListener.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { BundlerInfo } from '../../../net/minecraft/network/protocol/BundlerInfo.d.ts'
import type { Packet } from '../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketFlow } from '../../../net/minecraft/network/protocol/PacketFlow.d.ts'
export interface ProtocolInfo<T extends PacketListener> extends Object{
    bundlerInfo(): BundlerInfo;
    codec(): StreamCodec<ByteBuf, Packet<T>>;
    flow(): PacketFlow;
    id(): ConnectionProtocol;
}