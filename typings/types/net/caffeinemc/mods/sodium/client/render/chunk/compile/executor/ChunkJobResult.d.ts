import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../../../java/lang/Throwable.d.ts'
import type { RenderSection } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { JobEffort } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/JobEffort.d.ts'
import type { ChunkJob } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkJob.d.ts'
import type { ChunkBuilderTask } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks/ChunkBuilderTask.d.ts'
export class ChunkJobResult<OUTPUT extends unknown> extends Object {
    static exceptionally<OUTPUT extends unknown>(paramarg0: Throwable): ChunkJobResult<OUTPUT>;
    static successfully<OUTPUT extends unknown>(paramarg0: OUTPUT): ChunkJobResult<OUTPUT>;
    static successfully<OUTPUT extends unknown>(paramarg0: OUTPUT, paramarg1: JobEffort): ChunkJobResult<OUTPUT>;
    private constructor(arg0: OUTPUT, arg1: Throwable, arg2: JobEffort)
    // private associatedJob: ChunkJob;
    readonly jobEffort: JobEffort;
    // private output: OUTPUT;
    // private section: RenderSection;
    // private throwable: Throwable;
    associateWithChunkTask(arg0: ChunkBuilderTask<any>, arg1: ChunkJob): void;
    clearJobFromSection(): void;
    getJobEffort(): JobEffort;
    unwrap(): OUTPUT;
}