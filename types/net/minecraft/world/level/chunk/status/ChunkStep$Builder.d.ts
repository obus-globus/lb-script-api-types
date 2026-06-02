import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GenerationChunkHolder } from '../../../../../../net/minecraft/server/level/GenerationChunkHolder.d.ts'
import type { StaticCache2D } from '../../../../../../net/minecraft/util/StaticCache2D.d.ts'
import type { ChunkAccess } from '../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkStatus } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { ChunkStatusTask } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStatusTask.d.ts'
import type { ChunkStep } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStep.d.ts'
import type { WorldGenContext } from '../../../../../../net/minecraft/world/level/chunk/status/WorldGenContext.d.ts'
export class ChunkStep$Builder extends Object {
    constructor(status: ChunkStatus)
    constructor(status: ChunkStatus, parent: ChunkStep)
    // private blockStateWriteRadius: number;
    // private directDependenciesByRadius: ChunkStatus[];
    // private parent: ChunkStep;
    // private status: ChunkStatus;
    // private task: (param0: WorldGenContext, param1: ChunkStep, param2: StaticCache2D<GenerationChunkHolder>, param3: ChunkAccess) => java.util.concurrent.CompletableFuture<net.minecraft.world.level.chunk.ChunkAccess>;
    addRequirement(status: ChunkStatus, radius: number): ChunkStep$Builder;
    blockStateWriteRadius(radius: number): ChunkStep$Builder;
    build(): ChunkStep;
    // private buildAccumulatedDependencies(): ChunkStatus[];
    // private getRadiusOfParent(status: ChunkStatus): number;
    setTask(task: (param0: WorldGenContext, param1: ChunkStep, param2: StaticCache2D<GenerationChunkHolder>, param3: ChunkAccess) => java.util.concurrent.CompletableFuture<net.minecraft.world.level.chunk.ChunkAccess>): ChunkStep$Builder;
}