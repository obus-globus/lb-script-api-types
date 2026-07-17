import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export class ClientboundBlockEventPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundBlockEventPacket>;
    constructor(pos: BlockPos, block: Block, b0: number, b1: number)
    readonly b0: number;
    readonly b1: number;
    readonly block: Block;
    readonly pos: BlockPos;
    getB0(): number;
    getB1(): number;
    getBlock(): Block;
    getPos(): BlockPos;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundBlockEventPacket>;
    // private write(output: RegistryFriendlyByteBuf): void;
}