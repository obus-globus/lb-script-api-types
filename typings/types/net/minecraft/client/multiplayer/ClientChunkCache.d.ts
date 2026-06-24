import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientChunkCache$Storage } from '../../../../net/minecraft/client/multiplayer/ClientChunkCache$Storage.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { SectionPos } from '../../../../net/minecraft/core/SectionPos.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { ClientboundLevelChunkPacketData$BlockEntityTagOutput } from '../../../../net/minecraft/network/protocol/game/ClientboundLevelChunkPacketData$BlockEntityTagOutput.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LightLayer } from '../../../../net/minecraft/world/level/LightLayer.d.ts'
import type { BlockEntityType } from '../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { ChunkSource } from '../../../../net/minecraft/world/level/chunk/ChunkSource.d.ts'
import type { LevelChunk } from '../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { ChunkStatus } from '../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { Heightmap$Types } from '../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { LevelLightEngine } from '../../../../net/minecraft/world/level/lighting/LevelLightEngine.d.ts'
export class ClientChunkCache extends ChunkSource {
    constructor(level: ClientLevel, serverChunkRadius: number)
    // private emptyChunk: LevelChunk;
    readonly level: ClientLevel;
    readonly lightEngine: LevelLightEngine;
    storage: ClientChunkCache$Storage;
    addedEmptySections(): (Object | null)[];
    addedLoadedChunks(): (Object | null)[];
    drop(pos: ChunkPos): void;
    flipUpdateTrackingSets(): void;
    gatherStats(): string;
    getChunk(x: number, z: number, loadOrGenerate: boolean): LevelChunk;
    getChunk(x: number, z: number, targetStatus: ChunkStatus, loadOrGenerate: boolean): LevelChunk;
    getLevel(): BlockGetter;
    getLightEngine(): LevelLightEngine;
    getLoadedChunksCount(): number;
    onLightUpdate(layer: LightLayer, pos: SectionPos): void;
    onSectionEmptinessChanged(sectionX: number, sectionY: number, sectionZ: number, empty: boolean): void;
    removedEmptySections(): (Object | null)[];
    removedLoadedChunks(): (Object | null)[];
    replaceBiomes(chunkX: number, chunkZ: number, readBuffer: FriendlyByteBuf): void;
    replaceWithPacketData(chunkX: number, chunkZ: number, readBuffer: FriendlyByteBuf, heightmaps: { [key in Heightmap$Types]: number[] }, blockEntities: (param0: (param0: BlockPos, param1: BlockEntityType<any>, param2: CompoundTag) => void) => void): LevelChunk;
    tick(haveTime: () => boolean, tickChunks: boolean): void;
    updateViewCenter(x: number, z: number): void;
    updateViewRadius(viewRange: number): void;
}