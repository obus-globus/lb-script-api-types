import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ClientboundBlockUpdatePacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundBlockUpdatePacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    constructor(pos: BlockPos, state: BlockState)
    constructor(level: BlockGetter, pos: BlockPos)
    readonly blockState: BlockState;
    readonly pos: BlockPos;
    getBlockState(): BlockState;
    getPos(): BlockPos;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundBlockUpdatePacket>;
}