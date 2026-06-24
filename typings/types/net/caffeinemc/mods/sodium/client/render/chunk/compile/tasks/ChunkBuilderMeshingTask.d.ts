import type { RenderSection } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { ChunkBuildContext } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkBuildContext.d.ts'
import type { ChunkBuildOutput } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkBuildOutput.d.ts'
import type { MeshTaskSizeEstimator } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/MeshTaskSizeEstimator.d.ts'
import type { ChunkBuilderTask } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks/ChunkBuilderTask.d.ts'
import type { SortBehavior } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/SortBehavior.d.ts'
import type { ChunkVertexEncoder$Vertex } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder$Vertex.d.ts'
import type { CancellationToken } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/util/task/CancellationToken.d.ts'
import type { LevelSlice } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/world/LevelSlice.d.ts'
import type { ChunkRenderContext } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/world/cloned/ChunkRenderContext.d.ts'
import type { CrashReport } from '../../../../../../../../../net/minecraft/CrashReport.d.ts'
import type { ReportedException } from '../../../../../../../../../net/minecraft/ReportedException.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vector3dc } from '../../../../../../../../../org/joml/Vector3dc.d.ts'
export class ChunkBuilderMeshingTask extends ChunkBuilderTask<ChunkBuildOutput> {
    constructor(arg0: RenderSection, arg1: number, arg2: Vector3dc, arg3: ChunkRenderContext, arg4: SortBehavior, arg5: boolean, arg6: boolean)
    // private blockingTask: boolean;
    // private forceSort: boolean;
    // private renderContext: ChunkRenderContext;
    // private sortBehavior: SortBehavior;
    // private vertices: ChunkVertexEncoder$Vertex[];
    estimateTaskSizeWith(arg0: MeshTaskSizeEstimator): number;
    execute(arg0: ChunkBuildContext, arg1: CancellationToken): ChunkBuildOutput;
    // private fillCrashInfo(arg0: CrashReport, arg1: LevelSlice, arg2: BlockPos): ReportedException;
}