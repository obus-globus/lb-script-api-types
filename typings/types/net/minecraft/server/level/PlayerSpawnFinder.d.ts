import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PlayerSpawnFinder extends Object {
    static findSpawn(paramlevel: ServerLevel, paramspawnSuggestion: BlockPos): CompletableFuture<Vec3>;
    static getSpawnPosInChunk(paramlevel: ServerLevel, paramchunkPos: ChunkPos): BlockPos;
    private constructor(level: ServerLevel, spawnSuggestion: BlockPos, radius: number)
    // private candidateCount: number;
    // private coprime: number;
    // private finishedFuture: CompletableFuture<Vec3>;
    // private level: ServerLevel;
    // private nextCandidateIndex: number;
    // private offset: number;
    // private radius: number;
    // private spawnSuggestion: BlockPos;
    // private scheduleCandidate(candidateX: number, candidateZ: number, candidateIndex: number, candidateChecker: () => Optional<Vec3>): void;
    // private scheduleNext(): void;
}