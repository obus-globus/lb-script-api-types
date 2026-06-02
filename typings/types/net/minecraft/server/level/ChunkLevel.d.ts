import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FullChunkStatus } from '../../../../net/minecraft/server/level/FullChunkStatus.d.ts'
import type { ChunkStatus } from '../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
export class ChunkLevel extends Object {
    static MAX_LEVEL: number;
    static RADIUS_AROUND_FULL_CHUNK: number;
    static byStatus(paramstatus: FullChunkStatus): number;
    static byStatus(paramstatus: ChunkStatus): number;
    static fullStatus(paramlevel: number): FullChunkStatus;
    static generationStatus(paramlevel: number): ChunkStatus;
    static getStatusAroundFullChunk(paramdistanceToFullChunk: number): ChunkStatus;
    static getStatusAroundFullChunk(paramdistanceToFullChunk: number, paramdefaultValue: ChunkStatus): ChunkStatus;
    static isBlockTicking(paramlevel: number): boolean;
    static isEntityTicking(paramlevel: number): boolean;
    static isLoaded(paramlevel: number): boolean;
    constructor()
}