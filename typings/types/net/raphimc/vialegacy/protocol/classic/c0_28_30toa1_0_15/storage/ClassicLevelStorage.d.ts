import type { StoredObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { ByteArrayOutputStream } from '../../../../../../../java/io/ByteArrayOutputStream.d.ts'
import type { ChunkCoord } from '../../../../../../../net/raphimc/vialegacy/api/model/ChunkCoord.d.ts'
import type { ClassicLevel } from '../../../../../../../net/raphimc/vialegacy/protocol/classic/c0_28_30toa1_0_15/model/ClassicLevel.d.ts'
export class ClassicLevelStorage extends StoredObject {
    constructor(arg0: UserConnection)
    // private chunkCountX: number;
    // private chunkCountZ: number;
    readonly classicLevel: ClassicLevel;
    // private eventLoopPing: number;
    // private loadedChunks: ChunkCoord[];
    // private netBuffer: ByteArrayOutputStream;
    // private sectionBitmask: number;
    // private sectionCountY: number;
    // private subChunkLengthX: number;
    // private subChunkLengthY: number;
    // private subChunkLengthZ: number;
    addDataPart(arg0: number[], arg1: number): void;
    finish(arg0: number, arg1: number, arg2: number): void;
    getClassicLevel(): ClassicLevel;
    hasReceivedLevel(): boolean;
    isChunkLoaded(arg0: BlockPosition): boolean;
    isChunkLoaded(arg0: ChunkCoord): boolean;
    sendChunk(arg0: ChunkCoord): void;
    sendChunks(arg0: ChunkCoord, arg1: number): void;
    sendChunks(arg0: ChunkCoord, arg1: number, arg2: number): void;
    // private shouldSend(arg0: ChunkCoord): boolean;
    tick(): void;
}