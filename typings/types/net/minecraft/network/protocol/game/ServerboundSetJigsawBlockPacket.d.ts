import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { JigsawBlockEntity$JointType } from '../../../../../net/minecraft/world/level/block/entity/JigsawBlockEntity$JointType.d.ts'
export class ServerboundSetJigsawBlockPacket extends Object implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundSetJigsawBlockPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    constructor(blockPos: BlockPos, name: Identifier, target: Identifier, pool: Identifier, finalState: string, joint: JigsawBlockEntity$JointType, selectionPriority: number, placementPriority: number)
    private constructor(input: FriendlyByteBuf)
    readonly finalState: string;
    readonly joint: JigsawBlockEntity$JointType;
    readonly name: Identifier;
    readonly placementPriority: number;
    readonly pool: Identifier;
    readonly pos: BlockPos;
    readonly selectionPriority: number;
    readonly target: Identifier;
    getFinalState(): string;
    getJoint(): JigsawBlockEntity$JointType;
    getName(): Identifier;
    getPlacementPriority(): number;
    getPool(): Identifier;
    getPos(): BlockPos;
    getSelectionPriority(): number;
    getTarget(): Identifier;
    handle(listener: ServerGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundSetJigsawBlockPacket>;
    // private write(output: FriendlyByteBuf): void;
}