import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GenerationChunkHolder } from '../../../../../../net/minecraft/server/level/GenerationChunkHolder.d.ts'
import type { StaticCache2D } from '../../../../../../net/minecraft/util/StaticCache2D.d.ts'
import type { ChunkAccess } from '../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkStep } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStep.d.ts'
import type { WorldGenContext } from '../../../../../../net/minecraft/world/level/chunk/status/WorldGenContext.d.ts'
export class ChunkStatusTasks extends Object {
    static full(paramcontext: WorldGenContext, paramstep: ChunkStep, paramchunks: StaticCache2D<GenerationChunkHolder>, paramchunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    static generateBiomes(paramcontext: WorldGenContext, paramstep: ChunkStep, paramchunks: StaticCache2D<GenerationChunkHolder>, paramchunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    static generateCarvers(paramcontext: WorldGenContext, paramstep: ChunkStep, paramchunks: StaticCache2D<GenerationChunkHolder>, paramchunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    static generateFeatures(paramcontext: WorldGenContext, paramstep: ChunkStep, paramchunks: StaticCache2D<GenerationChunkHolder>, paramchunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    static generateNoise(paramcontext: WorldGenContext, paramstep: ChunkStep, paramchunks: StaticCache2D<GenerationChunkHolder>, paramchunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    static generateSpawn(paramcontext: WorldGenContext, paramstep: ChunkStep, paramchunks: StaticCache2D<GenerationChunkHolder>, paramchunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    static generateStructureReferences(paramcontext: WorldGenContext, paramstep: ChunkStep, paramchunks: StaticCache2D<GenerationChunkHolder>, paramchunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    static generateStructureStarts(paramcontext: WorldGenContext, paramstep: ChunkStep, paramchunks: StaticCache2D<GenerationChunkHolder>, paramchunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    static generateSurface(paramcontext: WorldGenContext, paramstep: ChunkStep, paramchunks: StaticCache2D<GenerationChunkHolder>, paramchunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    static initializeLight(paramcontext: WorldGenContext, paramstep: ChunkStep, paramchunks: StaticCache2D<GenerationChunkHolder>, paramchunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    static light(paramcontext: WorldGenContext, paramstep: ChunkStep, paramchunks: StaticCache2D<GenerationChunkHolder>, paramchunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    static loadStructureStarts(paramcontext: WorldGenContext, paramstep: ChunkStep, paramcache: StaticCache2D<GenerationChunkHolder>, paramchunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    static passThrough(paramcontext: WorldGenContext, paramstep: ChunkStep, paramchunks: StaticCache2D<GenerationChunkHolder>, paramchunk: ChunkAccess): CompletableFuture<ChunkAccess>;
    constructor()
}