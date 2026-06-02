import type { ChunkTracker } from '../../../../net/minecraft/server/level/ChunkTracker.d.ts'
export class DistanceManager$FixedPlayerDistanceChunkTracker extends ChunkTracker {
    static SOURCE: number;
    constructor(null_: DistanceManager$FixedPlayerDistanceChunkTracker, maxDistance: number)
    // private chunks: Long2ByteMap;
    // private maxDistance: number;
    getLevel(node: number): number;
    getLevelFromSource(to: number): number;
    // private havePlayer(chunkPos: number): boolean;
    onLevelChange(node: number, oldLevel: number, level: number): void;
    runAllUpdates(): void;
    setLevel(node: number, level: number): void;
}