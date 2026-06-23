import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { ClientboundLevelChunkPacketData$BlockEntityInfo } from '../../../../../net/minecraft/network/protocol/game/ClientboundLevelChunkPacketData$BlockEntityInfo.d.ts'
import type { ClientboundLevelChunkPacketData$BlockEntityTagOutput } from '../../../../../net/minecraft/network/protocol/game/ClientboundLevelChunkPacketData$BlockEntityTagOutput.d.ts'
import type { BlockEntityType } from '../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { Heightmap$Types } from '../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
export class ClientboundLevelChunkPacketData extends Object {
    static extractChunkData(parambuffer: FriendlyByteBuf, paramchunk: LevelChunk): void;
    constructor(input: RegistryFriendlyByteBuf, x: number, z: number)
    constructor(levelChunk: LevelChunk)
    // private blockEntitiesData: ClientboundLevelChunkPacketData$BlockEntityInfo[];
    // private buffer: number[];
    readonly heightmaps: { [key in Heightmap$Types]: number[] };
    // private getBlockEntitiesTags(output: (param0: BlockPos, param1: BlockEntityType<any>, param2: CompoundTag) => void, x: number, z: number): void;
    getBlockEntitiesTagsConsumer(x: number, z: number): (param0: (param0: BlockPos, param1: BlockEntityType<any>, param2: CompoundTag) => void) => void;
    getHeightmaps(): { [key in Heightmap$Types]: number[] };
    getReadBuffer(): FriendlyByteBuf;
    // private getWriteBuffer(): ByteBuf;
    write(output: RegistryFriendlyByteBuf): void;
}