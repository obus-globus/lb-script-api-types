import type { RenderSection } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { ChunkBuildContext } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkBuildContext.d.ts'
import type { ChunkSortOutput } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkSortOutput.d.ts'
import type { MeshTaskSizeEstimator } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/MeshTaskSizeEstimator.d.ts'
import type { ChunkBuilderTask } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks/ChunkBuilderTask.d.ts'
import type { DynamicSorter } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/DynamicSorter.d.ts'
import type { CancellationToken } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/util/task/CancellationToken.d.ts'
import type { Vector3dc } from '../../../../../../../../../org/joml/Vector3dc.d.ts'
export class ChunkBuilderSortingTask extends ChunkBuilderTask<ChunkSortOutput> {
    static createTask(paramarg0: RenderSection, paramarg1: number, paramarg2: Vector3dc): ChunkBuilderSortingTask;
    constructor(arg0: RenderSection, arg1: number, arg2: Vector3dc, arg3: DynamicSorter)
    // private sorter: DynamicSorter;
    estimateTaskSizeWith(arg0: MeshTaskSizeEstimator): number;
    execute(arg0: ChunkBuildContext, arg1: CancellationToken): ChunkSortOutput;
}