import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../../../java/lang/Throwable.d.ts'
import type { RenderSection } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { JobEffort } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/JobEffort.d.ts'
import type { ChunkJob } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkJob.d.ts'
import type { ChunkBuilderTask } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks/ChunkBuilderTask.d.ts'
export class ChunkJobResult<OUTPUT extends unknown> extends Object {
    static exceptionally(paramarg0: Throwable): ChunkJobResult<Object>;
    static successfully(paramarg0: Object | null): ChunkJobResult<Object>;
    static successfully(paramarg0: Object | null, paramarg1: JobEffort): ChunkJobResult<Object>;
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