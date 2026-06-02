import type { IChunkTracker } from '../../../../../com/viaversion/viafabricplus/injection/access/core/bedrock/IChunkTracker.d.ts'
import type { StoredObject } from '../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { ChunkPosition } from '../../../../../com/viaversion/viaversion/api/minecraft/ChunkPosition.d.ts'
import type { BlockEntity } from '../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { Chunk } from '../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { DataPalette } from '../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPalette.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { IntObjectPair } from '../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntObjectPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockBlockEntity } from '../../../../../net/raphimc/viabedrock/api/chunk/BedrockBlockEntity.d.ts'
import type { BedrockChunk } from '../../../../../net/raphimc/viabedrock/api/chunk/BedrockChunk.d.ts'
import type { BedrockChunkSection } from '../../../../../net/raphimc/viabedrock/api/chunk/section/BedrockChunkSection.d.ts'
import type { Dimension } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/Dimension.d.ts'
import type { Position3f } from '../../../../../net/raphimc/viabedrock/protocol/model/Position3f.d.ts'
import type { ChunkTracker$SubChunkPosition } from '../../../../../net/raphimc/viabedrock/protocol/storage/ChunkTracker$SubChunkPosition.d.ts'
export class ChunkTracker extends StoredObject implements IChunkTracker {
    constructor(arg0: UserConnection, arg1: Dimension)
    // private centerX: number;
    // private centerZ: number;
    // private chunkType: Type<Chunk>;
    // private chunks: Long2ObjectMap<BedrockChunk>;
    readonly dimension: Dimension;
    // private dirtyChunks: (Object | null)[];
    readonly minY: number;
    // private pendingSubChunks: ChunkTracker$SubChunkPosition[];
    readonly radius: number;
    // private subChunkRequests: ChunkTracker$SubChunkPosition[];
    readonly worldHeight: number;
    addBlockEntity(arg0: BedrockBlockEntity): void;
    bedrockAirId(): number;
    createChunk(arg0: number, arg1: number, arg2: number): BedrockChunk;
    getBlockEntity(arg0: BlockPosition): BedrockBlockEntity;
    getBlockState(arg0: BlockPosition): number;
    getBlockState(arg0: number, arg1: BlockPosition): number;
    getChunk(arg0: number, arg1: number): BedrockChunk;
    getChunkSection(arg0: BlockPosition): BedrockChunkSection;
    getChunkSection(arg0: number, arg1: number, arg2: number): BedrockChunkSection;
    getDimension(): Dimension;
    getJavaBlockState(arg0: BlockPosition): number;
    getJavaBlockState(arg0: BedrockChunkSection, arg1: number, arg2: number, arg3: number): number;
    getMaxY(): number;
    getMinY(): number;
    getWorldHeight(): number;
    handleBlockChange(arg0: BlockPosition, arg1: number, arg2: number): IntObjectPair<BlockEntity>;
    handleBlockPalette(arg0: BedrockChunkSection): BedrockChunkSection;
    isChunkLoaded(arg0: ChunkPosition): boolean;
    isEmpty(): boolean;
    isInLoadDistance(arg0: number, arg1: number): boolean;
    isInRenderDistance(arg0: number, arg1: number): boolean;
    isInUnloadedChunkSection(arg0: Position3f): boolean;
    mergeSubChunk(arg0: number, arg1: number, arg2: number, arg3: BedrockChunkSection, arg4: BedrockBlockEntity[]): boolean;
    // private remapChunk(arg0: BedrockChunk): Chunk;
    removeOutOfLoadDistanceChunks(): void;
    // private replaceLegacyBlocks(arg0: BedrockChunkSection): void;
    requestSubChunk(arg0: number, arg1: number, arg2: number): void;
    requestSubChunks(arg0: number, arg1: number, arg2: number, arg3: number): void;
    // private resolvePersistentIds(arg0: BedrockChunkSection): void;
    sendChunk(arg0: number, arg1: number): void;
    sendChunkInNextTick(arg0: number, arg1: number): void;
    setCenter(arg0: number, arg1: number): void;
    setRadius(arg0: number): void;
    tick(): void;
    // private transferPaletteData(arg0: DataPalette, arg1: DataPalette): void;
    unloadChunk(arg0: ChunkPosition): void;
    viaFabricPlus$getChunks(): number;
    viaFabricPlus$getPendingSubChunks(): number;
    viaFabricPlus$getSubChunkRequests(): number;
}